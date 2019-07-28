---
id: 18
title: 'How to: Ionic in Visual Studio'
date: 2015-06-24T18:19:01+00:00
author: Dustin Ewers
layout: post
guid: http://402efe3b-0f2c-4530-8c08-c69e95468523
permalink: /how-to-ionic-in-visual-studio/
categories:
  - Mobile Development
---
Mobile devices are taking over the world. If you are a web developer, you need to be prepared for a world where people spend the majority of their computing time on mobile devices. This doesn't mean "the web is dead", just that you need to be able to write code that works on mobile devices. The primary way to do this is by writing responsive web sites. However, sometimes you want to be on your user’s home screen. For that, you need to build an app. While learning the native platforms is a possibility, there's a significant learning curve. Fortunately, there are hybrid applications.

<blockquote><strong>What's a hybrid application?</strong>

A hybrid application is a mobile app (it sells in the app store) that runs within an internal web browser. Hybrid apps use standard web technologies like HTML, CSS, and JavaScript. For the average user, hybrid apps are indistinguishable from standard native apps. There are two main advantages. First, you can use one code base for all three platforms. Second, you use existing web skills to build that code base.</blockquote>

<h3 id="mypathtohybriddevelopment">My Path to Hybrid Development</h3>

I spend most of my time developing ASP.NET applications, but I’ve been experimenting with mobile technologies for the past year. I've built native apps in Android and Windows Mobile. I've played around with Swift. I tried to use Xamarin Forms (and hit the paywall at File -&gt; New). The one technology that’s been on my list that I haven't gotten around to until recently, is hybrid.

A big part of why hybrid technologies got kicked to the back of my list is because of the ongoing debate between hybrid and native. Hybrid apps got off to a lousy start. They were slow and clunky compared to their native counterparts. Turns out DOM manipulation is slow, especially on a phone with 128mb of ram and a single core processor.

In recent years, a combination of improving web browsers and Moore’s law have fixed this issue. Unless you are building a video game, hybrid apps are fast enough.

Another barrier for hybrid technologies is that each native environment has it’s own design language. Each of the native environments has a standard list of controls and design guidelines that help you fall into the pit of success. You don't have to work hard to make something that looks professional.

When building my Windows and Android apps, I went from zero knowledge to a simple, but decent looking app in a few days. I used the standard controls with some minor color tweaks and had something that looked like it belonged.

Most hybrid environments, like Apache Cordova, don’t have this built in design. You start with a blank canvas. This gives you lots of room to shoot yourself in the foot.

In the web world, we solved this problem with front-end frameworks. You can use Bootstrap, Foundation, or a host of other frameworks to give your app a default design you can override later. This has made it a lot easier for developers to build professional looking web applications.

Fortunately, people who build hybrid applications caught on and built their own frameworks. While there's quite a few of these, the one I'm going to cover here is Ionic.

<h3 id="whatisionic">What is Ionic?</h3>

<a href="http://ionicframework.com/">Ionic</a> is a hybrid application framework that uses Angular.js to build cross platform hybrid apps. It sits on top of Apache Cordova and provides a standard set of controls for building hybrid applications. Think of <a href="http://ionicframework.com/">Ionic</a> as Bootstrap (+5) for hybrid applications. It gives you starting point and way of doing things that speed up development.

<h3 id="whyionic">Why Ionic?</h3>

There are lots of advantages to using Ionic, but ultimately, I care about building great applications as fast as possible. Before learning about Ionic, I had recently downloaded an app. I was impressed with it’s design and functionality. When I first heard about Ionic, I noticed that they had a <a href="http://showcase.ionicframework.com/">showcase</a> of apps built using the platform. In that showcase, I saw the app I recently downloaded. At that point I was convinced. If an independent developer can build an award winning application that rates 4+ stars in both app stores, the technology that created it is worth a look.

Another reason that I've decided to try hybrid development is that Microsoft is embracing hybrid. Cordova tools for Visual Studio is now built into Visual Studio 2015. Microsoft is also building their own set of emulators to aid in hybrid development. This means that people that are using Microsoft technologies can use familiar tools to build mobile applications.

Overall, I think this is a big win for ASP.NET Developers.

