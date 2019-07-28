---
id: 339
title: 'Solution: New Project Hanging When Using R Tools for Visual Studio 2017'
date: 2017-05-17T23:42:04+00:00
author: Dustin Ewers
layout: post
guid: https://dustinewers.com/?p=339
permalink: /solution-new-project-hanging-when-using-r-tools-for-visual-studio-2017/
thrive_post_fonts:
  - '[]'
categories:
  - Data Analysis
  - R
---
I'm really enjoying using <a href="https://docs.microsoft.com/en-us/visualstudio/rtvs/" target="_blank" rel="noopener noreferrer">R Tools for Visual Studio</a>. It's nice to learn something new (R) with something familiar (Visual Studio). I did, however, hit a snag when trying out the new IDE.

Upon installing the data science workload in Visual Studio (which is how you install R Tools), I couldn't open up or create a project. File -&gt; New Project just hung indefinitely. Usually, you expect these things to actually work, so I dropped a bug onto the R Tools for Visual Studio Github page. To my surprise, within about thirty minutes (on a Sunday night), someone asked me about my issue. While they didn't give me an exact answer, they gave me the hint I needed to fix my issue. I was impressed by the speed and helpfulness of their response.

As some of you already know, our good friends at Microsoft maintain their own version of R. This version is faster, but it's a point release behind the latest one. It's a basic trade off between shiny and speedy. Turns out R Tools for Visual Studio doesn't yet support the latest version. I had previously installed the non-Microsoft R, which was at v3.4 and Visual Studio defaulted to that version.

There are two ways to solve the issue. The easiest way is to just uninstall R 3.4 and use the Microsoft versions of R. If you are using R Studio as well, Microsoft's R works fine. The second way is to go to R-Tools -&gt; Windows -&gt; Workspaces. From there, you can pick the version of R that's being used by Visual Studio.

Regardless of which solution you go with, this issue, while vexing, is easy enough to fix.

Happy data hunting.