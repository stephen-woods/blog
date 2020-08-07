---
title: "Measuring Bi-directional ZStream Latency with ZIO/ScalaPB"
description: "Tapping, Timing and Refs within ZStreams"
blurb: "Learn how to measure latency of messages over a bi-directional GRPC stream using ZIO/ScalaPB"
date: "2020-08-01"
draft: true
author: Stephen Woods
featuredImage: jon-tyson-FlHdnPO6dlw-unsplash.jpg
tags:
  - ZIO
  - Scala
---


Progression of Micro Service Communication
===

At some point, any given organization will typically attempt to refactor a business critical monolithic application 
into a federation of micro services. The choices of approaches are numerous as are the benefits; hundreds of white
papers and blogs can attest to that. A common first step is to implement some kind of stateless request/response
communication between different systems: the traditional remote procedure call. There are many ways to get the job done:
standard HTTP REST calls with JSON responses, GRPC service calls, RMI/CORBA method calls, etc. They all have one thing in
common: for every request made, there is a corresponding response.

So, how do we determine how well the system performs? Regardless of which implementation you might select, it is relatively easy to come 
up with some kind of performance metrics. Simply check the current system time before making the request, check it again after 
receiving the response, and then calculate the difference between the two times. Often, developers need not be concerned
with this calculation directly as many metrics libraries, such as Drop Wizard and Prometheus, provide this functionality 
out-of-the-box.

As the refactoring progresses, the organization might identify use cases where more advanced forms of communication, such 
as bidirectional streaming of data, are more appropriate. For example, GRPC provides the ability to establish a channel between two
different systems and allow each system to send and receive protobuf messages. So, we ask the same question again - how 
do we determine how well the system performs? 

Well... The flexibility introduced by the streaming model makes answering that particular question more difficult this time. For example, a stream
can consist of a series of 5 outgoing messages, or a series of 5 incoming messages, or a mixture of both: 2 outgoing messages,
1 incoming message, an outgoing message, and finally one more incoming message before the stream channel shuts down. The 
main take away point is that with streams, we are no longer limited to a one-to-one ratio between requests and responses. It's more complicated, and
therefore, we can't measure performance the same way.

So, what can we do? Measuring the lifetime of a stream, from when it was created until it shuts down, is a fairly easy 
endeavor. It essentially uses the same approach we used for the request/response scenario. Unfortunately, it isn't very
useful as it doesn't provide any insight into the latency between messages sent along that stream. So if the goal is to
measure the latency between messages, we need to identify which events represent the beginning and ending of each span we 
want to measure.

For this article, lets limit the scope a bit. Qualifying events that represent the beginning of a span will include: 

* the last message sent
* the last message received

Likewise, qualifying events that represent the end of a span will include:
 
* the last message received

ZIO based GRPC Bi-Directional Streams with ScalaPB
===
So let's concentrate on a specific implementation. Recently I had the opportunity of working on a project where we needed
two micro services to communicate via GRPC streams. Since we were already using ZIO extensively on the client, we opted to
use the ZIO variant of Nadav Samet's excellent ScalaPB protobuf compiler for Scala. ScalaPB is a sbt plugin that generates
client and server stub code written in Scala based on a provided protobuf definition. A simple fictitious definition may look
like the following: 

```protobuf
syntax = "proto3";

option java_multiple_files = true;
option java_package = "com.silly.proto";
option java_outer_classname = "SillyService";

package silly;

message Request {
  string msg = 1;
}

message Reply {
  string msg = 1;
}

service SillyService {
  rpc fetch (Request) returns (Reply);
  rpc stream (stream Request) returns (stream Reply);
}
```

In this model, normal service calls are implemented as functions that, given a _Request_ message, return a ZIO effect of a
_Reply_ message. Stream calls are implemented as functions that, given an inbound _Request_ _ZStream_, return an
outbound _Reply_ _ZStream_. The Scalapb code generator will not only generate protobuf enabled Scala case classes for
each protobuf message, but it will also generate a trait representing the service, as well as a corresponding ZIO based
GRPC client.

```scala
object ZioSilly {

  // The SillyService interface
  trait SillyService {
    def fetch(request: Request): ZIO[Any, Status, Reply]
    def stream(request: ZStream[Any, Status, Request]): ZStream[Any, Status, Reply]
    ...
  }

  // A ZIO ZLayer environmental dependency on a SillyServiceClient.Service
  type SillyServiceClient = Has[SillyServiceClient.Service]
  
  // The SillyServiceClient that depends on a SillyServiceClient ZLayer 
  object SillyServiceClient {
    trait Service extends ZioSilly.SillyService
    
    def fetch(request: Request): ZIO[SillyServiceClient, Status, Reply] = ZIO.accessM(_.get.fetch(request))
    def stream(request: ZStream[Any, Status, Request]): ZStream[SillyServiceClient, Status, Reply] = ZStream.accessStream(_.get.stream(request))
    ...
}  
```

And some code that will allow us to create a ZIO _ZLayer_ that will satisfy the _SillyServiceClient.Service_ ZIO environment
dependency:

```scala
val sillyServiceClientLayer: Layer[Status, SillyServiceClient] = {
    def createChannel[C <: ManagedChannelBuilder[C]](): C = {
      val target = s"dns:///$host:$port/"
      ManagedChannelBuilder
        .forTarget(target).asInstanceOf[ManagedChannelBuilder[C]]
        .defaultLoadBalancingPolicy("round_robin")
        .usePlaintext()
    }

    SillyServiceClient.live {
      scalapb.zio_grpc.ZManagedChannel(createChannel())
    }
    .mapError(t => Status.UNKNOWN.withCause(t))
  }
```

