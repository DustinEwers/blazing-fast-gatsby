---
id: 22
title: Visual Studio Goes Cross Platform with Visual Studio Code
date: 2015-04-29T21:15:12+00:00
author: Dustin Ewers
layout: post
guid: http://bd49077a-fed4-46ac-86e5-ab3e42f2b76d
permalink: /visual-studio-goes-cross-platform-with-visual-studio-code/
categories:
  - ASP.NET
  - JavaScript
---
Today, Microsoft kicked off Build 2015. Among the long list of exciting developments, Microsoft released the first cross platform version of Visual Studio. This new version of Visual Studio is called Visual Studio Code (or VSCode). It's a lightweight code editor that runs on Windows, Linux, and OSX.

VSCode is built for Node.js and ASP.NET web app development, but it also support lots of other languages. In addition to the languages you'd expect from a Microsoft code editor (C#, JavaScript, TypeScript, F#, etc...), VSCode also supports a laundry list of other languages like C++, PHP, Python, Java, R, Objective-C, PowerShell, and Markdown ( <a href="https://code.visualstudio.com/docs/languages">full fist of supported languages</a> ).

While VSCode isn't a full IDE like the Visual Studio we all know and love, but it does have a lot of features that take it beyond a basic text editor.

<h5 id="features">Features:</h5>

<ul>
    <li>Node.js debugging (ASP.NET 5 and other languages are on in progress)</li>
    <li>Built in Git support</li>
    <li>Multiple cursors, just like Sublime Text or Atom</li>
    <li>Intellisense (for Node.js and ASP.NET)</li>
    <li>Static Code Analysis and Refactoring (for C#, JavaScript, and Typescript)</li>
    <li>Automatic updates</li>
    <li>A fast release cadence, with releases coming every few weeks, instead of every few months.</li>
    <li>Ability to customize keyboard shortcuts and add custom tasks</li>
</ul>

<h4 id="firstimpressions">First Impressions</h4>

As a Mac owner who does ASP.NET development, I immediately downloaded a copy of VSCode and started playing with it. To me, VSCode feels like a cross between Visual Studio and Sublime Text (or Atom). On my Mac, it feels snappy and responsive. The intellisense is instant, but I've noticed some that it doesn't include all the files (probably a setup issue on my part).

<img src="https://dustinewers.com/content/images/2015/04/intellisense.png" alt="Visual Studio Goes Cross Platform with Visual Studio Code" />

VSCode also supports static analysis. This means you can find references and view definitions. I tried a "Find All References" and it took a little longer to pop up, but I like the inline reference window. "Goto Definition" and "Peek Definition" were instant, however.

<img src="https://dustinewers.com/content/images/2015/04/findallrefs.png" alt="Visual Studio Goes Cross Platform with Visual Studio Code" />

Multi-cursor is my favorite text editor feature. I bought a copy of Sublime Text specifically for it's multi-cursor support. Multi-cursor has saved me tons of time. VSCode has the best multi-cursor support I've seen. ( <a href="https://code.visualstudio.com/Docs/editingevolved">More Info</a> )

<img src="https://dustinewers.com/content/images/2015/04/multicursor.png" alt="Visual Studio Goes Cross Platform with Visual Studio Code" />

<h4 id="verdict">Verdict</h4>

In the past few years, I feel like code editors have taken some huge steps forward. Sublime Text set a benchmark for excellence and several competitors have stepped up to the plate. The best one I've seen before VSCode was the Atom editor. While it wasn't good enough to take me away from Sublime, I thought it was a solid piece of software.

At my day job, besides Visual Studio 2013, I use Sublime Text. Sublime has saved me countless hours of time by making repetitive code chores easier. VSCode does all the things I currently use Sublime for AND it has built in support for ASP.NET. I'm definitely going to add VSCode to my developer tool belt.

<h4 id="wherecanigetit">Where Can I Get It?</h4>

Visual Studio Code is available for free at <a href="https://code.visualstudio.com/">https://code.visualstudio.com/</a>

Documentation can be found at <a href="https://code.visualstudio.com/Docs">https://code.visualstudio.com/Docs</a>