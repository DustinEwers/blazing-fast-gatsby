---
id: 28
title: 'How I Build Tech Talks: Part 1'
date: 2015-02-25T22:29:22+00:00
author: Dustin Ewers
layout: post
guid: http://02206ba9-e7f1-46f6-8142-2115de2a5ede
permalink: /how-i-build-tech-talks-part-1/
thrive_post_fonts:
  - '[]'
categories:
  - Soft Skills
---
<img src="https://dustinewers.com/content/images/2015/02/coffeecupsontable.jpeg" alt="How I Build Tech Talks: Part 1" />

Last year, I created my first tech talk and delivered it to several venues. I enjoyed the experience, so I decided to produce a new talk this year. This time though, I want to document the process of building the talk while I'm working on it. I think it's important to see things unfold while they happen. Often, you see a polished talk and you don't see the work that has gone into it. This isn’t meant to be a list of recommendations from on high, but a log of how I like to build talks. Feel free to use what works and forget what doesn’t.

<h3 id="qualifications">Qualifications</h3>

Last year, I gave two versions of my D3.js talk in five different venues. I've also delivered several talks at work. Additionally, I did speech and debate in college for two years. While I'm no Scott Hanselman, I know my way around a lectern.

<h3 id="step1topicselection">Step 1: Topic selection</h3>

Last year, I picked a topic I didn't know much about (D3.js). I picked that topic because I knew building a talk would force me to learn about it. This year, I want to deepen my understanding of a topic I have experience with. I work with ASP.NET MVC in my current job. Additionally, I enjoy building UI components. When I started using ASP.NET MVC a few years ago, I had a hard time finding information. The books on MVC cover the basics well, but the reference material is incomplete. (<a href="https://msdn.microsoft.com/en-us/library/ee703535%28v=vs.118%29.aspx">Example</a>) Doing a talk on building UI in ASP.NET MVC would deepen my own knowledge while helping others.

Building UI in ASP.NET MVC is a broad topic, so I drafted a list of subtopics to help me narrow my scope down.

Here's my, clustered into similar topics:

HTML Helpers
Editor and Display Templates
Custom Validation

Grunt / JS automation
LESS and SASS
Bundling and Minification

Web Performance

UI Testing (like Selenium)
JavaScript Testing (like QUnit)

That's way too many things for an hour long talk. Each of the above clusters could be it's own talk. To narrow the scope, I'm going to remove anything that doesn't have to do with building UI components. This leaves me with the following list:

HTML Helpers
Editor and Display Templates
Custom Validation

<h3 id="step2generateatheme">Step 2: Generate a Theme</h3>

Now that I have a topic list, I want to create a theme for the talk. A theme gives structure to the talk and provides a narrative for people to latch on to. I believe that in software development, you should bake good defaults into easy to use components. This lowers the cost of development and increases the quality. Good components allow you to create a great user experience without having to drop a ton of code on each page. My theme for this talk is going to be how to build better software in less time.

Another thing I’m trying to do with this talk is build in more stories. Stories are one of the primary ways people communicate. Studies show that stories engage emotions, which provides a stronger connection than raw data.

<h3 id="step3generateanabstract">Step 3: Generate an Abstract</h3>

The next step is generating an abstract. An abstract is a summary of you talk that you can submit to conferences and user groups. It’s important to have a strong abstract because that’s how your talk is picked by conference organizers.

<h4 id="keystoagoodabstract">Keys to a Good Abstract</h4>

<ol>
    <li>A catchy title.</li>
    <li>A clear benefit to the audience.</li>
    <li>A summary of the topic.</li>
</ol>

Here's my abstract:

<strong>ASP.NET MVC UI Recipes: Build Better Interfaces With Less Code</strong>

Who doesn’t want to get more done in less time?

ASP.NET MVC gives us an excellent toolset for building web applications. Unfortunately, due to it's rapid evolution, good documentation is hard to find. However, using some simple techniques, you can build user interface components that can speed up development while maintaining a clear separation of concerns. In this presentation, we’ll learn how to build custom controls, templates, and custom validation. Save time while creating cleaner code.

<h3 id="step4makeanoutline">Step 4: Make An Outline</h3>

The next step is building an outline. I don’t memorize my speeches, so the outline is what I study when I prepare. I use my outline to put my topics and demos into a logical structure. I tend to capture a lot of detail in my outlines and then make a simpler outline for reference. I haven't finished my outline yet, so I'm not going to share it.

<h3 id="conclusion">Conclusion</h3>

This is the first in a series of blog posts documenting my process for building tech talks. As I mentioned before, feel free to use what works and forget what doesn’t.