As you can see, we construct a _ManagedChannelBuilder_ from GRPC's official Java library specific to our use case, and pass 
it to the ScalaPB generated "live" function on the _SillyServiceClient_ in order to create a ZIO _ZLayer_. If an exception is
thrown, we just map it to an _UNKNOWN_ GRPC Status error. Once we have an appropriate _ZLayer_, we can provide it to the 
_fetch_ and _stream_ functions on the _SillyServiceClient_ to satisfy their dependencies.

```scala
val fetchEffect : UIO[Status, Reply] = SillyServiceClient.fetch(request).provide(sillyServiceClientLayer)

val streamEffect : Stream[Status, Reply] = SillyServiceClient.stream(outStream).provide(sillyServiceClientLayer)
```

Metrics Observation
===
Congratulations! Now you have the means to communicate with a remote service in a ZIO idiomatic way! Now we need to implement
the latency metric observations that we discussed earlier. Once we have identified a latency span that we want to measure, we'll
execute some kind of metric observation effect. In this case, let's just say that we have some Prometheus _Histogram_ 
already set up, and all we need to do is call it with some duration.

```scala
// Convenient implicit conversion that converts a Duration to a double that can be used to observe on a Histogram
  implicit def durationToSeconds(duration: Duration): Double = {
    duration.toMillis.toDouble / 1000
  }

val durationFn = (duration: Duration) =>
      UIO(Metrics.grpcFetchLatency.observe(duration))
```

Modifying Outbound and Inbound ZStreams
===
Now that we have determined what we are going to do when some latency span has been identified, we will need to be able
to tap into both the outbound stream and inbound stream in order to time messages when they flow through their respective
streams. Note that this is all executing on the client side of the call.

So let's make a new enhanced "stream" ZIO effect that does what we want.

```scala
  /**
   * Returns a ZIO effect that establishes bi-directional streaming communication between two services by creating an
   * inbound message stream to match the provided outbound message stream. The resulting stream is created by applying
   * the outbound message stream to a factory effect, and provides the means of measuring the duration between sending
   * a request message on the outbound stream and receiving a reply message on the inbound stream. To do so, on each
   * inbound message received, the provided duration effectful function is executed if and only if a proceeding request
   * was made; unsolicited replies will not cause the function to be called.
   *
   * @param outboundMessageStream out bound message stream
   * @tparam E  the common error type used across both input and output streams, the factory effect, and the returned effect
   * @tparam A  out bound message type
   * @tparam B  in bound message type
   * @tparam R1 the environment for the returned effect that is dependent on some Clock
   * @return a ZIO effect that establishes bi-directional streaming communication between two services and allows measuring
   *         the duration between requests and replies
   */
  def bidiTimedStreamIO[E, A, B, R1 <: Clock](outboundMessageStream: Stream[E, A]): URIO[R1, Stream[E, B]] = {
    for {
      // Get the clock from this effect's environment. We'll use this clock when manipulating the streams so the stream
      // environments do not need to provide their own Clocks
      r <- ZIO.environment[Clock]

      // Make a reference that represents the instant an message was sent on the outbound stream. Initially set to None.
      // This reference will be set as request messages are sent and cleared when reply messages are received.
      outboundInstant <- Ref.make[Option[Long]](None)

      // Tap the outbound message stream to record the current time
      outboundMessageStream2 <- UIO(
        outboundMessageStream
          .tap(_ => zio.clock.nanoTime.flatMap(now => outboundInstant.set(Some(now))))
          .provide(r)
      )

      // Create the inbound message stream
      inboundStream <- UIO(
        SillyServiceClient
           .stream(outboundMessageStream2)
           .provideLayer(rexMsEntityClientLayer))

      // Tap the inbound message stream so that we can execute the duration functional effect on each inbound message.
      inboundStream2 <- UIO(
        inboundStream
          .tap { _ =>
            outboundInstant
              .getAndSet(None)
              .flatMap {
                case None => ZIO.unit
                case Some(outTime) =>
                  zio.clock.nanoTime.flatMap { inTime =>
                    val duration = Duration.fromNanos(inTime - outTime)
                    durationFn(duration)
                  }
            }
        }
        .provide(r)
      )
    } yield inboundStream2
  }
```
There are a number of things to note about the above code:

* Because we need to know when outbound messages are sent and when inbound messages are received, the above effect
relies on a _Clock_ ZIO dependency.
 
* Before providing the outbound stream to the _SillyServiceClient_, we modify it by
tapping into it: As each outbound message passes through the stream, it updates a reference representing when the last
outbound message was sent. In this example, we set initialize the reference to None to avoid observing unsolicited replies
from the server, but you could easily set it to the current time (when the stream starts) if your particular use case 
warrants it. 

* Finally, we tap the inbound message stream as well, to determine when the inbound message arrived, calculating
the latency (inbound time - outbound time stored in the reference), and then calling the duration effect function to observe
the span. 

Note that in this example, we are expecting a request/reply, request/reply matching cadence of messages throughout
the stream, and thus we reset the reference back to None when we receive the reply message. We could easily set it to the
time when the message was received if we want to observe the latency between unsolicited replies as well.

Photo by [Jon Tyson](https://unsplash.com/@jontyson?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText)> on [Unsplash](https://unsplash.com/s/photos/clock?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText)