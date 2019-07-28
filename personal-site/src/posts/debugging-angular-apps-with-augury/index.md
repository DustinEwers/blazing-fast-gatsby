---
id: 217
title: Debugging Angular Apps with Augury
date: 2017-02-07T22:52:46+00:00
author: Dustin Ewers
layout: post
guid: https://dustinewers.com/?p=217
permalink: /debugging-angular-apps-with-augury/
thrive_post_fonts:
  - '[]'
thrive_share_count:
  - '{"facebook":0,"twitter":0,"plusone":0,"pinterest":0,"linkedin":2,"total":2,"last_fetch":1493297604,"url":"https://dustinewers.com/debugging-angular-apps-with-augury/"}'
categories:
  - Angular
  - JavaScript
---
I recently went on a hunt for Angular (formerly known as Angular 2)  profiling tools.  Angular is a fantastic framework, but the component hierarchies can get a little crazy. Fortunately, there's a way to tame the complexity. After some Google searching, I came across <a href="https://augury.angular.io/" target="_blank">Augury</a>. Augury is a debugging and profiling tool created by Google and Rangle.io.

Augury is simple to install. First, install the <a href="https://chrome.google.com/webstore/detail/augury/elgalmkoelokbchhkhacckoklkejnhcd" target="_blank">Augury Chrome Extension</a> (Sorry Firefox lovers, no soup for you.) There is no step 2.

Once installed, Augury shows up as a new tab in your Chrome Developer Tools. If you have an Angular app running in debug mode (it doesn't work on prod mode), the tab will show several visualizations of your application. The first one is the component tree, which lays out the components for whatever page you are on. Click a component to see the properties and events for it. You can also manipulate the underlying models and trigger events. Additionally, each component is has a link to its source code. If you want to set a breakpoint, just click and you'll be right there.

<img class="alignnone size-full wp-image-218" src="/wp-content/uploads/2017/02/Screen-Shot-2017-02-07-at-10.24.39-PM.png" alt="" width="1936" height="1072" />

&nbsp;

You can also get a visualization of injected services by clicking on the Injector Graph. It'll help you figure out where your dependencies come from.

<img class="alignnone size-full wp-image-220" src="/wp-content/uploads/2017/02/Screen-Shot-2017-02-07-at-10.26.25-PM.png" alt="" width="750" height="844" />

&nbsp;

If your application is using routing, click on the routing tree tab to get a visualization of the routing structure.You can click into the routes to see what url triggers them, along with other route information. If you happen to use lazy loading, those routes are marked as "lazy loaded" until you access them.

<img class="alignnone size-full wp-image-221" src="/wp-content/uploads/2017/02/Screen-Shot-2017-02-07-at-10.25.29-PM.png" alt="" width="984" height="450" />

If you want to see a breakdown of your application's module structure, click the NgModules tab. This is a good way to get a high level overview of your application.

&nbsp;

<img class="alignnone size-full wp-image-219" src="/wp-content/uploads/2017/02/Screen-Shot-2017-02-07-at-10.25.46-PM.png" alt="" width="1924" height="712" />

Overall, Augury makes it easier to reason about your Angular applications. By visualizing the component trees, routing, and module structures, you get a high level overview of your application's structure. Additionally, the extra debugging features add a layer of easy to the already fantastic Chrome Developer tools. I've added this to my day-to-day Angular tool belt and urge you to do the same.

<h3>More Information</h3>

<a href="https://augury.angular.io/" target="_blank">Augury Home</a>

<a href="https://augury.angular.io/pages/guides/">Augury Guide</a>