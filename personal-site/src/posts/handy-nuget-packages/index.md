---
id: 505
title: 10 Handy NuGet Packages for Your Next .NET Project
date: 2018-01-21T10:13:56+00:00
author: Dustin Ewers
layout: post
guid: https://dustinewers.com/?p=505
permalink: /handy-nuget-packages/
thrive_post_fonts:
  - '[]'
thrive_share_count:
  - '{"facebook":2,"twitter":0,"plusone":0,"pinterest":0,"linkedin":15,"total":17,"last_fetch":1516977775,"url":"https://dustinewers.com/handy-nuget-packages/"}'
categories:
  - ASP.NET
  - Software Design
  - Tools
---
One of the great things about modern development is how easy you can leverage code written by others. Package managers like NPM and NuGet make this process even easier. The only problem is that there's so much available code to choose from. For example, there's over 100,000 packages on NuGet. In my travels as a .NET developer, I've found a few packages that made my life a little easier. Here's a list of 10 handy packages you use in your next project:
<h3><a href="http://paulcbetts.github.io/refit/" target="_blank" rel="noopener">Refit</a></h3>
Refit is a library that helps you automate calls to REST APIs. To use it, you first define your APIs as an annotated interface. Then you use Refit to turn that interface into a class. I love this package because it allows you to create incredibly terse API callers.
<h3><a href="https://github.com/domaindrivendev/Swashbuckle" target="_blank" rel="noopener">Swashbuckle</a></h3>
This package should be installed by default on any .NET API project. It automatically adds swagger documentation to your API. In addition to that, Swashbuckle creates a handy web page you can use to document and explore your API. I'm a big fan of this package because it links your docs with your actual code. It becomes even more important in a microservices environment where you have lots of services to keep track of.
<h3><a href="http://www.thepollyproject.org/" target="_blank" rel="noopener">Polly</a></h3>
Polly is a fault handling library that allows you to write more resilient code. To do this, you create policies. These policies define what happens when a particular operation fails. These policies include things like Retry, Circuit Breaker, and Fallback. It's great for operations where there's a chance of failure, like a REST call over a flaky network connection.
<h3><a href="https://morelinq.github.io/" target="_blank" rel="noopener">MoreLINQ</a></h3>
LINQ is my preferred way to deal with enumerable objects. MoreLINQ adds lots of useful operators to traditional LINQ.
<h3><a href="https://github.com/StackExchange/Dapper" target="_blank" rel="noopener">Dapper</a></h3>
Dapper is a Micro OR/M made by the same folks that gave us Stack Overflow. If you hate fiddling with Entity Framework configurations and just want to write some damn SQL, Dapper is for you. It's been around for a while, but I've only recently gotten a chance to use on a project. After trying it, I'm a huge fan of this approach. I've spent way more hours than I'd care to admit trying to shoehorn Entity Framework's API to get the data I want. I've also spent countless hours trying to figure out why my five lines of C# produced 3000+ lines of sketchy looking SQL. Sometimes it's easier to do things yourself.
<h3><a href="https://github.com/tathamoddie/System.IO.Abstractions" target="_blank" rel="noopener">Filesystem Abstractions</a></h3>
Generally, when you want to unit test an operation that interacts with the file system, you would need to write a separate interface and class to abstract away the IO operations. With Filesystem Abstractions, you no longer need to do that. Filesystem Abstractions wraps System.IO in a useful interface. Instead of making your own file system access class, you can inject an IFileSystem and get access to all of the IO methods you know and love. Filesystem Abstractions also includes classes to mock the file system, so testing IO operations becomes really easy.
<h3><a href="https://github.com/moq/moq" target="_blank" rel="noopener">Moq</a></h3>
Moq is a handy library for mocking interfaces in unit tests. You're probably already using this one.
<h3><a href="https://xunit.github.io/" target="_blank" rel="noopener">Xunit</a></h3>
Xunit is a unit testing framework for testing .NET code. It's like MSTest and NUnit, but it has a few interesting features. One of those is the use of theories. A theory allows you to run the same test with several different parameters. It's a handy way to test multiple values without having to write multiple tests.
<h3><a href="https://github.com/MiniProfiler/dotnet" target="_blank" rel="noopener">MiniProfiler</a></h3>
MiniProfiler injects a small unobtrusive profiler into your MVC application. As you complete operations, Miniprofiler will display the time it took to complete each step. Tools like this make it easy to diagnose performance bottlenecks.
<h3><a href="https://joshclose.github.io/CsvHelper/" target="_blank" rel="noopener">CSV Helper</a></h3>
The CSV helper makes it easy to create and read delimited files. If you work in an environment where you have to create or process lots of CSVs, this package is a good one to employ.

&nbsp;