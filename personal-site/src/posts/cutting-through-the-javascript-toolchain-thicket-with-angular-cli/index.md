---
id: 174
title: Cutting Through The JavaScript Toolchain Thicket with Angular CLI
date: 2017-01-19T00:17:00+00:00
author: Dustin Ewers
layout: post
guid: https://dustinewers.com/?p=174
permalink: /cutting-through-the-javascript-toolchain-thicket-with-angular-cli/
thrive_post_fonts:
  - '[]'
categories:
  - Angular
  - JavaScript
  - TypeScript
---
If there is a developer hell, one of the circles will involve the JavaScript toolchain. The JavaScript ecosystem is awash in tools, choices, and configuration options. Combine that with spurious documentation and constant change and you have a jungle of pain awaiting any brave soul who dares build a modern JS application.

<blockquote class="twitter-tweet" data-lang="en">
<p dir="ltr" lang="en">As for Andy, he spent that break hunkered in the shade, a strange little smile on his face, he’d got Webpack to work. <a href="https://t.co/3CHrD4ORTn">pic.twitter.com/3CHrD4ORTn</a></p>
— I Am Devloper (@iamdevloper) <a href="https://twitter.com/iamdevloper/status/792477087277998080">October 29, 2016</a></blockquote>

<script async src="//platform.twitter.com/widgets.js" charset="utf-8"></script>

Much has been done to ease JavaScript toolchain fatigue. There are templates and starter packs for most of the popular JS stacks. If you're using Angular 2, the Angular team has created a tool called Angular CLI. It encapsulates all the best practices into one handy command line tool. Angular CLI shortcuts most of the Angular 2 setup. Just run a few commands and you have a working application. In addition to the build tools, you also get a set of scaffolding tools. If you're familiar with the Ruby on Rails scaffolding tools, Angular CLI will feel right at home. In the interest of trying new things, I decided to kick the tires on Angular CLI and see if it lives up to the hype. I took my demo Angular 2/TypeScript/Webpack application (<a href="https://github.com/DustinEwers/typescript-demos/tree/master/tsDemo-core">repo here</a>) and ported it over to Angular CLI.

<h2>Installing Angular CLI</h2>

~~~~

npm install -g angular-cli

~~~~

Install the Angular CLI tool using NPM. Make sure to run the npm install as an administrator. Easy peasy.

<h2>Scaffolding an Application</h2>

~~~~

npm install -g angular-cli

ng new &lt;my app name&gt;

cd &lt;my app name&gt;

ng serve

~~~~

These commands will spin up a basic app structure for you to use. This app structure has a lot of goodies included. Testing, linting, hot module loading, and a decent starter app all come with the basic template. CLI abstracts away the webpack setup, so you don't have to figure that out. It even includes a basic demo server for you to serve your application from. The only thing that the angular cli doesn't include is a style library. I'd love to see Angular Material or Bootstrap included with the CLI, but I'll live.

Here's what comes out of the box with a new Angular CLI Project:

<img class="alignnone wp-image-175 size-full" src="/wp-content/uploads/2017/01/ng_new.png" width="405" height="764" />

I was curious about how up to date the basic setup is, so I ran "npm outdated". NPM packages change often. It looks like most of the packages are close to their most recent version, but the CLI used Angular 2.3 instead of Angular 2.4.

<img class="alignnone size-full wp-image-176" src="/wp-content/uploads/2017/01/npm_outdated.png" alt="" />

<h2>Generators</h2>

Boilerplate code sucks and Angular 2 has a bunch of it. There are lots of small files that need be built when you add a new component. Angular CLI has generators to help with that. I tried out a few of the generators. I found the component generator to be particularly useful. It builds out the template, code, and spec files. It also adds the component to its root module. This is a great time saver. The route generator was far less useful, however, as it didn't do anything. It looks like they're going to add it back in later.

<h2>Styles</h2>

The default template doesn't include any style libraries, so I pulled in Angular Material (currently in beta).

<strong>To install:</strong>

~~~~
<pre><code class="lang-bash">npm install --save @angular/material
</code>~~~~</pre>
Then you need to pull it into your app module:

~~~~

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CharacterBuilderComponent } from './character-builder/character-builder.component';
import { EncounterComponent } from './encounter/encounter.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { StatsComponent } from './stats/stats.component';
import { HomeComponent } from './home/home.component';

import { MaterialModule } from '@angular/material';

@NgModule({
declarations: [
AppComponent,
CharacterBuilderComponent,
EncounterComponent,
NavMenuComponent,
StatsComponent,
HomeComponent
],
imports: [
BrowserModule,
FormsModule,
HttpModule,
MaterialModule.forRoot()
],
providers: [],
bootstrap: [AppComponent]
})
export class AppModule { }

~~~~

Finally, add a theme file to your site.css. There are several pre-built themes, but you can make your own if you want.

~~~~

@import '~@angular/material/core/theming/prebuilt/deeppurple-amber.css';

~~~~

After importing the styles I ported all of my demo code over into the angular cli project. This process was surprisingly easy. Unfortunately, the Material styles are not as robust as the Bootstrap styles. I'm sure I made a mistake somewhere, but I wasn't really going for maximum style, so I let it go. I'm looking forward to Material UI being ready for primetime, but I don't think it's quite there yet.

<h2>Final Verdict</h2>

I wouldn't use Angular CLI in production (yet), but I think it's a fantastic tool for playing with and learning Angular 2. It takes the most painful part of setting up an Angular 2 project and makes it a breeze. You can get up and going faster than building an environment from scratch. I'm going to keep an eye on this project and see how it develops. If you build Angular 2 apps, I recommend you do the same.

Here's the final result:

<a href="https://github.com/DustinEwers/typescript-demos/tree/master/ts-demo-node/ninjas-quest">https://github.com/DustinEwers/typescript-demos/tree/master/ts-demo-node/ninjas-quest</a>