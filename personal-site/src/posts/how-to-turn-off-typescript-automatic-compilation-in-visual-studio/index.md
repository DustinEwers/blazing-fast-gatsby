---
id: 118
title: How to Turn Off TypeScript Automatic Compilation in Visual Studio
date: 2016-11-14T21:46:31+00:00
author: Dustin Ewers
layout: post
guid: http://dustinewers.com/?p=118
permalink: /how-to-turn-off-typescript-automatic-compilation-in-visual-studio/
categories:
  - ASP.NET
  - JavaScript
  - TypeScript
---
TypeScript is a first class citizen in the Visual Studio universe. By default, Visual Studio will compile your typescript files whenever you save them. This is great for many types of TypeScript projects, unless you're using a tool like Webpack or Gulp. These tools handle TypeScript compilation by themselves. You don't want Visual Studio to waste your time generating spurious files. Fortunately, it's easy to disable automatic TypeScript compilation. Just add a "TypeScriptCompileBlocked" element to your project's xproj file and give it a value of "True". This will prevent Visual Studio from making those pesky extra files.

[caption id="attachment_119" align="alignnone" width="765"]<img class="wp-image-119 size-full" src="/wp-content/uploads/2016/11/tsxproj.png" alt="Set the TypeScriptCompiledBlocked to True in the Xproj file" width="765" height="103" /> Disabling automatic TypeScript Compilation[/caption]