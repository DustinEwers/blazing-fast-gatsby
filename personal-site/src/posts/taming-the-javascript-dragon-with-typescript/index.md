---
id: 16
title: Taming the JavaScript Dragon with TypeScript
date: 2015-08-01T12:03:57+00:00
author: Dustin Ewers
layout: post
guid: http://c2f52d66-3a5c-4efd-acbe-190838ea8511
permalink: /taming-the-javascript-dragon-with-typescript/
categories:
  - ASP.NET
  - JavaScript
---
&nbsp;

The year was 1995. “Gangsters Paradise” topped the music charts. Pixar released Toy Story, the first wholly computer generated film. And, in just 10 days, Brendan Eich created a language for adding dynamic content to web pages. From these humble beginnings, JavaScript has become one of the most popular programming languages in the world. Outgrowing its initial purpose by several orders of magnitude. You can now use JavaScript to build nearly anything, from web pages to robots. JavaScript is the Swiss army knife of programming languages and one of the best tech career investments you can make. Not bad for a language someone threw together in a few weeks.

Unfortunately, it’s not all puppy dogs and rainbows. JavaScript is a landmine ridden kludge of a language. It uses a class system that most programmers are unfamiliar with (prototypical class), is loosely typed, encourages the use of global variables, and has lots of weird quirks like the “this” keyword. Despite all this, JavaScript has two things going for it. First, JavaScript runs on every web browser, which means it’s available on every computer. It’s the only scripting language that can run on any browser. Second, smart people have created patterns that expose the <a href="http://amzn.to/1IrAmLB">“good parts” of JavaScript</a> and overcome the bad parts. The current popularity of JavaScript today is made possible by a community of highly skilled developers that have figured out how to make the most of an imperfect language.

Even with smart design patterns, JavaScript’s failures are magnified on larger projects. It’s simply not built for 100+ kloc applications.

Additionally, the lack of static typing means it’s hard to implement the static code analysis that's common in tools for enterprise languages like C# and Java. This means that you also miss out on refactoring tools, which you would want on a large code base. I'm sure there's a contingent of Notepad lovers who think tooling is for sissies, but most of us have better things to do than spend six hours staring at a screen looking for a typo an IDE could of dropped a squiggly line under in two seconds. It's a craft, not a religion.

Dependency management in JavaScript can also be a chore. The lack of a proper module system makes it tough to break apart functionality. Node.js does a great job of getting around this limitation with it's module pattern and NPM, but it should be baked into the language.

Fortunately, we have some options. ECMAScript6 (ES6), the new version of JavaScript, has recently been ratified. This new standard addresses many of the issues with building large JavaScript applications. Unfortunately, most browsers don't support ES6 yet. Why let little things like browser support stop you? There are lots of tools that allow you to use ES6 features today. These tools will take your code and transpile it down into plain JavaScript that can run on any browser. Among these tools, my favorite is TypeScript.

<h3 id="whatstypescript">What’s TypeScript?</h3>

TypeScript is a language developed by Microsoft. The goal of TypeScript is to add features to JavaScript that make it usable on large projects. TypeScript is a superset of JavaScript. This means that valid JavaScript is also valid TypeScript. All you have to do is rename your *.js files to *.ts files and they'll usually work. Also, the compiled output of TypeScript is readable, which makes debugging much easier. If you're used to C# and you hate how loose JavaScript is, Typescript will help fix that. If you're primarily a JavaScript developer, Typescript gives you additional powers without having to learn a totally new language.

TypeScript has two primary features:

<h4 id="optionalstatictyping">Optional Static Typing</h4>

The namesake feature of TypeScript is the addition of an optional static typing system. While this doesn’t sound like much, it gives you access to much better tooling. Modern IDE's, like Visual Studio, rely on static typing to provide robust code analysis and intellisense. JavaScript has some of these features, but lacks the level of code analysis available to C# and VB.

<h4 id="newjavascriptes6es7features">New JavaScript (ES6 / ES7) features</h4>

The TypeScript team is committed to implementing new JavaScript features in TypeScript. While they don't have the level of support dedicated ES6 transpilers like Babel have, TypeScript is close behind. Much like HTML5, ES6 was created with large scale modern web applications in mind. The most important features in ES6 are classes and modules. TypeScript implements both of them.

<h3 id="whataboutthecompetition">What about the competition?</h3>

While TypeScript is a great language, it does have competitors. In fact, there are over <a href="https://github.com/jashkenas/coffeescript/wiki/List-of-languages-that-compile-to-JS">250 different languages that compile to JavaScript</a>. There are two major categories of compile to JavaScript technologies.

<h4 id="replacejavascriptwithanotherlanguage">Replace JavaScript with another language</h4>

This category includes languages like CoffeeScript and Dart. Their general philosophy is that JavaScript is broken and we need a new language to fix it. I don't buy that argument. JavaScript is not broken because it doesn't behave like your pet language. TypeScript has two advantages over these types of languages.

The first is that you don’t need to learn a totally new language to use TypeScript. You’re just adding features to existing JavaScript. If you don't like the way TypeScript does something, just do it the vanilla JavaScript way. You can go as far down the rabbit hole as you like. Your existing JavaScript knowledge remains useful.

Second, languages like this are leaky abstractions. Because you’re compiling down into JavaScript, you’re going to have to debug in JavaScript. You still need to have strong JavaScript knowledge. TypeScript adds to your JavaScript skills instead of replacing them.

<h4 id="implementes6featurestoday">Implement ES6 features today</h4>

This category includes transpilers like Babel and Traceur. These options support more new features than TypeScript, but TypeScript still has static typing. Also, TypeScript is also built into Visual Studio, which makes it easier to use (for ASP.NET developers) than ES6 transpilers. TypeScript is going to give you a better tooling experience than ES6 transpilers.

<h3 id="howtogetstarted">How to get started?</h3>

The easiest way to get started with TypeScript is to use the <a href="http://www.typescriptlang.org/Playground">TypeScript Playground</a>. It's an interactive tool that walks you through the features of TypeScript. You can play with the TypeScript code and see how it compiles into JavaScript. It's a good way to quickly get a feel for the language.

Visual Studio and Visual Studio Code both support TypeScript out of the box. You can also use NPM to install a TypeScript compiler for use in your Node.js or Cordova projects. TypeScript is also supported (via extensions) by many text editors, including Atom and Sublime Text. Regardless of what your preferred tools are, TypeScript is likely a viable option.

<h3 id="additionalresources">Additional Resources:</h3>

<a href="http://www.typescriptlang.org/Handbook">The TypeScript Handbook</a>
<a href="http://kangax.github.io/compat-table/es6/">Kangax ES6 Compatibility Table</a>