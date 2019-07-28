---
id: 316
title: Angular CLI With .NET Core
date: 2017-03-20T23:30:54+00:00
author: Dustin Ewers
layout: post
guid: https://dustinewers.com/?p=316
permalink: /angular-cli-with-net-core/
thrive_post_fonts:
  - '[]'
thrive_share_count:
  - '{"facebook":310,"twitter":0,"plusone":0,"pinterest":0,"linkedin":16,"total":326,"last_fetch":1526357867,"url":"https://dustinewers.com/angular-cli-with-net-core/"}'
categories:
  - Angular
  - ASP.NET
  - JavaScript
  - TypeScript
---
<strong>Update February 2018</strong>

The fine folks at Microsoft now have a template that integrates Angular CLI and .NET Core. I used it on my last Angular project and found it to be quite useful. One thing they missed is that the polyfills for Internet Explorer are not enabled by default, so you'll want to go to polyfills.ts and enable those.

<a href="https://docs.microsoft.com/en-us/aspnet/core/spa/angular" target="_blank" rel="noopener">Check it out here.</a>

If you're still interested in how to do this manually, continue on.

-------

Angular is a fantastic platform for building rich client side apps, but let's not forget about the back end. My choice for the back end is ASP.NET Core. If you're not shy about spending a bunch of time setting up Webpack, Angular and ASP.NET Core is a fantastic combination.
<blockquote class="twitter-tweet" data-lang="en">
<p dir="ltr" lang="en">As for Andy, he spent that break hunkered in the shade, a strange little smile on his face, he’d got Webpack to work. <a href="https://t.co/3CHrD4ORTn">pic.twitter.com/3CHrD4ORTn</a></p>
— I Am Devloper (@iamdevloper) <a href="https://twitter.com/iamdevloper/status/792477087277998080">October 29, 2016</a></blockquote>
<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

However, I prefer to spend my time building applications, not configuring build tools. Angular CLI takes a lot of the pain out of using Angular, but it's a self contained command line tool. Fortunately, Angular CLI and ASP.NET Core can happily co-exist. In this post, we're going to build an application using these two technologies together. By the end, you'll be ready to have all the goodness of Angular and ASP.NET Core without spending a week setting up Webpack.
<h2>Prerequisites</h2>
Make sure you have .NET Core, Node.js and Angular CLI installed.

<a href="https://www.microsoft.com/net/core#windowsvs2017" target="_blank" rel="noopener">https://www.microsoft.com/net/core#windowsvs2017</a>

<a href="https://nodejs.org/en/" target="_blank" rel="noopener">https://nodejs.org/en/</a>

~~~~npm install -g @angular/cli ~~~~
<h2></h2>
<h2>Getting Started: ASP.NET Core App Setup</h2>
Fire up Visual Studio (I'm using VS 2017) and create a new ASP.NET Core Web Application. Select the Web API Starter. This doesn't bring in any web stuff, which is ideal. We're going to use Angular CLI to generate the client files.

<img class="alignnone size-full wp-image-323" src="/wp-content/uploads/2017/03/webapi-project.png" alt="" width="791" height="518" />

Then go ahead and disable automatic Typescript compilation. We want CLI to compile our Typescript, not Visual Studio. Do this by adding the "TypeScriptCompilerBlocked" line to your csproj file.

<img class="alignnone size-full wp-image-318" src="/wp-content/uploads/2017/03/typescript-compilation.png" alt="" />

Head on over to the Startup.cs and add in the static files middleware. You'll have to install the "Microsoft.AspNetCore.StaticFiles" NuGet package. After that, add app.UseDefaultFiles() and app.UseStaticFiles() to your Configure() method.

<img class="alignnone size-full wp-image-327" src="/wp-content/uploads/2017/03/default_files_static_files.png" alt="" />

After you get those setup, you'll want to add some middleware to redirect those pesky 404s to the root file. This will allow you to navigate the application without having to start at the root each time you hit refresh. For this app, api routes are prefixed with "api", so we're excluding those routes from the check. We're also excluding routes with a file extension since those are likely static assets.

<img class="alignnone size-full wp-image-321" src="/wp-content/uploads/2017/03/static-file-middleware.png" alt="" width="1094" height="247" />

To prevent the app from loading up the api/values endpoint by default, go to properties/launchSettings.json and change the "launchUrl" keys from "api/values" to "".

<img class="alignnone size-full wp-image-325" src="/wp-content/uploads/2017/03/launch-settings.png" alt="" />

At this point, our .NET Core app should be ready to go. Let's move on to the Angular code.
<h2>Setting Up Angular CLI</h2>
We're going generate our Angular app on top of our ASP.NET core app. To do this, go to the command line and navigate to the directory of your solution file. Then run "ng new &lt;your app name&gt;".
<h2><img class="alignnone size-full wp-image-324" src="/wp-content/uploads/2017/03/ng-new.png" alt="" width="1170" height="231" /></h2>
You want the &lt;app name&gt; part to be the same as your .NET Core source folder. This will drop all of the CLI files into your ASP.NET Core root folder. It should look like this:
<h2><img class="alignnone size-full wp-image-319" src="/wp-content/uploads/2017/03/combined-filestructure.png" alt="" /></h2>
<h2>Gluing It All Together</h2>
Angular has a default file structure, but it's not ideal for the existing ASP.NET Core application. Fortunately, Angular CLI has some options that will allow us to change this structure. We want the client side code to be in a folder called "client-src" and the client side build artifacts to go to the wwwroot folder. To do this, rename the "src" folder to "client-src". Then go to go to .angular-cli.json. This is the primary configuration file for Angular CLI. First, change "src" to "client-src". Then change the "outDir" attribute from "dist" to "wwwroot". This will drop all of the compiled assets into the wwwroot folder.

<img class="alignnone size-full wp-image-326" src="/wp-content/uploads/2017/03/angular-cli-changes.png" alt="" />

At this point, we can build the Angular application using Angular CLI. Navigate a command prompt into the main application folder and run "ng build". This command will build the client side part of the application, dropping the build artifacts into wwwroot. The wwwroot folder should look like this:
<h2>  <img class="alignnone size-full wp-image-322" src="/wp-content/uploads/2017/03/wwwroot.png" alt="" width="232" height="166" /></h2>
At this point we should be able to run the app by hitting the Run button in Visual Studio. Unfortunately, we still have a two stage build pipeline. The first step being "ng build" to generate the client side files and then running the .NET Core app. To fix this, we can drop in a post build script: "ng build -- aot". This will compile the client side files (with ahead of time compiling) after the app builds.
<h2>Bonus Points</h2>
If you're using git, you'll want to add the wwwroot folder to your .gitignore file. These files are generated, so you probably don't want to check them in.
<h2>Example Code</h2>
All of the demo code used in this post is available here:

<a href="https://github.com/DustinEwers/shiny-angular-demos/tree/master/ninjas-quest-cli-core/ninjas-quest" target="_blank" rel="noopener">https://github.com/DustinEwers/shiny-angular-demos/tree/master/ninjas-quest-cli-core/ninjas-quest</a>

This demo includes a full Angular application on top of ASP.NET core. Feel free to use this as a template or something to look at while building your own. You now have everything you need to get started building shiny applications using Angular CLI and ASP.NET Core.