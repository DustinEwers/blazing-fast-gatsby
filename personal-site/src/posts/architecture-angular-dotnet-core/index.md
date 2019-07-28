---
id: 432
title: Architecture Patterns for Angular and .NET Core
date: 2017-11-30T21:56:56+00:00
author: Dustin Ewers
layout: post
guid: https://dustinewers.com/?p=432
permalink: /architecture-angular-dotnet-core/
thrive_post_fonts:
  - '[]'
thrive_share_count:
  - '{"facebook":1,"twitter":0,"plusone":0,"pinterest":0,"linkedin":1,"total":2,"last_fetch":1512149893,"url":"https://dustinewers.com/architecture-angular-dotnet-core/"}'
categories:
  - Angular
  - ASP.NET
  - JavaScript
  - Software Design
  - TypeScript
---
<div class="" data-block="true" data-editor="bal6b" data-offset-key="ajm6m-0-0">
<div class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr" data-offset-key="ajm6m-0-0"><span data-offset-key="ajm6m-0-0">Modern web application development is fraught with choices. There are many ways to build a modern web application. </span><span class="veryhardreadability"><span data-offset-key="ajm6m-1-0">Some of the choices include: front-end architecture style (SPA, MVC, Razor Pages), front-end framework (React, Angular, jQuery), front-end build tools, CSS pre-processor, JavaScript build tool (Webpack, System.js, Gulp), and back-end architecture</span></span><span data-offset-key="ajm6m-2-0">. Each of those choices spawns other architectural choices. Depending on what you pick, there could be several dozen decision points in the process. </span></div>
</div>
<div class="" data-block="true" data-editor="bal6b" data-offset-key="e1ava-0-0">
<div class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr" data-offset-key="e1ava-0-0"><span data-offset-key="e1ava-0-0"> </span></div>
</div>
<div class="" data-block="true" data-editor="bal6b" data-offset-key="77irn-0-0">
<div class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr" data-offset-key="77irn-0-0"><span data-offset-key="77irn-0-0">One of the things I like about Angular is that you don't need to make as many of these choices. If you use Angular, you don't have to spend hours searching NPM and Github for the different pieces of your web app. There are still choices to make though. In this post, we're going to focus on how to integrate your front end (Angular) with your back-end (ASP.NET Core).</span></div>
</div>
<div class="" data-block="true" data-editor="bal6b" data-offset-key="vnou-0-0">
<div class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr" data-offset-key="vnou-0-0"><span data-offset-key="vnou-0-0"> </span></div>
</div>
<div class="" data-block="true" data-editor="bal6b" data-offset-key="p9g4-0-0">
<div class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr" data-offset-key="p9g4-0-0"><span data-offset-key="p9g4-0-0">We are going look at three ways to build a web application. We'll begin with the time tested monolith. Then we'll move onto the shiny new "serverless" architecture style. After that, we'll explore microservices architecture. After this post, you'll have a good grasp of each of these styles and know when to use each one for your own applications.</span></div>
</div>
<h2>Monoliths</h2>
<div class="" data-block="true" data-editor="bal6b" data-offset-key="382cf-0-0">
<div class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr" data-offset-key="382cf-0-0"><span class="hardreadability"><span data-offset-key="382cf-0-0">If you've been building web applications for any amount of time, you've </span></span><span class="adverb"><span data-offset-key="382cf-1-0">probably</span></span><span class="hardreadability"><span data-offset-key="382cf-2-0"> worked on at least one monolith</span></span><span data-offset-key="382cf-3-0">. In a monolith, the entire application's workflow is in one code base. In the .NET world, that means everything can fit into one big solution file. Monolith doesn't mean we can't have a reasonable separation of code. You can create module boundaries and separate your code into projects. You can even </span><span class="complexword"><span data-offset-key="382cf-4-0">implement</span></span><span data-offset-key="382cf-5-0"> an n-teir architecture and separate your application into layers. The key to the monolith is that the whole process is in one self-contained code base.</span></div>
</div>
<div class="" data-block="true" data-editor="bal6b" data-offset-key="8kpq6-0-0">
<div class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr" data-offset-key="8kpq6-0-0"><span data-offset-key="8kpq6-0-0"> </span></div>
</div>
<div class="" data-block="true" data-editor="bal6b" data-offset-key="veig-0-0">
<div class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr" data-offset-key="veig-0-0">
<div class="" data-block="true" data-editor="bal6b" data-offset-key="veig-0-0">
<div class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr" data-offset-key="veig-0-0"><span data-offset-key="veig-0-0">Monolith architecture gets bashed on, but it's the default for a reason. There's several advantages to the monolith style. For one, everything is in one place. If you need to refactor, you don't have to worry about moving across service boundaries. Tools like ReSharper make this even easier. Monoliths are also easy to deploy. If you are building a small or medium sized application, monolith architecture is a good choice. </span></div>
<div data-offset-key="veig-0-0"></div>
<div class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr" data-offset-key="veig-0-0"><span data-offset-key="5dgeh-0-0">While monoliths are fine much of the time, there are situations where they tend to fall down. The first problem with monoliths is that they are hard to scale. </span><span class="hardreadability"><span data-offset-key="5dgeh-1-0">If you have one piece of an application that's experiencing a heavier load, you still have to scale out your whole application</span></span><span data-offset-key="5dgeh-2-0">. Monoliths also deter code reuse. </span><span class="hardreadability"><span data-offset-key="5dgeh-3-0">In many corporate environments, there are resources that </span></span><span class="passivevoice"><span data-offset-key="5dgeh-4-0">are used by</span></span><span class="hardreadability"><span data-offset-key="5dgeh-5-0"> more than one application</span></span><span data-offset-key="5dgeh-6-0">. With a monolith, you end up copying the code to access those resources. Because there's so much code in one place, larger monoliths can be hard to understand. This can make it harder to on-board new team members. </span><span class="hardreadability"><span data-offset-key="5dgeh-7-0">Once your application gets to a certain size, you should peel microservices off of your monolith</span></span><span data-offset-key="5dgeh-8-0">.</span></div>
</div>
<div class="" data-block="true" data-editor="bal6b" data-offset-key="2n20p-0-0">
<div class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr" data-offset-key="2n20p-0-0"><span data-offset-key="2n20p-0-0"> </span></div>
</div>
<div class="" data-block="true" data-editor="bal6b" data-offset-key="4q3rl-0-0">
<div class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr" data-offset-key="4q3rl-0-0">

