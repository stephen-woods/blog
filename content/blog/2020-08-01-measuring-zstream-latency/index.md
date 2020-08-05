---
title: "Measuring ZStream latency"
blurb: "Measuring ZStream latency"
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
receiving the response, and then calculate the difference between the two times. Often times, developers need not be concerned
with this calculation directly as many metrics libraries, such as Drop Wizard and Prometheus, provide this functionality 
out-of-the-box.

As the refactoring progresses, the organization might identify use cases where other forms of communication, such as 
streaming of data, are more appropriate. For example, GRPC provides the ability to establish a channel between two
different systems and allow each system to send and receive protobuf messages. So, we ask the same question again - how 
how do we determine how well the system performs? 

Well... The flexibility introduced by the streaming model makes answering that question more difficult. For example, a stream
can consist of a series of 5 outgoing messages, or a series of 5 incoming messages, or a mixture of both: 2 outgoing messages,
1 incoming message, an outgoing message, and finally one more incoming message before the stream channel shuts down. The 
main take away point is that with streams, there is no one-to-one ratio between requests and responses. It's more complicated, and
therefore, we can't measure performance the same way.

So, what can we do? Measuring the lifetime of a stream, from when it was created until it shuts down, is a fairly easy 
endeavor. It essentially uses the same approach we used for the request/response scenario. Unfortunately, it isn't very
useful as it doesn't provide any insight into the latency between messages. So if the goal is to measure the latency 
between messages, we need to identify which events represent the beginning and ending of each span we want to measure.
Qualifying events that represent the beginning of a span include: 

* the last message sent
* the last message received

Likewise, qualifying events that represent the end of a span include:
 
* the last message received 
* the end of the stream

ZStreams
===
So let's concentrate on a specific implementation. Recently I had the opportunity of working on a project where we needed
two micro services to communicate via GRPC streams. Since we were already using ZIO extensively on the client, we opted to
use the ZIO variant of Nadav Samet's excellent Scalapb protobuf compiler for Scala. Scalapb is a sbt plugin that generates
client and server stub code written in Scala based on a provided protobuf definition. 

In this model, normal service calls are implemented as functions that, given a request message, return a ZIO effect of a
reply message. Stream calls are implemented as functions that, given an inbound message _ZStream_, return an
outbound message _ZStream_. Take a look at the following example:



```scala

def fetch(request: Request): ZIO[Any, Status, Reply] = {
  ...  
}

def stream(request: ZStream[Any, Status, StreamRequest]): ZStream[Any, Status, StreamReply] = {
  ...
}
```

We can take advantage of some type aliases that come with ZIO to make the code more concise:

```scala

def fetch(request: Request): IO[Status, Reply] = {
  ...  
}

def stream(request: Stream[Status, StreamRequest]): Stream[Status, StreamReply] = {
  ...
}

```




```scala


  /**
   * Returns a ZIO effect that establishes bi-directional streaming communication between two services by creating an
   * inbound message stream to match the provided outbound message stream. The resulting stream is created by applying
   * the outbound message stream to a factory effect, and provides the means of measuring the duration between sending
   * a request message on the outbound stream and receiving a reply message on the inbound stream. To do so, on each
   * inbound message received, the provided duration effectful function is executed if and only if a proceeding request
   * was made; unsolicited replies will not cause the function to be called.
   *
   * @param outboundMessageStream         out bound message stream
   * @param inboundMessageStreamFactoryIO effect that creates an inbound message stream that provides replies to any
   *                                      requests made on the out bound message stream.
   * @param df                            duration function executed on solicited replies, where the duration input is
   *                                      the time in between when the request was sent and its corresponding reply
   *                                      was received.
   * @tparam R  the environment type of both input and output streams
   * @tparam E  the common error type used across both input and output streams, the factory effect, and the returned effect
   * @tparam A  out bound message type
   * @tparam B  in bound message type
   * @tparam R1 the environment for the returned effect that is dependent on some Clock
   * @return a ZIO effect that establishes bi-directional streaming communication between two services and allows measuring
   *         the duration between requests and replies
   */
  def bidiTimedStreamIO[R, E, A, B, R1 <: Clock](outboundMessageStream: stream.Stream[E, A],
                                                 inboundMessageStreamFactoryIO: stream.Stream[E, A] => UIO[stream.Stream[E, B]],
                                                 df: Duration => UIO[Any]): URIO[R1, stream.Stream[E, B]] = {
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

      // Create the inbound message stream using the factory effect that depends on the outbound message stream
      inboundStream <- inboundMessageStreamFactoryIO(outboundMessageStream2)

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
                    df(duration)
                  }
            }
        }
        .provide(r)
      )
    } yield inboundStream2
  }
```


Photo by [Jon Tyson](https://unsplash.com/@jontyson?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText)> on [Unsplash](https://unsplash.com/s/photos/clock?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText)