---
title: "Running Oracle SQL Plus from Gradle"
description: "How to prevent SQL Plus from blocking the build."
blurb: "How to prevent SQL Plus from blocking the build."
date: "2013-10-25"
draft: false
author: Stephen Woods
featuredImage: hello-i-m-nik-v8pL84kvTTc-unsplash.jpg
titleClass: text-white
tags:
  - Oracle
  - Gradle

---

We’ve been using Gradle lately as a build tool to replace ant and maven. Gradle uses a domain specific language (DSL) implemented in Groovy. One of the stages of the build that is executed by our continuous integration server is a process that removes all database objects from our Oracle unit test database, and then creates them from scratch so we have a blank slate to work from. To do this, we wanted to leverage plain ol’ SQL Plus.

This is easy enough to do, assuming that SQL Plus is set up correctly. Set up a process the groovy way, and execute it.

```groovy
def db = [un : ''username'', pw :''password'',tns :''tnsname'']
def sqlplus= """sqlplus ${db.un}/${db.pw}@${db.tns} @script.sql""".execute()
```
Unfortunately, after SQL Plus finishes running the script, it blocks waiting for more commands from standard input. Therefore, we need to tell it that it”s done by sending it an exit command:

```groovy
sqlplus.withWriter {writer ->
    writer.write("exit")
}
sqlplus.consumeProcessOutput()
sqlplus.waitFor()
if (sqlplus.exitValue() != 0){
    println sqlplus.err.text
    throw new RuntimeException()
}
```

The above script writes “exit” to the standard input of SQL Plus, consumes any output that it may produce on standard out, and then waits for the process to end normally. An exit value of anything other than zero indicates that an error occurred. We simply print the standard error of the SQL Plus process and then throw a RuntimeException in order to fail the Gradle build.

Gradle has an experimental feature called the Gradle Daemon. The purpose of the Gradle Daemon is to provide an ever present Gradle build environment that avoids starting up a JVM and all of the gradle classes from scratch every time a Gradle task is executed. When it works, it”s great! Builds that usually take about 10 seconds to run whittle down to 1 or 2 seconds – a major performance increase.

All you need to do is start up the gradle daemon. This is process that actually does the building

```shell
gradle --foreground
```

And then run your Gradle builds with the -daemon flag

```shell
gradle --daemon build
```

However, the Gradle Daemon can cause problems. You will most likely run into problems running SQL Plus from Gradle when using the Gradle Daemon. The reason is because SQL Plus is very dependent on environment variables. It uses environment variables to lookup TNSNames and load up various libraries. When you invoke a Gradle build with the –daemon flag, the build executes in the daemon”s environment, not the environment where the Gradle command was issued. This is very important and subtle distinction. As of Gradle Milestone-4, environment variables do not propagate to the Gradle daemon properly.


Photo by [Hello I'm Nik 🇬🇧](https://unsplash.com/@helloimnik?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on Unsplash