<span data-offset-key="4q3rl-0-0">There are a few ways to </span><span class="complexword"><span data-offset-key="4q3rl-1-0">implement</span></span><span data-offset-key="4q3rl-2-0"> a monolithic Angular application. The easiest way is to use the built in template. Visual Studio comes with an Angular template that includes some nice features. I prefer to use the Angular CLI, so I don't use the included template. If you also want to use the Angular CLI, I have a post on how to use Angular CLI with a .NET Core project.</span>

<a href="https://dustinewers.com/angular-cli-with-net-core/" target="_blank" rel="noopener">Angular CLI with .NET Core</a>

</div>
</div>
<div class="" data-block="true" data-editor="bal6b" data-offset-key="j5gu-0-0">
<div class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr" data-offset-key="j5gu-0-0"><span data-offset-key="j5gu-0-0">As I learn more about Angular, I'm beginning to favor another approach. The truth is that .NET doesn't add much to the Angular front end party. Given a clean slate, I'd run the Angular half of the code as it's own project and use .NET Core for the API. Angular CLI is </span><span class="adverb"><span data-offset-key="j5gu-1-0">perfectly</span></span><span data-offset-key="j5gu-2-0"> happy self hosting or you can deploy the static assets to an IIS site. </span></div>
</div>
</div>
</div>
<h2>Serverless</h2>
<div class="" data-block="true" data-editor="bal6b" data-offset-key="d1po5-0-0">
<div class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr" data-offset-key="d1po5-0-0"><span data-offset-key="d1po5-0-0">The serverless architecture is the most recent pattern on the list. It's also the worst named pattern on the list. The servers [</span><span class="adverb"><span data-offset-key="d1po5-1-0">obviously</span></span><span data-offset-key="d1po5-2-0">] exist, but you don't have to care about them. It's "serverless" to you. </span></div>
</div>
<div class="" data-block="true" data-editor="bal6b" data-offset-key="ch8ib-0-0">
<div class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr" data-offset-key="ch8ib-0-0"><span data-offset-key="ch8ib-0-0"> </span></div>
</div>
<div class="" data-block="true" data-editor="bal6b" data-offset-key="99luc-0-0">
<div class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr" data-offset-key="99luc-0-0"><span data-offset-key="99luc-0-0">Serverless architectures rely on services that host and run your code for you. Instead of managing VMs or physical servers, the service abstracts that away. If 500,000 users come knocking on the door to your site, you don't even need to push up a slider bar. The service scales for you.</span></div>
</div>
<div class="" data-block="true" data-editor="bal6b" data-offset-key="f3skt-0-0">
<div class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr" data-offset-key="f3skt-0-0"><span data-offset-key="f3skt-0-0"> </span></div>
</div>
<div class="" data-block="true" data-editor="bal6b" data-offset-key="qipb-0-0">
<div class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr" data-offset-key="qipb-0-0"><span class="hardreadability"><span data-offset-key="qipb-0-0">When people think of serverless, they're usually thinking about Functions as a Service (FAAS)</span></span><span data-offset-key="qipb-1-0">. FAAS platforms allow you to host small bits of code in the cloud. This means a single endpoint. FAAS is not the only way to be serverless though. Services like Firebase can encapsulate the your whole back-end.</span></div>
</div>
<div class="" data-block="true" data-editor="bal6b" data-offset-key="cqpb0-0-0">
<div class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr" data-offset-key="cqpb0-0-0"><span data-offset-key="cqpb0-0-0"> </span></div>
</div>
<div class="" data-block="true" data-editor="bal6b" data-offset-key="2r74k-0-0">
<div class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr" data-offset-key="2r74k-0-0"><span data-offset-key="2r74k-0-0">Here's a list of serverless platforms: <a href="https://github.com/anaibol/awesome-serverless" target="_blank" rel="noopener">https://github.com/anaibol/awesome-serverless</a></span></div>
</div>
<div class="" data-block="true" data-editor="bal6b" data-offset-key="1uqop-0-0">
<div class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr" data-offset-key="1uqop-0-0"><span data-offset-key="1uqop-0-0"> </span></div>
</div>
<div class="" data-block="true" data-editor="bal6b" data-offset-key="aladn-0-0">
<div class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr" data-offset-key="aladn-0-0"><span class="hardreadability"><span data-offset-key="aladn-0-0">To integrate this with Angular, you compile your Angular application into a static web site</span></span><span data-offset-key="aladn-1-0">. Then you call the APIs you create in whatever serverless service you're using. </span><span class="hardreadability"><span data-offset-key="aladn-2-0"><a href="https://dustinewers.com/how-to-build-serverless-angular-app-on-azure/" target="_blank" rel="noopener">This post</a> has details on how to build a serverless Angular application using Azure Functions and an Angular site hosted in an Azure web site</span></span><span data-offset-key="aladn-3-0">. You should be able to adapt these instructions for your favorite cloud provider.</span></div>
</div>
<div data-offset-key="aladn-0-0"></div>
<div data-offset-key="aladn-0-0"><span data-offset-key="4q3rl-2-0"><a href="https://dustinewers.com/how-to-build-serverless-angular-app-on-azure/" target="_blank" rel="noopener">How to Build A Serverless Angular App on Azure</a></span></div>
<div class="" data-block="true" data-editor="bal6b" data-offset-key="33j63-0-0">
<div class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr" data-offset-key="33j63-0-0"><span data-offset-key="33j63-0-0"> </span></div>
</div>
<div class="" data-block="true" data-editor="bal6b" data-offset-key="7n188-0-0">
<div class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr" data-offset-key="7n188-0-0"><span data-offset-key="7n188-0-0">Serverless isn't for every situation, but there's some definite advantages. The biggest advantage is that you can </span><span class="adverb"><span data-offset-key="7n188-1-0">quickly</span></span><span data-offset-key="7n188-2-0"> get your code into production. You don't need to configure servers or set anything up. You just drop your code into the cloud and go. Server level concerns like scalability and server management are gone. Serverless architectures are also very cheap to start with. FAAS platforms charge you by usage, so low traffic apps are dirt cheap. Static websites are also fast and cheap. Since most static assets </span><span class="passivevoice"><span data-offset-key="7n188-3-0">are cached</span></span><span data-offset-key="7n188-4-0">, you can serve a ton of users with very little impact.</span></div>
</div>
<div class="" data-block="true" data-editor="bal6b" data-offset-key="emua8-0-0">
<div class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr" data-offset-key="emua8-0-0"><span data-offset-key="emua8-0-0"> </span></div>
</div>
<div class="" data-block="true" data-editor="bal6b" data-offset-key="brisd-0-0">
<div class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr" data-offset-key="brisd-0-0"><span data-offset-key="brisd-0-0">There are a few problems with serverless. The big one for me is complexity. Once you have a certain number of functions, they become hard to manage. I'd rather have a web service or series of web services over a suite of cloud functions. Functions also have somewhat unpredictable pricing. A misconfiguration in your service or a bug can leave you with a huge cloud bill. The serverless pattern </span><span class="adverb"><span data-offset-key="brisd-1-0">really</span></span><span data-offset-key="brisd-2-0"> shines when building prototypes and </span><span class="complexword"><span data-offset-key="brisd-3-0">minimum</span></span><span data-offset-key="brisd-4-0"> viable products (MVP). You can get code into production and start iterating. Later on, you can refactor your functions into services if your application takes off.</span></div>
</div>
<h2>Microservices</h2>
<div class="" data-block="true" data-editor="bal6b" data-offset-key="70sb8-0-0">
<div class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr" data-offset-key="70sb8-0-0"><span data-offset-key="70sb8-0-0">The microservices architectural pattern addresses some of the issues found on larger products. Microservices divide the functionality into </span><span class="adverb"><span data-offset-key="70sb8-1-0">tightly</span></span><span data-offset-key="70sb8-2-0"> scoped services. These services are </span><span class="adverb"><span data-offset-key="70sb8-3-0">loosely</span></span><span data-offset-key="70sb8-4-0"> coupled, so you can work on them </span><span class="adverb"><span data-offset-key="70sb8-5-0">independently</span></span><span data-offset-key="70sb8-6-0">. You can even build them using separate technology stacks. </span></div>
</div>
<div class="" data-block="true" data-editor="bal6b" data-offset-key="891t9-0-0">
<div class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr" data-offset-key="891t9-0-0"><span data-offset-key="891t9-0-0"> </span></div>
</div>
<div class="" data-block="true" data-editor="bal6b" data-offset-key="dccu2-0-0">
<div class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr" data-offset-key="dccu2-0-0"><span data-offset-key="dccu2-0-0">Microservices architecture has several advantages. First, it's easy to scale microservices. If you have one part of your application that's receiving lots of traffic, you can scale only that part. Microservices are also easy to understand. Because they are small, it's easy to drop into a new service and find your way around. Each service is easy to reason about. This is my favorite feature of the microservies architecture. Getting up to speed is much easier than on a big monolith application. Microservices also encourage reuse. In enterprise environments, you often have several applications hitting the same data. With microservices, you can make one service that serves many applications.</span></div>
</div>
<div class="" data-block="true" data-editor="bal6b" data-offset-key="4nu5a-0-0">
<div class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr" data-offset-key="4nu5a-0-0"><span data-offset-key="4nu5a-0-0"> </span></div>
</div>
<div class="" data-block="true" data-editor="bal6b" data-offset-key="befii-0-0">
<div class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr" data-offset-key="befii-0-0"><span data-offset-key="befii-0-0">While microservices are great, there are some drawbacks. The biggest drawback I've seen is performance. </span><span class="hardreadability"><span data-offset-key="befii-1-0">Because the services are </span></span><span class="adverb"><span data-offset-key="befii-2-0">loosely</span></span><span class="hardreadability"><span data-offset-key="befii-3-0"> coupled, you use JSON as a commnication mechanism between services</span></span><span data-offset-key="befii-4-0">. This means you end up doing a lot of serialization and deserialization. Each service boundary you cross incurs an overhead cost. On larger requests, those costs are significant. These service boundaries also make it harder to troubleshoot problems. Tracking down which service in a chain of calls is breaking down can be frustrating. </span></div>
</div>
<div class="" data-block="true" data-editor="bal6b" data-offset-key="22dof-0-0">
<div class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr" data-offset-key="22dof-0-0"><span data-offset-key="22dof-0-0"> </span></div>
</div>
<div class="" data-block="true" data-editor="bal6b" data-offset-key="flnsp-0-0">
<div class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr" data-offset-key="flnsp-0-0"><span data-offset-key="flnsp-0-0">Another pitfall of microservice development is deployment complexity. </span><span class="veryhardreadability"><span data-offset-key="flnsp-1-0">Even though services are </span></span><span class="adverb"><span data-offset-key="flnsp-2-0">loosely</span></span><span class="veryhardreadability"><span data-offset-key="flnsp-3-0"> coupled, you still need to manage the dependencies between them when deploying larger features</span></span><span data-offset-key="flnsp-4-0">. If you don't have a good continuous deployment and integration pipeline, you are going to have a bad time.</span></div>
</div>
<div class="" data-block="true" data-editor="bal6b" data-offset-key="5kb2o-0-0">
<div class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr" data-offset-key="5kb2o-0-0"><span data-offset-key="5kb2o-0-0"> </span></div>
</div>
<div class="" data-block="true" data-editor="bal6b" data-offset-key="8feki-0-0">
<div class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr" data-offset-key="8feki-0-0"><span data-offset-key="8feki-0-0">If you want to see a sample microservices and Angular application, I have one <a href="https://github.com/DustinEwers/angular-and-dotnet/tree/master/microservies" target="_blank" rel="noopener">here.</a></span></div>
</div>
<h2>Conclusion</h2>
<span data-offset-key="9muqj-0-0">Each of the architectures in this post shines in a particular set of circumstances. </span><span class="hardreadability"><span data-offset-key="9muqj-1-0">Monoliths are great for small to medium sized projects, but are not ideal for larger applications</span></span><span data-offset-key="9muqj-2-0">. Serverless architecture is great for small apps, but not for large enterprise applications. </span><span class="veryhardreadability"><span data-offset-key="9muqj-3-0">Microservices architecture works well for large applications, but isn't worth the overhead on small ones</span></span><span data-offset-key="9muqj-4-0">. Figure out the application you want to build and choose wisely. </span>