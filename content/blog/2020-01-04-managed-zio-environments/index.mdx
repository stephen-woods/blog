---
title: "Managed ZIO Environments"
description: "Providing managed life cycles to ZIO environment modules"
blurb: "Providing managed life cycles to ZIO environment modules"
date: "2020-01-04"
draft: true
author: Stephen Woods
featuredImage: marko-blazevic-GFFGe2eGmiM-unsplash.jpg
tags:
  - ZIO
  - Scala
---


The ZIO Scala library is all about effects, and one of its more powerful aspects is the idea of a runtime environment in which
an effect operates within. The _ZIO_ data type is has three type parameters: _R_, _E_, and _A_.
 

```scala
ZIO[-R, +E, +A]
```

Most developers are familiar with the last two parameters: _A_ representing the resulting type of a successful effect, and
_E_ representing the type of a failed effect when things go awry during execution. The ZIO data type also has an _R_ type 
parameter which represents the runtime environment required by the effect. In many ways, it can be considered a means of providing
dependency injection into ZIO ecosystem. If your functional code needs to interact with some external service (such
as a database or web service) in order to create side effects, this environment type parameter provides a clean and easy 
avenue to introduce additional typed inputs into your function. This _R_ type represents the context in which your 
effectful function will operate. 

For example, out of the box, ZIO's _DefaultRuntime_ provides access to the system clock and console (among other things).

```scala
trait DefaultRuntime 
  extends Runtime[Clock with Console with System with Random with Blocking] {
  type Environment = Clock with Console with System with Random with Blocking

  val Platform: Platform       = PlatformLive.Default
  val Environment: Environment = new Clock.Live with Console.Live with System.Live with Random.Live with Blocking.Live
}

```

Let's just concentrate on one component of the default environment: the _Console_.
 
The _Console_ allows a ZIO function to interact with stdin, stdout, and stderr console streams. As you can see the 
_DefaultRuntime_ defines an _Environment_ type that mixes in a number of traits - one being the the _Console_. It also
 provides an instance of the _Environment_ type that is just an object that mixes in the "live" implementation of each of 
those traits; presumably, you could provide alternative implementations that mock certain functionality in order to 
facilitate unit testing.

# Hello World
The traditional "Hello World" program that everyone knows and loves simply writes the string "Hello World" out to the 
console. This in of itself is a side effect - a pure function needs to access the outside world in order to write to the 
_stdout_. The following is a concise ZIO implementation of "Hello World": 

```scala

import zio.App
import zio.console._

object Main extends App {

  def run(args: List[String]) =
    myAppLogic.fold(_ => 1, _ => 0)

  val myAppLogic =
    for {
      _ <- putStrLn("Hello World")
    } yield ()
}

```

Now, if we expand the code and explicitly define types, you will see that _Console_ is being used as the _R_ type
parameter:

```scala
import zio.{App, ZIO}
import zio.console.{Console, putStrLn}

object Main extends App {

  def run(args: List[String]): ZIO[Console, Nothing, Int] =
    myAppLogic.fold(_ => 1, _ => 0)

  val myAppLogic: ZIO[Console, Nothing, Unit] =
    for {
      _ <- putStrLn("Hello World")
    } yield ()
}
``` 

So how does the _putStrLn_ work? How does it actually interact with the Console? Well we can see by peeking into the _console_
package object, and the _Console_ object itself:

```scala
package zio

import java.io.IOException

package object console extends Console.Service[Console] {

  /**
   * Prints a line of text to the console, including a newline character.
   */
  final def putStrLn(line: String): ZIO[Console, Nothing, Unit] =
    ZIO.accessM(_.console putStrLn line)
}
```

```scala
import scala.{ Console => SConsole }

trait Console extends Serializable {
  val console: Console.Service[Any]
}

object Console extends Serializable {
  trait Service[R] {
    def putStrLn(line: String): ZIO[R, Nothing, Unit]
  }
  
  trait Live extends Console {
    val console: Service[Any] = new Service[Any] {
        
      final def putStrLn(line: String): UIO[Unit] =
        putStrLn(SConsole.out)(line)
      
      final def putStrLn(stream: PrintStream)(line: String): UIO[Unit] =
        IO.effectTotal(SConsole.withOut(stream) {
          SConsole.println(line)
        })  
    }
  }
  object Live extends Live
}
```

The _putStrLn_ function makes use of the the _accessM_ method on the _ZIO_ type. This is how we access the environmental 
context of the effect. In this case, we pull the console service out of the environment and then call _putStrLn_ on that 
service. If the "live" implementation of the Console service is in the environment, as opposed to a mocked test implementation,
the effectful _println_ method is invoked on the Scala Console object. 

And then we finally see "Hello World"

By convention, a module pattern has emerged in order to introduce additional services into the environment. As we have 
just seen, ZIO comes with a number of environment modules out of the box - specifically _Clock, Console, System, Random,
and Blocking_. One thing to note though is that if you take a look at the implementation of each of one these services, 
you will notice that there is no life cycle involved. Either the service uses some underlying Java static resource, or it
creates a singleton resource instance at class loading time that stays alive though out the life of the program. 

But what happens if we _do_ need to manage the life cycle of an environmental service? What happens if we need to 
gracefully release a resource that our service uses when our effect ends, or what happens if our service actually 
depends on something else in the environment or the runtime platform itself? 

Well, we can leverage two additional items in the ZIO tool box: _ZManaged_ and _ZIO.provide_ 

# Managed Modules

```scala
ZManaged[-R, +E, +A]
```

