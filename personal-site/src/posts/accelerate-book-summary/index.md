---
title: 'The Case for DevOps: A Summary of Accelerate'
date: 2019-02-22T08:00:00+00:00
author: Dustin Ewers
---
During my travels as a developer, I find myself having the following
conversations far too often. Have you seen any of these?

**Timid Developer**: "I’d like to do unit tests on my project, but my boss won’t let
me. He said we don’t have enough time to do them."

**Me**: "You shouldn’t be asking your boss to do unit tests, just do them."

*or*

**Beleaguered Developer**: "I’d like to adopt modern development practices at my
organization, but we’re not a software company, so we can’t adopt the latest
practices."

**Me**: "Every company is a software company, especially the insurance company
you’re at now."

*or*

**Obstinate Developer**: "Why should we adopt \<insert modern development
practice\>? Why can’t we just do it the old way?"

**Me**: "\<facepalm\>"

I wish there were a book that I could throw at people that would use science to
show the value of modern development practices. It turns out, this book exists,
and it’s called [Accelerate: The Science of Lean Software and DevOps: Building
and Scaling High Performing Technology Organizations](https://amzn.to/2NfHhib).

The authors, Jez Humble and Gene Kim, are behind other great DevOps books like
[The Phoenix Project](https://amzn.to/2Ek35Xj) and the [DevOps
Handbook](https://amzn.to/2GPVWzy). Their previous books focused on how to do
DevOps, but they wondered how much these practices helped organizations.

To do this, they turned to organizational scientist Nicole Forsgren, Ph.D. She
applied academic research methods to determine which development practices make
things better. Accelerate comes from their research from 2014 to 2017. Between
the three of them, they make a strong case for modern DevOps practices.

## Methodology

The results from this book come from studying over 2,000 organizations over four
years. A whole section is devoted to the various research methods they used and
why they work. For our purposes, I want to focus on the metrics they used to
evaluate performance.

Measuring software delivery is difficult. Some measures of delivery, like lines
of code, have obvious problems. Using lines of code as your engineering
performance metric is like using airplane weight. More is not necessarily
better.

Other measures have less apparent problems. In many organizations, you have two
different areas in IT, software development and operations. Managers often
measure the departments in different ways. They evaluate developers by the
features they deliver. Operations folks are assessed by how stable they make the
environment. These different goals create a perverse incentive structure where
software developers throw difficult to deploy code over a wall and ops slows
them down with a maze-like change management process.

To effectively measure performance, you need metrics for the whole process, not
just specific teams. Use global metrics to get everyone on the same page. In
Accelerate, they settled on four primary metrics.

**Deployment frequency**<br>
Small batches delivered often are ideal.

**Delivery Lead Time**<br>
Overall lead time can be difficult to measure due to the "fuzzy front end"
(ideation, requirements gathering, etc...). Delivery lead time measures the time
from commit to deploy.

**Mean recovery Time**<br>
Bad things happen. How long does it take to fix them?

**Change Failure Rate**<br>
How many changes fail? Smaller changes generally mean fewer of them fail.

## Practices

When evaluating the performance of an organization, people often use maturity
models. Each aspect of software delivery is assessed based on a target. Once you
hit that target, your organization is "mature" in that category. Unfortunately,
that thinking doesn’t work. We build software and the landscape we’re in changes
constantly. There’s no such thing as "maturity" when tools shift every 5-10
years.

Instead of looking at maturity, evaluate capabilities. In Accelerate, they
identified several organizational capabilities that lead to increased business
performance.

### Capabilities for Improvement

* Version Control
* Trunk Based Development
* Test Automation
* Shifting Left on Security
* Continuous Delivery
* Loosely Coupled Architectures
* Empowered Teams
* Seeking Customer Feedback
* Working in small batches
* Team Experimentation
* Lightweight Change Approval Processes
* Monitoring / Proactive Notification
* WIP Limits
* Visualizing Work
* [Westrum Organizational
Model](https://continuousdelivery.com/implementing/culture/)
* Supporting Learning

Your organization is probably using many of these practices today, but most
organizations have not mastered them all. You can continue to improve in all these
realms. The research in Accelerate showed that the top organizations were
continuing to grow. They didn’t hit "maturity" and stop. They continually
develop to get even better at software delivery.

## Stats

Accelerate is chock full of statistics, but here are a few of the most impactful
ones. The company divided companies into three categories (high, medium, low)
based on their performance. They then measured some of the differences between
the groups.

**High performers vs. Low Performers: Software Delivery**<br>
46 times as many code deployments<br>
440 times as fast commit to deployment time<br>
170 times faster mean time to recover<br>
5 times lower change failure rate

**High performers vs. Low Performers: Org Performance**<br>
2x as likely to exceed organizational objectives: profitability, productivity,
market share<br>
2x as likely to exceed noncommercial goals like customer satisfaction<br>
50% higher growth over three years<br>
Employees are 2.2 more likely to recommend their organization as a great place
to work

## Surprises

While most of this book confirmed things I already knew about, there were a few
surprises. The biggest surprise for me was that organizations that were in the
middle frequently had high error rates than either lower performing or high
performing organizations. They refer to it in the book as the "j-curve". It
makes sense that there are some growing pains associated with adopting new
practices, and it indicates promoters of dev ops practices need to communicate
that gap when trying to move their organizations forward. Wary organizations
might backslide if they perceive the changes are having an adverse effect.

The reality is that speed and quality positively correlate. Software development
is about tradeoffs, but this isn’t one you have to make. You can have a
screaming fast release process and have a lower change failure rate. A big part
of the magic here is working in small batches. Small batches are easier to
understand, which makes it easier to develop and test.

Another big surprise was the emphasis on trunk-based development over other
branching workflows. More involved styles like git-flow are suitable for large
open source projects, but for most folks, it pays to keep it simple.

We all know that automated testing is essential, but it turns out that those
automated tests have a far greater value when they are written and maintained by
the developers. This doesn’t mean that we need to get rid of QA folks. They
perform valuable and important work. What doesn’t work is throwing your code
over the wall to a testing department that may or may not have automated
regression testing. You need to build your tests on a cross-functional team
where the developers and QA folks can work together to create automated tests.
These tests need to be useable by everyone, including by developers on their
machines.

There’s this idea in software development that to use the latest processes, you
need to have access to the latest tools. People who aren’t using the latest and
greatest technologies need not apply. The authors of Accelerate didn’t just
focus on cutting edge organizations; they looked at all sorts of organizations
using all sorts of processesThis including companies running on mainframes and
companies still using waterfall-style processes. They found that all companies
benefit from DevOps practices, even ones running on older technologies. While
using newer technologies can help, there are no excuses for not moving forward.

## Who Should Read This Book?

This book is excellent for anyone who needs a persuasive argument for adopting
DevOps practicesThis including managers, consultants, and coaches. Additionally,
developers and other delivery folks may find this interesting. If you're looking
for more of a how-to than a why-to, then skip this book and get yourself a copy
of the Dev Ops Handbook.

## A Case for Modern Delivery Practices
As we continue to evolve the way we build software, it’s important to understand
why these changes matter. [Accelerate](https://amzn.to/2NfHhib) shows us,
scientifically, why modern practices matter and how they can create
better-performing organizations with happier employees.
