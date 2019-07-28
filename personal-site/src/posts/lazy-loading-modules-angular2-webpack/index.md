---
id: 127
title: Lazy Loading Modules With Angular 2 And Webpack
date: 2016-11-21T20:20:12+00:00
author: Dustin Ewers
layout: post
guid: http://dustinewers.com/?p=127
permalink: /lazy-loading-modules-angular2-webpack/
categories:
  - Angular
  - JavaScript
---
I'm sure this is obvious to some people, but this issue threw me for a loop.

When building applications in Angular 2, it's best practice to divide up your application into feature modules. This keeps your code simple and easy to work with. You can lazy load these child modules to improve initial load times and keep people from downloading code for areas they don't have access to.

The Angular 2 website has excellent tutorials on how to set this up, but if you're using Webpack, those instructions (<a href="https://angular.io/docs/ts/latest/guide/ngmodule.html#!#lazy-load">link</a>) don't quite work.

Here's the code from the Angular 2 website.

<pre class="prettyprint  lang-ts ng-scope prettyprinted"><code><span class="kwd">export</span> <span class="kwd">const</span><span class="pln"> routes</span><span class="pun">:</span> <span class="typ">Routes</span> <span class="pun">=</span> <span class="pun">[</span>
  <span class="pun">{</span><span class="pln"> path</span><span class="pun">:</span> <span class="str">''</span><span class="pun">,</span><span class="pln"> redirectTo</span><span class="pun">:</span> <span class="str">'contact'</span><span class="pun">,</span><span class="pln"> pathMatch</span><span class="pun">:</span> <span class="str">'full'</span><span class="pun">},</span>
  <span class="pun">{</span><span class="pln"> path</span><span class="pun">:</span> <span class="str">'crisis'</span><span class="pun">,</span><span class="pln"> loadChildren</span><span class="pun">:</span> <span class="str">'app/crisis/crisis.module#CrisisModule'</span> <span class="pun">},</span>
  <span class="pun">{</span><span class="pln"> path</span><span class="pun">:</span> <span class="str">'heroes'</span><span class="pun">,</span><span class="pln"> loadChildren</span><span class="pun">:</span> <span class="str">'app/hero/hero.module#HeroModule'</span> <span class="pun">}</span>
<span class="pun">];</span></code></pre>

You could assume that this code isn't specific to using system.js as your module loader, but you'd be wrong. Webpack, by default, chokes on these lazy loaded modules. I spent more time than I'm willing to admit trying to figure out the arcane errors before I realized that the Webpack was the problem. Fortunately, this problem is easy to fix.

Like everything else in Webpack, there's a loader for that. In this case, you want the Angular 2 Router Loader (more info <a href="https://www.npmjs.com/package/angular2-router-loader" target="_blank" data-cke-saved-href="https://www.npmjs.com/package/angular2-router-loader">here</a>). Be attentive to the instructions, because the module strings work different than they do with system.js. For example, the Webpack loader supports relative paths. (The Angular 2 docs say otherwise) Once you setup the loader, lazy loading in Webpack works like a champ.