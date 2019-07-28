---
id: 412
title: 'Avoid The Class Hierarchy Jungle: Favor Composition Over Inheritance'
date: 2017-09-12T21:10:09+00:00
author: Dustin Ewers
layout: post
guid: https://dustinewers.com/?p=412
permalink: /avoid-class-hierarchy-jungle-favor-composition-inheritance/
thrive_post_fonts:
  - '[]'
thrive_share_count:
  - '{"facebook":0,"twitter":0,"plusone":0,"pinterest":0,"linkedin":0,"total":0,"last_fetch":1522174976,"url":"https://dustinewers.com/avoid-class-hierarchy-jungle-favor-composition-inheritance/"}'
categories:
  - Software Design
---
<span data-offset-key="9e1p0-0-0">Have you ever worked on an application with a jungle-like class inheritance hierarchy? </span><span class="hardreadability"><span data-offset-key="9e1p0-1-0">Everything in the app inherits from two layers of classes and it's impossible to follow a single line of functionality</span></span><span data-offset-key="9e1p0-2-0">. You get code reuse, but at the cost of incomprehensible spaghetti code. I, for one, find that price too steep. In this post, we're going to learn how to build code that's easy to reuse, easy to test, and most important, easy to read.</span>
<h2>Composition &gt; Inheritance</h2>
<span data-offset-key="5cv84-0-0">We have many design patterns in object oriented programming. One the most useful ones is the composite reuse principle (aka. composition over inheritance). This term sounds a little opaque, but it's not hard to understand. </span><span class="veryhardreadability"><span data-offset-key="5cv84-1-0">It means that you should design your classes as a series of </span></span><span class="adverb"><span data-offset-key="5cv84-2-0">loosely</span></span><span class="veryhardreadability"><span data-offset-key="5cv84-3-0"> coupled components instead of using a multilayered class hierarchy for code reuse</span></span><span data-offset-key="5cv84-4-0">.</span>

Here's an example:
<img class="alignnone size-full wp-image-428" src="/wp-content/uploads/2017/09/Classes.png" alt="" width="781" height="556" />

<span class="adverb"><span data-offset-key="5qdiu-0-0">Practically</span></span><span data-offset-key="5qdiu-1-0"> speaking, this means breaking down inheritance hierarchies into plug-able services. Then you can inject those services using your favorite dependency injection framework. </span>
<h2>Why Bother?</h2>
While using composition may seem more complicated, there are several advantages.
<ol>
 	<li>It's far easier to reason about the code. If you divide up your functionality into small components, each component is simple. You're dividing up the complexity of the application into manageable chunks. When you're using complex inheritance, it's difficult to figure out what block of code is executing. This is especially true once you start selectively overriding methods.</li>
 	<li>It's much easier to reuse a single component than to glue a class onto a hierarchy.</li>
 	<li>It's easy to unit test loosely coupled components. Building the appropriate mocks to test a complex class is painful. Mocking a few interfaces is much easier.</li>
</ol>
<h2>Spotting Refactoring Opportunities</h2>
<div class="" data-block="true" data-editor="1aja3" data-offset-key="28tk-0-0">
<div class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr" data-offset-key="28tk-0-0"><span data-offset-key="28tk-0-0">There are a few potential anti patterns to keep an eye out for. </span></div>
</div>
<div class="" data-block="true" data-editor="1aja3" data-offset-key="7m4pm-0-0">
<div class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr" data-offset-key="7m4pm-0-0"><span data-offset-key="7m4pm-0-0"> </span></div>
</div>
<div class="" data-block="true" data-editor="1aja3" data-offset-key="3ttdk-0-0">
<div class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr" data-offset-key="3ttdk-0-0"><span data-offset-key="3ttdk-0-0">"Base&lt;thing&gt;" classes. </span><span class="hardreadability"><span data-offset-key="3ttdk-1-0">Especially base controllers (MVC), base pages (on Web Forms), and other base classes for classes that process data</span></span><span data-offset-key="3ttdk-2-0">. Base classes for data storage objects are usually OK. ( ex: An Administrator that inherits from a Person class.) Using inheritance for processes is a bad idea. </span></div>
</div>
<div class="" data-block="true" data-editor="1aja3" data-offset-key="42b04-0-0">
<div class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr" data-offset-key="42b04-0-0"><span data-offset-key="42b04-0-0"> </span></div>
</div>
<div class="" data-block="true" data-editor="1aja3" data-offset-key="3vs0e-0-0">
<div class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr" data-offset-key="3vs0e-0-0"><span data-offset-key="3vs0e-0-0">More than two layers of inheritance. It's hard to imagine anything that needs more than two layers of inheritance.</span></div>
</div>
<div class="" data-block="true" data-editor="1aja3" data-offset-key="nc3r-0-0">
<div class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr" data-offset-key="nc3r-0-0"><span data-offset-key="nc3r-0-0"> </span></div>
</div>
<div class="" data-block="true" data-editor="1aja3" data-offset-key="splh-0-0">
<div class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr" data-offset-key="splh-0-0"><span data-offset-key="splh-0-0">Ginormous "God" classes that span 1000's of lines. </span><span class="veryhardreadability"><span data-offset-key="splh-1-0">While not </span></span><span class="adverb"><span data-offset-key="splh-2-0">strictly</span></span><span class="veryhardreadability"><span data-offset-key="splh-3-0"> related to using composition over inheritance, this goes against the idea of building a suite of simple components</span></span><span data-offset-key="splh-4-0">. Large classes are difficult to read and to test. Flattening a class hierarchy into a "God" class is not an improvement. </span></div>
</div>
<div class="" data-block="true" data-editor="1aja3" data-offset-key="c9m6a-0-0">
<div class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr" data-offset-key="c9m6a-0-0"><span data-offset-key="c9m6a-0-0"> </span></div>
</div>
<div class="" data-block="true" data-editor="1aja3" data-offset-key="1r7no-0-0">
<div class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr" data-offset-key="1r7no-0-0"><span data-offset-key="1r7no-0-0">Base classes with only one class that inherits from them. The base class here is superfluous. Feel free to get rid of it. </span></div>
</div>
&nbsp;
<h2>Conclusion</h2>
If you're using class hierarchy for code reuse, ditch that approach and favor composition instead. Your code base will thank you for it.
<h3>Further Reading</h3>
<a href="https://en.wikipedia.org/wiki/Composition_over_inheritance" target="_blank" rel="noopener">https://en.wikipedia.org/wiki/Composition_over_inheritance</a>

<a href="https://en.wikipedia.org/wiki/SOLID_(object-oriented_design)" target="_blank" rel="noopener">https://en.wikipedia.org/wiki/SOLID_(object-oriented_design)</a>

&nbsp;