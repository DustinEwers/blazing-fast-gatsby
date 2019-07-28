---
id: 27
title: Legacy Systems, Legacy Thoughts
date: 2015-02-26T12:56:46+00:00
author: Dustin Ewers
layout: post
guid: http://4d03e3e7-48a8-480b-b3f3-e40f580355fd
permalink: /legacy-systems-legacy-thoughts/
categories:
  - Soft Skills
  - Software Design
---
There’s nothing like replacing a legacy software system to stoke the fires of self-righteousness. You get to pull some poor users out of the dark ages and save them from a system may have been state of the art last decade, but is junk now. (Ignoring the fact that the old system lasted that long because it did what it what the users wanted it to do.) It’s especially fun when the old system is so laughably bad that it was obsolete the day it was written. Unfortunately, these projects come with a few pitfalls.

The first pitfall is that you can end up building the same legacy system in a new technology. It's hard to transfer old paradigms into new ones and if you're not careful, you can end up repeating old mistakes. I worked at a company that was creating an ASP.NET web app built over an existing database. Many of the tables in this database had no keys or relational data. The original system was built on a mainframe using flat files. When that system was upgraded in the 90’s, the flat files were just copied over. There was no regard to modern relational database structuring. When the ASP.NET version came along, the plan was to just copy over each of the old pages, one by one. Management didn't take modern web and object oriented practices into consideration. Needless to say there was some debate between the developers and management.

The second pitfall can come while gathering requirements. When gathering requirements for the new system, it’s easy (and often correct) to reference the old system. There are two problems using the old system as the primary reference for requirements. First, the system sometimes does things a certain way because of technical constraints. I once worked on replacing a system that had lots of batch processes. Many of those processes were not needed because modern systems were fast enough to process those records on the fly. Second, many times, old systems don’t reflect the business practices of people who use them. There are lots of instances where users have to do something convoluted to get their old system to behave how they need it to. Watch out for these types of scenarios, fixing them is a good way to score brownie points with your customers.

The third pitfall happens when the builders of the new system don’t recognize the advantages of the old system. In the system I mentioned in the first point, the legacy system allowed for rapid keyboard entry. The new system, being a web application, did not optimize for keyboard entry. In the beginning, the developers ignored the users because of the “obvious” superiority of the new way of doing things. Eventually, we realized our error and created a keyboard entry optimized set of web controls. The users were much happier. While it may be fun to mock the old system, you should also pay attention to your users and make sure you aren’t creating a system that’s worse than what they started with. Just because it’s pretty and new doesn’t mean it’s good for the customer.

In summary:
1. Make sure your new system is using new paradigms. Don’t repeat legacy design.
2. Be careful when gathering requirements from the old system. Especially when it comes to implementation details.
3. Don’t make a new system that’s worse than the system you’re replacing.