<h3 id="howtogetstarted">How to get started?</h3>

<h4 id="installnodejs">Install Node.js</h4>

There are two paths to using Ionic with Visual Studio, but both of them start with some basic setup. Like many front end frameworks, Ionic uses the Node Package Manager (npm) to run commands. NPM is basically NuGet for Node.js. You can find <a href="https://nodejs.org/">Node.js here</a>.

<h4 id="installnpmpackages">Install NPM Packages</h4>

Once Node.js is installed, fire up a command shell (in admin mode) and enter the following command:

<code>npm install -g cordova ionic</code>

This command installs both Apache Cordova and Ionic.

Now that you have the basic tools setup, there are two ways to use Ionic with Visual Studio. The first option is to use Visual Studio. In this case, we're going to use Visual Studio 2015.

<h4 id="visualstudio2015">Visual Studio 2015</h4>

To develop with Ionic on Visual Studio 2015, do the following:

<h5 id="installtoolsforapachecordova">Install Tools for Apache Cordova</h5>

These come with the default installer. They're listed under "Cross Platform Mobile Development". If you need to add the tools in after the fact, you can just run the installer again.

<h5 id="usetheionictemplate">Use the Ionic Template</h5>

The makers of Ionic have published some handy templates for you to use in Visual Studio. In the new project screen, go to Online and search for "Ionic". You should then see the Ionic Tabs template. This template will set you up with a basic Ionic App to check out.

<img src="https://dustinewers.com/content/images/2015/06/IonicTemplate.png" alt="Ionic Template" />

<h5 id="runyourapp">Run Your App</h5>

To run your app, select either select an emulator and hit "Run". The easiest emulator to use is the Ripple Emulator, which brings up your Ionic app in your web browser.

<img src="https://dustinewers.com/content/images/2015/06/Screen-Shot-2015-06-24-at-6-31-17-PM.png" alt="Ionic in Ripple" />

<h4 id="visualstudiocode">Visual Studio Code</h4>

Another way to get off the ground with Ionic is to use Visual Studio Code. If you haven't checked out Code yet, you really need to. It's a lightweight code editor that's fast and optimized for ASP.NET and Node.js development. If you want to use Code to do your Ionic development, do the following:

<h5 id="installvisualstudiocode">Install Visual Studio Code</h5>

Download code <a href="https://code.visualstudio.com/">here</a> and follow the installation instructions for your platform.

<blockquote><strong>To add the "code" command to your command line on a Mac:</strong>

Start up Terminal

Type <code>cd ~/</code> to go to your home folder

Type <code>touch .bash_profile</code> to create a bash profile file.

Edit .bash_profile with your favorite editor (You can just type <code>open -e .bash_profile</code> to open it in TextEdit.)

Add the line <code>code () { VSCODE_CWD="$PWD" open -n -b "com.microsoft.VSCode" --args $* ;}</code>

Type <code>. .bash_profile</code> to reload .bash_profile and update any functions you add.</blockquote>

<h5 id="createanionicproject">Create an Ionic Project</h5>

Open up a command window and browse to the folder where you want your project.

To start an Ionic project type <code>ionic start appname template</code>.
For "appname", substitute your app name. For "template", Ionic comes with three basic templates. Try the "tabs" template for now. (<a href="http://ionicframework.com/docs/cli/start.html">Additional Info on starting an Ionic App</a>)
This command builds your Ionic app using your chosen template.

<h5 id="toedityourionicproject">To Edit Your Ionic Project</h5>

To open up VS Code, you can use the UI, or you can just type <code>code .</code> in your ionic project folder.

<h5 id="torunyourionicproject">To Run Your Ionic Project</h5>

Type the command <code>ionic serve</code>
This will open up your Ionic project in a web browser. You can also use emulators to run your Ionic app. (<a href="http://ionicframework.com/docs/cli/run.html">Instructions here</a>)

<h3 id="additionalresources">Additional Resources</h3>

<a href="http://ionicframework.com/">Ionic Framework</a>
<a href="https://code.visualstudio.com/">Visual Studio Code</a>
<a href="https://nodejs.org/">Node.js</a>
<a href="http://showcase.ionicframework.com/">Ionic Showcase</a>