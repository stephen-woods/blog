---
title: "Transferring a Docker image without a registry"
description: "Ever wonder how you can transfer a Docker image from one host to another without having access to a Docker registry?"
date: "2018-07-10"
draft: false
author: Stephen Woods
featuredImage: aleksandr-kozlovskii-ZMOJit6rI6M-unsplash.jpg
tags:
  - Docker
---

Ever wonder how you can transfer a Docker image from one host to another without having access to a Docker registry? Well 
I ran into that scenario today. I've been working on a project for a while now that has a rather large data and memory
footprint. If I'm in the office, I have high speed network access to a hand full of private cloud instances that have all
of the resources I need to do my development work and regression testing - I do all of my development on my Macbook Pro, and
then deploy the application and services as Docker containers to the cloud via Ansible. 

That usually works out well for me. However, I've been stuck needing to work from home lately, and doing 
everything over a VPN really slows down the normal development cadence. Lucky for me, I have a couple Dell T640 128GB RAM 
servers in my home office that can easily stand in for the cloud instances that I normally use - they have enough memory and
are reachable on a fast local network as opposed to a VPN going over the Internet to some data center in a different state. 

So, great! What's the problem then? Well, some images of the services that I rely on are stored in my client's private 
Docker registry, but to get to them, I need to have an active VPN connection on each server. Unfortunately, the VPN server
I use to connect to has an artificial limit to the number of connections you can make using the same set of credentials. So, because of
some corporate policy, there's no easy way that I can get my laptop and all of the servers connected to the corporate network 
all at the same time.

What I'd really like to do is pull all of the images that I could possibly need to my Macbook Pro, and then push those 
images to each home office server that I'm going to use. Then, when I run my Ansible scripts, the Docker tasks will notice
that the required images are already present on each host, and therefore won't need to pull them from the corporate Docker 
registry (which, of course, I don't have access to because the servers are not running any VPN software).

One way to do this is by setting up a private docker registry too. Once the registry is set up, I can simply push the images
to the registry and each server pulls the necessary images as they execute various Ansible tasks. So, it is possible... 
but then I'd need to worry about cleaning out unneeded images when not needed, and the registry middle man is not really a 
necessity anyway. Instead I can simply save the docker image on my laptop, transfer it
over to each server, and then load it up. The great thing is that you can easily do this in a single one-line command:

```shell
docker save imagename:v1.2.3 | ssh user@server1 'docker load'
```

This tells docker to export the provided image and pipe it to the ssh command. This, in turn, transfers the binary image
output to the server over normal SSH channels, starts up a remote docker load process on the server, and finally feed it 
the image data via standard input.

And you can also include fetching from the corporate registry as part of the command since the registry and the home office
server should be both accessible from the laptop:

```shell
IMG=corporate.host.com:imagename:v1.2.3; docker save $IMG | ssh user@server1 'docker load'
```

One thing to note is that depending on how you have set things up, the remote account on the server probably does not 
have access to the local Docker socket that is used in the loading process. As a result, you'll need to run the load as
a sudo user, as follows:


```shell
IMG=corporate.host.com:imagename:v1.2.3; docker save $IMG | ssh user@server1 'sudo docker load'
``` 

Now this downloads the image from the corporate registry server to my dev laptop over the VPN, and then exports the image
and transfers it over my local network to the server that's sitting under my desk. Once the image arrives, docker loads it
and makes the image available for use when I deploy my app and services via Ansilble scripts.

Photo by [Aleksandr Kozlovskii](https://unsplash.com/@myzhik1988?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on Unsplash