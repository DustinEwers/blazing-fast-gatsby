---
id: 415
title: Cmder is the Cadillac of Windows Consoles
date: 2017-09-06T19:48:52+00:00
author: Dustin Ewers
layout: post
guid: https://dustinewers.com/?p=415
permalink: /cmder-windows-console/
thrive_post_fonts:
  - '[]'
image: /wp-content/uploads/2017/09/auto-car-cadillac-oldtimer-small.jpg
categories:
  - ASP.NET
  - Tools
---
Like fashion, computing works in cycles. Things that were once looked at as passe come back with retro vengeance. For .NET development, the console is back. Consoles combined with lightweight editors like Visual Studio Code are becoming increasingly popular. Call me a hipster, but I'm all for this change. I hate waiting around for my editor and I never have to do that in a console or Visual Studio Code.

Unfortunately, if you're living in the world of Windows, the default command line options are lacking. Not only are CMD and Powershell ugly, they lack basic usability features found in Linux and OSX. There is a better way. Cmder is a Windows console emulator that bundles several command line tools together into one fantastic package. It's the Cadillac of Windows consoles.

Here's what it looks like:

<img class="alignnone wp-image-418 size-large" src="/wp-content/uploads/2017/09/cmder_basic-1024x569.png" alt="" width="1024" height="569" />

Cmder has a nice tabbed interface. You can run multiple consoles without having to deal with a bunch of windows. It also supports several different types of consoles including: CMD (enhanced with <a href="https://mridgers.github.io/clink/" target="_blank" rel="noopener">Clink</a>), Powershell, and Bash.

You also get full control of the appearance of the shells including the font, color, etc... Cmder has many themes, but the default Monokai theme is good enough for me.

More importantly, you can create custom tasks. A custom task is a specific command window that you can define. You can specify the shell, what parameters it's called with, and what directory is opened. You can have a command line setup for each application you work on. You no longer need to open a command line and manually navigate to your app folder each time you open up the console.

<strong>To make a custom task, do the following:</strong>

From Cmder, type Win + Alt + T. This takes you the tasks windows. You can also click the arrow next to the plus sign and click "Setup Tasks".

This window allows you to reorder and reorganize the different defaults in Cmder. Hit the plus sign to add your own.

In this case, this is a console task that opens a specific project I'm working on.

<img class="alignnone size-full wp-image-420" src="/wp-content/uploads/2017/09/cmder_custom_tasks.png" alt="" width="1523" height="941" />

After you setup your new task, click "Save Settings". You should see your new shell in the list of available presets. Then you can open that exact shell whenever you want.

<img class="alignnone size-full wp-image-421" src="/wp-content/uploads/2017/09/cmder_custom_task_display.png" alt="" width="1326" height="461" />

If you want to supercharge your Windows console, <a href="http://cmder.net/">check out Cmder</a>.