---
id: 344
title: 'R for .NET Developers: Why Bother?'
date: 2017-06-15T23:19:03+00:00
author: Dustin Ewers
layout: post
guid: https://dustinewers.com/?p=344
permalink: /r-for-net-developers-why-bother/
thrive_post_fonts:
  - '[]'
categories:
  - Data Analysis
  - R
---
<div class="" data-block="true" data-editor="d39tk" data-offset-key="b4vmq-0-0">
<div class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr" data-offset-key="b4vmq-0-0"><span data-offset-key="b4vmq-0-0">I spend most of my time working with Microsoft web technologies, or as I like to refer to it, ".NET and Friends". While I'm a big fan of the web, I'm always looking into new areas of development. One of those areas is data analysis. We are awash in data and learning how to process it is a valuable skill. Until recently, there wasn't much in the Microsoft ecosystem for doing this kind of work. This isn't a bad thing, but it's nice to be able to use familiar tools to learn new things.</span></div>
</div>

<div class="" data-block="true" data-editor="d39tk" data-offset-key="a44n-0-0">
<div class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr" data-offset-key="a44n-0-0"><span data-offset-key="a44n-0-0"> </span></div>
</div>

<div class="" data-block="true" data-editor="d39tk" data-offset-key="96ufp-0-0">
<div class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr" data-offset-key="96ufp-0-0"><span class="adverb"><span data-offset-key="96ufp-0-0">Fortunately</span></span><span data-offset-key="96ufp-1-0">, Microsoft has made some serious investments in the data analysis space. </span><span class="hardreadability"><span data-offset-key="96ufp-2-0">You aren't going to be using C#, but Visual Studio now supports R. R is a language made "by statisticians for statisticians"</span></span><span data-offset-key="96ufp-3-0">. It's one of the premier data science technologies and a great way to learn statistics. Microsoft also has R support in SQL Server.</span></div>
</div>

<div class="" data-block="true" data-editor="d39tk" data-offset-key="9n2f2-0-0">
<div class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr" data-offset-key="9n2f2-0-0"><span data-offset-key="9n2f2-0-0"> </span></div>
</div>

<div class="" data-block="true" data-editor="d39tk" data-offset-key="b2itm-0-0">
<div class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr" data-offset-key="b2itm-0-0"><span data-offset-key="b2itm-0-0">In this post, I'm going to cover a few of the reasons R is worth a look. Even if you are not planning on donning the data scientist hat anytime soon.</span></div>
</div>

<h3>The Power of Polyglot</h3>

<div class="" data-block="true" data-editor="d39tk" data-offset-key="aba2u-0-0">
<div class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr" data-offset-key="aba2u-0-0"><span class="hardreadability"><span data-offset-key="aba2u-0-0">This is sometimes forgotten in the .NET world, but different languages are good for different things</span></span><span data-offset-key="aba2u-1-0">. If you build web applications, you already know this. </span><span class="hardreadability"><span data-offset-key="aba2u-2-0">For example, if you want to build a modern web application, you need at least three different languages (JavaScript, CSS, and HTML)</span></span><span data-offset-key="aba2u-3-0">. More likely you're looking at six or more (JavaScript, Typescript, SASS, CSS, C#, HTML, XML, and Markdown). </span></div>
</div>

<div class="" data-block="true" data-editor="d39tk" data-offset-key="85hpi-0-0">
<div class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr" data-offset-key="85hpi-0-0"><span data-offset-key="85hpi-0-0"> </span></div>
</div>

<div class="" data-block="true" data-editor="d39tk" data-offset-key="biff2-0-0">
<div class="public-DraftStyleDefault-block public-DraftStyleDefault-ltr" data-offset-key="biff2-0-0"><span data-offset-key="biff2-0-0">Every language does certain things better. You should use the language that does the job best, rather than trying to shoe horn your language of choice. In the data analysis space, this is no different. The two most popular languages for data analysis are R and Python. While Python is a viable option (and supported in Visual Studio as well), R is purpose build for data analysis. You can do data analysis in either, but R does it with less code. </span></div>
</div>

<img class="alignnone size-full wp-image-354" src="/wp-content/uploads/2017/06/bane-dark-knight-python-merely-adopted-statistics-r-was-born-in-it-molded-by-it.jpg" alt="" />

In addition to the productivity benefits of using the right tool for the right job, it's good for your personal development to learn new programming languages. <a href="http://amzn.to/2rmv7Is" target="_blank" rel="noopener">The Pragmatic Programmer</a> recommends learning a new one each year. Learning new languages improves your thinking and makes you better at your primary development stack.

<h3>Data Is The New Oil</h3>

<blockquote>"There's gold in them servers."</blockquote>

Data is money. Large companies are using the data you generate as a goldmine. Uses range from using data to optimize advertising to using it to make even more addictive products. In addition to user generated data, we also have the mountains of data generated by IOT devices. Sometimes we can use it for small gains, like using a Nest Thermostat to optimize your heating and cooling, but sensor networks can have a much greater impact.  We have access to more data than in all of human history. If you can figure out how to mine insights from that data, you will be rewarded handsomely.

<h3>If You Care About Truth, Data is For You</h3>

<blockquote>"There are three kinds of lies: lies, damned lies, and statistics."</blockquote>

<span data-offset-key="ae6mf-0-0">With plenty of data comes plenty of people using that data to manipulate you. Every political cause has a stable of statistics behind it. </span><span class="hardreadability"><span data-offset-key="ae6mf-1-0">Even if they fall apart under scrutiny, people believe them because numbers sound fancy</span></span><span data-offset-key="ae6mf-2-0">. People trying to sell you something use numbers to appear more credible. </span><span class="hardreadability"><span data-offset-key="ae6mf-3-0">If you want to thrive in our data soaked economy, it's essential to become data literate, so you can spot these manipulations</span></span><span data-offset-key="ae6mf-4-0">.</span>

<h3>R is for Learners</h3>

R has several features that make it a great tool for learning about data analysis. First, it's really easy to learn. R is a simple language that you can pick up in a few hours. Additionally, R has an easy to use built in help system. If you need info on any command or method, it's a few keystrokes away. R also has a lot of built in data sets to play with statistical techniques. This includes lots of popular demo statistical data sets that are well known in the statistics community.

<h3>Playing Nice With Others</h3>

As data analysis becomes more prevalent in the enterprise, you're probably going to wind up working with data analysts and data scientists. Learning about some of the tools and techniques they use gives you common ground. It's the same reason software developers should develop business and industry knowledge. Being able to connect with your team members on their terms makes you more than a run of the mill software developer.

<h2>Conclusion</h2>

If you're an enterprise developer, R is worth a look. You can use R to learn valuable new skills using familiar tools. With a little effort, you'll be able to slice and dice data for fun and profit.

To learn more, check out my post on <a href="https://dustinewers.com/a-few-of-my-favorite-r-resources/" target="_blank" rel="noopener">R Resources</a>