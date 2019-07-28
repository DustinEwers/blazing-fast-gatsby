---
id: 198
title: The State of Local Profiling on ASP.NET Core
date: 2017-02-01T18:31:36+00:00
author: Dustin Ewers
layout: post
guid: https://dustinewers.com/?p=198
permalink: /profiling-on-net-core/
thrive_post_fonts:
  - '[]'
categories:
  - ASP.NET
  - ASP.NET Performance
---
<img class="alignnone size-full wp-image-207" src="/wp-content/uploads/2017/02/p3pj7joyvnm-veri-ivanova.jpg" alt="" width="4272" height="2848" />

If you want to improve it, you need to measure it. We use profiling tools to get the insight required to find and destroy application bottlenecks. I'm a big fan of local profiling tools that you can install and run from within your application. My favorites are Miniprofiler and Glimpse. Unfortunately, many of the tools that are available on regular ASP.NET are not available for ASP.NET Core. In this post, we're going to explore our options for local profiling in ASP.NET Core. Currently, it's slim pickings, but there are a few tools available.

<h2>Combing the Desert</h2>

[caption id="attachment_210" align="alignnone" width="2144"]<img class="size-full wp-image-210" src="/wp-content/uploads/2017/02/desert_small.jpg" alt="" width="2144" height="1424" /> The state of .NET Core Local Profiling Tools[/caption]

For standard ASP.NET (non-core) Applications, there are a variety of profiling tools available. Some of those tools cost money and others are free. Unfortunately, most of them lack ASP.NET Core support. This is, in part, because ASP.NET Core is new. Additionally, our good friends at Microsoft have thrown the community a few curve-balls with the last few versions of the .NET Core. Most companies don't want to waste their time building tools if the framework is going to have a ton of breaking changes. This is especially true for free tools.

Here's the status of a few popular tools (as of January 2017):

<strong>MiniProfiler
</strong>The folks at Stack Overflow are waiting for a more stable version .NET Core to build their .NET core version of Miniprofiler. They said they will build a new version, but they only want to do it once.

<strong>dotTrace</strong>
JetBrains has not released a .NET Core version of dotTrace, though they claim some functionality with the current version. I've never tried this one, so I have no idea if it's worth waiting for.

<strong>Glimpse</strong>
I love Glimpse. It's one of my favorite profiling tools. The folks behind Glimpse put out a Beta version of Glimpse about a year ago. It lacked full functionality and no longer works. They appear to be working on the new version now. Their GitHub repo has recent check ins, so I'm hoping a new version appears soon.

<strong>Application Insights
</strong>This is Microsoft's default solution for application performance monitoring. It's meant to be used in conjunction with Azure, but you can run it locally and use Visual Studio to look at the results. Once hooked up to Azure, you can use this as a general application performance monitoring (APM) tool. It's installed by default in new ASP.NET Core Projects (look at the startup.cs), so Microsoft really wants you to use it. I kicked the tires a bit. Prefix is a competent option for ASP.NET Core.

Application Insights in action:<img class="alignnone size-full wp-image-202" src="/wp-content/uploads/2017/01/Screen-Shot-2017-01-31-at-11.17.02-PM.png" alt="" />

<strong>Stackify Prefix
</strong> Stackify prefix is a free tool you can install on your PC that monitors your ASP.NET applications. You'll need to also install it in your project, but once you do so, you get access to detailed information about your application's requests. They have a paid version of the Prefix and a related APM product, so there's some commercial backing here. I've tried out Prefix a few times and the tool is adequate for local profiling. It gives you the data you need, but I'm not a huge fan of the development experience. That being said, the tool gives you access to lots of data and works on .NET Core.

Stackify Prefix in action:<img class="alignnone size-full wp-image-200" src="/wp-content/uploads/2017/01/Screen-Shot-2017-01-31-at-11.33.23-PM.png" alt="" width="911" height="919" />

<h2>Conclusion</h2>

I'm still waiting for a new version of Glimpse (or Miniprofiler), but Stackify Prefix and Application Insights are good tools. I miss the easy to use inline monitoring of Glimpse, but Prefix and Application Insights have their advantages. Not only are they supported on .NET core, they also hook into more robust monitoring systems. You will be well served by either option. Go forth and monitor your apps, it'll save you a lot of pain down the road.