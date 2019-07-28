---
id: 32
title: "OR/M Pain: Maybe Stored Procedures Aren't So Bad"
date: 2015-01-24T21:37:03+00:00
author: Dustin Ewers
layout: post
guid: http://0c0084ac-3c64-4347-b188-64a67e977b02
permalink: /orm-pain-maybe-stored-procedures-arent-so-bad/
thrive_post_fonts:
  - '[]'
categories:
  - ASP.NET
---
When I first started using OR/M, I looked forward to not writing boilerplate SQL code. As a lazy developer, I prefer to automate boilerplate code generation. After using OR/M for couple of years, I am beginning to miss stored procedures. OR/Ms like Entity Framework reduce the need for cookie cutter code, but they have some major flaws.

The first flaw is that OR/Ms are a leaky abstraction. The goal of any abstraction is to hide the internals of the thing you are trying to abstract. OR/Ms fail at this. Entity Framework, the OR/M I use the most, falls down on complex queries. For example, if you want to join in a related entity, you can use the <a href="https://msdn.microsoft.com/en-us/data/jj574232#eager">Include()</a> statement. The problem with Include() is that it generates horrendous queries that have terrible performance. You can't do more than three or four includes in a single query. You end up having to either do a bunch of small queries or build a stored procedure. This defeats the purpose of OR/M.

The second flaw is that configuring complex relationships can be painful. I've used nHibernate (Fluent API) and Entity Framework (Code First,). Configuration in both OR/Ms is painful. I have spent hours trying to configure a particular database relationship. I've done small model changes generate migration scripts that left me scratching my head. One major advantage of Entity Framework is that the documentation is excellent. MSDN does a good job of highlighting common configurations, and there's lots of information on the web.

The final flaw of OR/M is that you lose the ability to use a lot of features of the database. For example, until recently, you couldn't create a unique key in Entity Framework. Entity Framework still doesn't support database triggers. You can live without these features, but it does limit what you can do with OR/M.

This leads us to the obvious question:

<strong>Are OR/Ms a waste of time?</strong>

The answer, of course, is "umm... maybe".

If you have a project with a simple data model or low performance requirements, OR/Ms will save you time. If your project is more complex, then you should consider skipping the OR/M. There's nothing wrong with using stored procedures. Sometimes the old ways are the best ways.

More on OR/M Pain:
<a href="https://bendyworks.com/actually-using-the-database/">Bendyworks: Actually Using the Database</a>

<a href="http://seldo.com/weblog/2011/06/15/orm_is_an_antipattern">Seldo.com ORM is an anti-pattern</a>