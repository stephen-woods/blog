---
title: "Using WebPack instead of WebJars"
description: "Abandon Play Framework's default way of managing Javascript dependencies and replace with WebPack"
date: "2017-06-09"
draft: false
author: Stephen Woods
featuredImage: IMG_1449.jpg
titleClass: text-white
tags:
  - Play
  - SBT
  - WebPack

---
A couple months back, I started working on a new reactive web application that uses Play Framework (Scala/Akka Streams/WebSockets) on the back 
and a pretty sophisticated front end (ReactJs/Redux/RxJs/SVG)... well at least, for a traditional back end developer, 
this project definitely pushed me out of my comfort zone. Just for background, the intent of the app is to provide a 
graphical UI that allows users to set up different runtime streams for routing and transforming production web traffic to
developer instances. 

After setting you standard Play Framework project, getting some partial functionality up and running on the server side,
I ran into a wall when starting the front end. Play recommends the use of WebJars for managing front end Javascript dependencies,
as opposed to using tools such as NPM/Bower/WebPack that are so familiar to UI web developers. Rather than installing JavaScript as a
node module, Javascript packaged as a WebJar is... well a JAR file - a traditional Java archive with Maven based version and 
dependency meta-data bundled within. And as such, from a back end perspective, we can treat it just like any other JAR. 
The nice thing is that now server side dependencies and front end dependencies can be managed by a single build tool. In
this case, I'm using SBT.

So, what's the problem then? Well, its quite obvious that Play was created during the Web era of multi page web applications
where the only Javascript dependencies you might need would be things such as jQuery, Bootstrap, Lodash, and maybe some
random highlighting library. But once we get start entering the arena of single page web applications that rely on ReactJs,
and the myriad of different UI components that are freely available, you'll start to notice how out of date the main
WebJar repository is. Many of the components that can be found in the main NPM repository are not up-to-date, or simply 
don't exist in the WebJar repository. Javascript library authors primarily use NodeJs and thus publish their work in the main NPM 
repository; packaging Javascript as a WebJar is an after thought.. if it ever happens. Even if you do find the WebJar
you are looking for, there's a real good chance that the JAR was not published by its original author. 

After wrestling with the situation for a couple days, I decided to punt on using WebJars altogether and started working 
on a way to incorporate NPM/Bower/WebPack into the SBT build process as a first class citizen.


### SBT Changes
The solution I finally ended up with was inspired by a response by Nouhoum Traore to a Stack Overlow post: [How do I run webpack from SBT
](https://stackoverflow.com/questions/34568008/how-do-i-run-webpack-from-sbt/47606867). It modifies the SBT dependency 
task tree to take advantage of Play's run hook infrastructure. Add the following to your _build.sbt_ file: 

```scala
lazy val webpack = taskKey[Unit]("Run webpack when packaging the application")

def runWebpack(file: File) = {
  Process("webpack", file).!
}

webpack := {
  if(runWebpack(baseDirectory.value) != 0) throw new Exception("Webpack crashed.")
}

dist := (dist dependsOn webpack).value

stage := (stage dependsOn webpack).value

PlayKeys.playRunHooks += baseDirectory.map(Webpack.apply).value
``` 

Then, in your project's _/project_ directory, add the following _Webpack.scala_ file. If you notice, this adds hooks 
listening to Play run events that executes the _webpack_ command line program.

```scala
import java.net.InetSocketAddress
import play.sbt.PlayRunHook
import sbt._

object Webpack {
  def apply(base: File): PlayRunHook = {
    object WebpackHook extends PlayRunHook {
      var process: Option[Process] = None

      override def beforeStarted() = {
        process = Option(
          Process("webpack", base).run()
        )
      }

      override def afterStarted(addr: InetSocketAddress) = {
        process = Option(
          Process("webpack --watch --devtool source-map", base).run()
        )
      }

      override def afterStopped() = {
        process.foreach(_.destroy())
        process = None
      }
    }

    WebpackHook
  }
}
``` 

If you don't have WebPack already installed, install it via npm
```shell
npm install -g webpack@3 webpack webpack-cli
```

Now, when you run SBT with the _~ run_ task (or the _webpack_ task directly), webpack will get invoked, watch for changes in your source code, optimize 
and produce source-maps for easier debugging. And, like in the NodeJs world, you also have the ability to add additional
webpack related plugins that make your life easier. Success!