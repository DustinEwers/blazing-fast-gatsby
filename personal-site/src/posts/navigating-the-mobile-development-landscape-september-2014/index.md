---
id: 35
title: 'Navigating the Mobile Development Landscape: September 2014'
date: 2014-09-28T12:43:30+00:00
author: Dustin Ewers
layout: post
guid: http://0ddb61d8-8ea4-41e3-b4b7-909585c58d6b
permalink: /navigating-the-mobile-development-landscape-september-2014/
thrive_share_count:
  - '{"facebook":0,"twitter":0,"plusone":0,"pinterest":0,"linkedin":4,"total":4,"last_fetch":1513923341,"url":"https://dustinewers.com/navigating-the-mobile-development-landscape-september-2014/"}'
categories:
  - Mobile Development
---
Smartphone and tablet adoption has <a href="http://www.pewinternet.org/data-trend/mobile/device-ownership/">exploded</a> in the past five years. This trend has encouraged me to start exploring mobile development technologies. I found that there are lots of ways to build apps for mobile devices. Several mobile development technologies leverage my current web development skills. I'm going to cover the four primary ways to build mobile applications.

<h3 id="1responsivedesign">1. Responsive Design</h3>

The easiest way for a web developer to get started in mobile development is to build mobile-friendly web applications. You can build web applications that work on most screens by applying CSS tactics like media queries and relative sizing. Front end frameworks like Bootstrap and Foundation make it easy to build responsive web apps. Responsive design should be the default for any new web application. You never know when someone is going to try to browse your app with their Internet enabled toaster.

Responsive design is great because it has the flattest learning curve for a web developer. The other huge advantage is that you don't need to build a separate app for each platform.

Unfortunately, building a mobile web app means you have to design for the lowest common denominator. You don't get access to the platform specific features like a native app. You also have to deal with network issues and browser quirks. Additionally, most people on mobile devices prefer to use apps instead of their web browser.

Links:
<a href="http://getbootstrap.com/">http://getbootstrap.com/</a>
<a href="http://foundation.zurb.com/">http://foundation.zurb.com/</a>

<h3 id="2hybridapplication">2. Hybrid Application</h3>

Hybrid applications are another way to use existing web skills to build mobile apps. You develop hybrid apps using standard web technologies like CSS, JS, and HTML5. They have some access to platform specific features via JavaScript apis. Unlike pure web applications, hybrid apps can be sold in app stores alongside native apps.

At first glance, hybrid development sounds like a great deal. A single code base that can be used on all the major mobile platforms and still have access to platform specific functionality. The people who make hybrid application platforms claim that hybrid apps compose the majority of top apps in the app store.

Unfortunately, there are serious flaws to the hybrid development model. The first is that hybrid apps are much slower than their native counterparts. Performance is better than a few years ago, but hybrid apps are never going to be as performant as native apps. Additionally, hybrid apps don't behave like other native apps. There are lots of transition effects and other native behaviors that are hard to replicate in a hybrid app.

Links:
<a href="http://www.telerik.com/appbuilder">http://www.telerik.com/appbuilder</a>
<a href="http://cordova.apache.org/">http://cordova.apache.org/</a>
<a href="http://phonegap.com/">http://phonegap.com/</a>

<h3 id="3xamarin">3. Xamarin</h3>

The Xamarin platform offers the ability to build cross platform mobile applications using C#. With Xamarin, you build the user interface for each platform using C# wrappers for native libraries. You can then use shared libraries for all the core business functionality. Xamarin claims that you can have up to 95% code reuse on their platform.

Xamarin is great for .NET developers who want to build mobile apps because using tools they are familiar with. You can get near native performance and significant code reuse between platforms.

Xamarin is not perfect though. Xamarin is expensive and it comes with a steep learning curve. Not only do you need to learn the APIs for each mobile platform, you also need to learn Xamarin.

Links:
<a href="http://xamarin.com/">http://xamarin.com/</a>
<a href="http://www.whitneyland.com/2013/05/why-i-dont-recommend-xamarin-for-mobile-development.html">http://www.whitneyland.com/2013/05/why-i-dont-recommend-xamarin-for-mobile-development.html</a>

<h3 id="4nativeapplications">4. Native Applications</h3>

The final, and most obvious option, is to build separate apps for each native platform you wish to support. While its inconvenient to have to build separate apps, going 100% native has some advantages. First, each app will have a native look and feel without having to resort to outside libraries. Second, pure native development offers the best performance. Finally, all the major native app platforms have great references and development resources. There will be better support and more open source code for native developers than any of the hybrid platforms.

Links:
<a href="http://developer.windows.com/en-us">http://developer.windows.com/en-us</a>
<a href="https://developer.android.com/index.html">https://developer.android.com/index.html</a>
<a href="https://developer.apple.com/devcenter/ios/index.action">https://developer.apple.com/devcenter/ios/index.action</a>

<h3 id="conclusion">Conclusion</h3>

I've spent a lot of time reading about different mobile development options. Additionally, I watched demos of several different mobile development plaforms. (Specifically, native Android, Window, and iOS developement, several Xamarin demos, and Telerik's App Builder.) Based on that experience, I'm going to focus on mobile web applications and native development. Mobile web applications leverage my current skills as a web developer. I also think the mobile web option will become more popular as mobile web browsers get better. Hybrid development looks promising, but based on what I've learned, it's a "good enough" solution at best. Native development provides the best user experience and is a prerequisite to "combination" platforms like Xamarin. Overall, there's no shortage of ways to build a mobile app.