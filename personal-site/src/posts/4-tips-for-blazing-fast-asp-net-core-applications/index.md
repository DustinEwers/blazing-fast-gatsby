---
id: 384
title: 4 Tips For Blazing Fast ASP.NET Core Applications
date: 2017-08-08T15:29:52+00:00
author: Dustin Ewers
layout: post
guid: https://dustinewers.com/?p=384
permalink: /4-tips-for-blazing-fast-asp-net-core-applications/
thrive_post_fonts:
  - '[]'
thrive_share_count:
  - '{"facebook":0,"twitter":0,"plusone":0,"pinterest":0,"linkedin":0,"total":0,"last_fetch":1502903165,"url":"https://dustinewers.com/4-tips-for-blazing-fast-asp-net-core-applications/"}'
image: /wp-content/uploads/2017/08/car-race-ferrari-racing-car-pirelli-50704-e1502165819490.jpeg
categories:
  - ASP.NET
  - ASP.NET Performance
---
I'm a huge fan of ASP.NET Core. It's a great iteration on the ASP.NET platform and it should be your default choice for any new web development. I'm also a big fan of apps that don't take a week to load. Fortunately, ASP.NET Core doesn't skimp in the speed department. The framework has some great features for building fast applications. Some things that used to be hard are now easy.

In this post, I'm going to go over a few tips for building blazing fast ASP.NET applications.
<h3>Async Everything</h3>
<img class="alignnone size-medium wp-image-386" src="/wp-content/uploads/2017/08/async-all-the-things-300x225.jpg" alt="" width="300" height="225" />

&nbsp;

One important way to help your application scale is to use asynchronous methods. The async and await keywords make building asynchronous code as easy as building synchronous code. Using async and await frees up your threads while waiting for calls to return. Because you are using up fewer threads, more people can use your application at the same time.

Async is usually a good default practice. But, it's especially important when calling slower processes, like database calls and service requests. You don't want to hog up a thread waiting around for database results to come back. When building your application favor async versions when they are available. Entity Framework has async versions of most data access methods, so make use of them.

One thing to keep in mind is that using async and await will help you scale, but it won't run your requests in parallel. If you have several slow requests, consider running them in parallel using the <a href="https://docs.microsoft.com/en-us/dotnet/standard/parallel-programming/task-based-asynchronous-programming" target="_blank" rel="noopener">Task Parallel Library</a>. That will compress your wait time to the longest running call, as opposed to waiting for each one to return sequentially.
<h3>Cache Rules Everything Around Me</h3>
Getting data out of a database is the largest performance bottleneck in most applications. One way to reduce that cost is to cache things that are slow to retrieve or slow to change. ASP.NET Core has a few built in cache mechanisms.

The easiest cache to use is the built in <a href="https://docs.microsoft.com/en-us/aspnet/core/performance/caching/memory" target="_blank" rel="noopener">memory cache</a>. This cache stores items in the memory of your applications server. While this is easy to use, there are two downsides. The first downside is your cache goes away if your server goes down. Often, this is a non-issue, but if your application caches things are costly to calculate, this can be a real downer. The second problem is that if you want to scale your application to more than one server, your're out of luck.

The solution to this problem is to use a <a href="https://docs.microsoft.com/en-us/aspnet/core/performance/caching/distributed" target="_blank" rel="noopener">distributed cache</a>. This cache uses either a REDIS instance or a SQL Server table to hold your cached data. I've used both flavors and they both work great. One thing I liked about using the SQL Server cache is that I could add fields to the table to enable more detailed caching logic.

Regardless of which caching mechanism you use, you should hide it behind your own cache abstraction. (I call mine ICacheProvider) By using your own cache abstraction, you can easily swap out one caching mechanism for another. Most people start off with the memory caching, but eventually outgrow it. If you put your caching behind an abstraction, you can swap it out for a distributed cache without having to change a bunch of places in your app.
<h3>Crush Those JSON Responses With Middleware</h3>
By default, ASP.NET only compresses a few types of requests by default. These include the content of Razor pages, but not the results of api calls (JSON is not compressed by default). This means that if you have an api request heavy application (ie. a SPA), you can save some serious bandwidth by compressing those responses. This is especially important if you are serving mobile customers, who may have a low bandwidth signal.

Unlike the previous version of ASP.NET, Core has a handy <a href="https://docs.microsoft.com/en-us/aspnet/core/performance/response-compression" target="_blank" rel="noopener">built in middleware</a> that you can add to your app. You can specify the type of compression and what mime types to compress. I've tested this in my application and the compression saves a noticeable amount of bandwidth.
<h3>Bundle Those Client Side Assets</h3>
Modern applications tend to use lots of JavaScript libraries, images, and fonts. Getting those assets to the client efficiently is important. Especially if those clients are on a low bandwidth connection. We rely on two strategies to minimize what we send to the client. The first strategy is bundling. This is where you take several assets and send them down in one request. This saves you bandwidth because you have less headers sent over the wire. The other strategy is minification. This is where you run JavaScript through a process that strips out any extraneous code, shrinking down the file size.

In the ASP.NET world, there are two paths to do this. If you are building a JavaScript heavy application, like a SPA application, use a JavaScript build tool. Webpack is my preferred JavaScript build tool. It can iterate through your dependencies and then bundle them into files. If you're using Angular (2+), you should use the Angular CLI. It uses Webpack under the hood, but hides away it's complexity.

The second way to do bundle and minify assets is to use the <a href="https://docs.microsoft.com/en-us/aspnet/core/client-side/bundling-and-minification" target="_blank" rel="noopener">Bundler and Minifier</a> Visual Studio extension. This extension compiles your client side assets on build. It is easier to use than JavaScript build tools like Webpack. If you're using Razor views with a little bit of client side code, this is the way to go.

&nbsp;
<h3><strong>How about you?</strong></h3>
If you have a good performance tip, feel free to leave it in the comments.