_ZManaged_ is a data structure that "manages" the acquisition and the release of a specific resource. Its curried 
constructor takes two parameters: a ZIO effect used to _acquire_ a resource, and a function that is used to 
_release_ the previously acquired resource. To use the managed resource, one invokes the _use_ method. Acquired resources
are not accessible outside the scope of this method.

To illustrate how we can use this in the context of an environment module, let's build a ZIO module that provides an Akka 
_ActorSystem_. Let's say we are building a ZIO application that needs to make use of Akka's excellent cluster capabilities. 
Granted, we could just create the _ActorSystem_ in the same fashion as _Clock_ or _Blocking_, but ideally it would be 
really nice if the _ActorSystem_ didn't create its own _ExecutionContext_, but instead reused the one that ZIO creates for
its runtime. Also, it would be nice if we gracefully shutdown the _ActorSystem_ when our effect is over - presumably to
let other nodes in the cluster know that we are leaving. 

Because of this dependency, we need to create an environment without the _ActorSystem_ first, and then introduce the 
_ActorSystem_ once the initial environment is up and running in order to can gain access to its _ExecutionContext_

```scala
trait AkkaModule {
  val akka: AkkaModule.Service[Any]
}

object AkkaModule {

  trait Service[R] {
    def actorSystem(): ZIO[Any, Throwable, ActorSystem]
  }

  case class LiveService[R](as: ActorSystem) extends Service[R] {
    override def actorSystem(): UIO[ActorSystem] = ZIO.succeed(as)
  }

  val acquireActorSystem: ZIO[Any, Throwable, ActorSystem] = for {
    rt <- ZIO.runtime[Any]
    ec <- ZIO.succeed(rt.platform.executor.asEC)
    as <- ZIO.effect(ActorSystem("system", defaultExecutionContext = Some(ec)))
  } yield as

  val releaseActorSystem: ActorSystem => ZIO[Any, Nothing, Unit] = (as: ActorSystem) => ZIO.effectTotal(as.terminate())
}

```

As you can see, the structure of this module is similar to those that we've seen previously, but there are some notable
differences. First, it doesn't expose operations on the _ActorSystem; it simply exposes the _ActorSystem_ so users can
gain access to the whole thing. Secondly, the "Live" implementation of our service isn't just a trait; it's a case class
that requires a live _ActorSystem_ passed into it as a constructor argument.

So where does this live _ActorSystem_ come from? This is where our lifecycle _acquire_ ZIO effect, and our _release_ 
function come into the picture. The _acquireActorSystem_ function returns a ZIO that:
* gets the current runtime
* gets the ZIO platform's executor as an _ExecutionContext_
* and then creates an _ActorSystem_ that uses the ZIO platform's _ExecutionContext_ instead of creating its own. 

Likewise, the _releaseActorSystem_ function returns a ZIO that gracefully terminates the passed in _ActorSystem_.

# Putting it All Together
So let's see this put into action:

```scala
object Example extends App {

  trait ExampleEnv extends Console with AkkaModule

  type ExampleZIO[A] = ZIO[ExampleEnv, Throwable, A]

  // Some effectul program that needs the Console and Akka Module 
  val program: ZIO[ExampleEnv, Throwable, Unit] = for {
    as <- ZIO.accessM[AkkaModule](_.akka.actorSystem())
    _  <- ZIO.accessM[Console])(_.console(putStrLn(as.name)) 
  } yield {}

  override def run(args: List[String]): ZIO[ZEnv, Nothing, Int] = {

    Managed.make(
      AkkaModule.acquireActorSystem)(
      AkkaModule.releaseActorSystem)
      .use { as =>
        val runEnv: ExampleEnv = new ExampleEnv with Console.Live {
          override val akka: AkkaModule.LiveService[Any] = AkkaModule.LiveService(as)
        }
        program
          .provide(runEnv)
          .foldM(err => putStrLn(s"Execution failed with: $err").flatMap(_ => ZIO.succeed(1)), _ => ZIO.succeed(0))
      }
      .catchAll(th => zio.console.putStr(th.getMessage).map(_ => 1))

  }
}
```

We create a _ExampleEnv_ trait that defines what environment our program will need. Here we are indicating that we will 
need an environment that implements both the _Console_ service as well as our custom _AkkaModule_ service.

For convenience, we define a _ExampleZIO_ type specifically for use with our custom environment 

Next, we create an example program that requires the use _ExampleEnv_. For demonstrative purposes, this program 
simply gets the actor system, and then prints out its name to the console. A more realistic example could possibly be 
the the creation of something that has a much longer lifetime such as a Blaze Http4s web server that interacts with 
remote Akka actors.

And finally we implement the App's run method that puts everything together. We use _Managed_, with our _acquire_ ZIO and 
_release_ function to define an effect that creates our _ActorSystem_, and then we immediately put it to use, via the _use_
method. The _use_ method in turn executes a function that we provide that exposes the newly acquired _ActorSystem_.

Now that we have access to the _ActorSystem_, we can create a *new* environment implementation, _runEnv_, that comprises the
Live implementation of the _Console_ as well as an instace of _AkkaModule.LiveService_ that uses our newly acquired 
_ActorSystem_. Once the environment has been created, we can _provide_ it to our example program. This essentially swaps 
out the default environment with the one we just created.

And that's it! Just a recap:

* We created a managed ZIO resource that in turn acquires an Akka _ActorSystem_ that uses the same _ExecutionContext_ as the ZIO platform,
* Made it available as a module within a new ZIO environment
* Created a program that accesses both the Console and our custom Akka Module via this new ZIO environment
* Executed the program
* Gracefully terminated our _ActorSystem_ once we were done with it.

All done in an efficient, type safe manner!

 
Photo by [Marko Blažević](https://unsplash.com/@kerber?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on Unsplash