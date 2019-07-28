---
id: 33
title: Building Antifragile Software
date: 2015-01-10T22:29:15+00:00
author: Dustin Ewers
layout: post
guid: http://6509bbdf-e411-4256-b227-fd74e09dfb43
permalink: /building-antifragile-software/
categories:
  - Software Design
---
Software developers spend most of their time taming chaos into orderly systems. Along the way, there's often lots of random issues that can throw you off track. Heavy processes like waterfall development sought to eliminate as much risk as possible. Unfortunately, this risk avoidance often lead to lots of pain at the end of a project. After several decades of failure, we now use agile practices that expect chaos. Dealing with chaos and risk are important for anyone who builds software for a living.

I recently read <a href="http://www.amazon.com/exec/obidos/ASIN/B0083DJWGO/thweofdujew-20">Antifragile</a> by Nassim Nicholas Taleb. <em>Antifragile</em> is one of those books that changes how you see the world. Once you understand the concept of antifragility, it becomes a useful analytic tool. As a software developer, I started thinking about how to build less fragile software.

<h4 id="summary">Summary</h4>

<em>Antifragile</em> is about how some things become better when exposed to volatility. For example, when you lift a heavy weight, your body makes itself stronger. It becomes stronger in response to stress. Additionally, if you never exercise, your body becomes weak. The human body needs some stress to be healthy. The author talks about three different states.

<strong>Fragile</strong>

Fragile things suffer from volatility. Think of a teacup. If you drop it, it will break. Fragile things tend to be rigid and over-optimized. Think of a complex code base with lots of dependencies. One small change can cause the whole system to come crashing down. Systems that are fragile tend to suffer from a small number of devastating events.

<strong>Resilient</strong>

Resilient things are indifferent to volatility. Think of a rock. If you drop it, nothing happens. Resiliency can come from redundancy or structural integrity. Think of a well structured code base with lots of automated tests. Failures are generally caught and corrected for before they can cause a problem. Many of the principles of software development revolve around building resilient software programs.

<strong>Antifragile</strong>

Some systems go a step beyond resiliency and become antifragile. Antifragile things actually gain with disorder (up to a point). Changes are generally frequent and have a small impact. Free market economies are a good example of antifragile systems. Individual businesses are fragile, but the system is strong because the best businesses survive. Evolution is another example of an antifragile system. Individuals of a species can die, but the best adapted animals get to reproduce. This causes the species as a whole to get stronger with volatility.

<strong>Other summaries of <em>Antifragile</em></strong>

<a href="http://www.artofmanliness.com/2013/12/03/beyond-sissy-resilience-on-becoming-antifragile/">Art of Manliness - Beyond “Sissy” Resilience: On Becoming Antifragile</a>

<a href="http://en.wikipedia.org/wiki/Antifragile">Wikipedia</a>

<h4 id="sohowdoesthishelpusmakebettersoftware">So how does this help us make better software?</h4>

There are lots of software development practices that captialize on chaos. The key is to use frequent failures as learning expiriences. Here are some examples:

<strong>Agile Software Development</strong>

Agile processes revolve around building software in tight iterations with frequent customer feedback. Frequent exposure to criticism reduces the impact of criticism. It also allows you to gather more accurate information about what the users want. Additionally, your process continually improves, which means your team becomes more effective over time. This is in contrast to waterfall processes that front-load understanding and are fragile. One mistake in understanding can have a large and painful impact in waterfall projects.

<strong>Frequent releases / Continuous Integration</strong>

If you do hard things frequently, like releasing software, they become easier. A frequent release cycle breeds processes that make deployment easy and reversible. Continuous integration allows companies like Facebook to push several updates a day. This gives them a huge advantage over slower companies.

<strong>Chaos Monkey</strong>

The chaos monkey is a process build by engineers at Netflix. It is a program that randomly breaks processes. The introduced chaos allows developers handle problems in a controlled way. It also encourages resilient design in the first place. Contrast this to companies that avoid chaos. Random failures occur at inconvenient times and the fix is likely to consist of bubblegum and duct tape.

More Info: <a href="http://techblog.netflix.com/2012/07/chaos-monkey-released-into-wild.html">http://techblog.netflix.com/2012/07/chaos-monkey-released-into-wild.html</a>

<strong>Minimum Viable Product</strong>

A minimum viable product is a small product used to test the market. Because the product is cheap to build, you can run many iterations. Each iteration allows you to learn more about your potential customers. These experiments allow companies to find profitable products quickly. This process allows smaller companies to exploit market situations that bigger companies cannot.

<h4 id="conclusion">Conclusion</h4>

The world of software development is chaotic. We should not fear the chaos, but instead build systems that capitalize on it. Modern software development practices expect change and use it to create better software. Using these processes, we can build software that isn't just resilient, but is also antifragile.

If you're interested in learning more, check out <a href="http://www.amazon.com/exec/obidos/ASIN/B0083DJWGO/thweofdujew-20">Antifragile</a>