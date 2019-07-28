---
id: 26
title: How the Monty Hall Problem Can Make You a Better Software Developer
date: 2015-03-04T00:51:11+00:00
author: Dustin Ewers
layout: post
guid: http://07679358-f4fe-4cb6-a7d4-aea9c2b1f557
permalink: /how-the-monty-hall-problem-can-make-you-a-better-software-developer/
thrive_post_fonts:
  - '[]'
categories:
  - Soft Skills
---
<p>Being called the smartest person in the world makes you huge target for trolls. Marilyn vos Savant was listed in the Guinness Book of World Records under "Highest IQ". This propelled her into the national spotlight.  She then proved that IQ doesn't mean everything by becoming columnist for Parade. The listing also made her a popular target of criticism, especially by academics. There are whole websites devoted to proving her wrong. This is not one of them. This is a story about how she was right and what we, as software developers, can learn from her experience.</p>

<h3 id="howtoplayletsmakeadeal">How to Play "Let's Make a Deal"</h3>

<p>The Monty Hall problem is a famous math problem that's based on an old game show called "Let's Make a Deal". The game begins with three doors. One of the doors has a fabulous prize. You don't know what's behind any of the doors and each door has an equal chance of containing the prize. You are then asked to select a door. After selecting your door, the host of the show reveals one of the other losing doors. You are then given the option to switch.</p>

<p>The question is:  </p>

<blockquote>
  <p>Would switching doors give you a better chance of winning the prize?</p>
</blockquote>

<p>The intuitive answer is that switching doors provides no benefit. Remove one door and your 1 in 3 chance becomes a 1 in 2 chance of winning.  Since each door has an equal chance of being correct, the remaining door isn't any better than the one you picked. This is the answer most people come up with when they first hear this problem.</p>

<p>This logic, while intuitive, is flat wrong.</p>

<p>The correct answer is that switching gives you a 2/3 chance of winning, as opposed to your 1/3 chance you have sticking with your door. The key to this problem is that revealing one of the incorrect doors doesn't change the initial probability. You already know one of the doors is going to be wrong. What is important is that the host is basically giving you the option to select two doors instead of one.</p>

<p>Here's another way to think about it. Switching and losing means that your initial selection was the right one. Your probability of winning with your initial selection is 1/3. Thus, the probability of you losing when you switch is 1/3, which means your probability of winning is 2/3.</p>

<p>If you still don't believe me, the Khan Academy explains this problem well: <br />
<a href="https://www.khanacademy.org/math/precalculus/prob">https://www.khanacademy.org/math/precalculus/prob</a><em>comb/dependent</em>events_precalc/v/monty-hall-problem</p>

<h3 id="thetimethesmartestpersonintheworldgotflamedbyeveryone">The Time the Smartest Person in the World Got Flamed by Everyone</h3>

<p>Marylin vos Savant answered this same question in her column in 1990. Even though she was correct, the public sent her a truckload of hate mail. Many academics also piled on the criticism. </p>

<p>Here's a sample of the feedback she received (<a href="http://marilynvossavant.com/game-show-problem/">Source</a>):</p>

<blockquote>
  <p><em>Since you seem to enjoy coming straight to the point, I’ll do the same. You blew it! Let me explain. If one door is shown to be a loser, that information changes the probability of either remaining choice, neither of which has any reason to be more likely, to 1/2. As a professional mathematician, I’m very concerned with the general public’s lack of mathematical skills. Please help by confessing your error and in the future being more careful.</em></p>
</blockquote>

<p><strong>Robert Sachs, Ph.D.
George Mason University</strong></p>

<blockquote>
  <p><em>May I suggest that you obtain and refer to a standard textbook on probability before you try to answer a question of this type again?</em></p>
</blockquote>

<p><strong>Charles Reid, Ph.D.
University of Florida</strong></p>

<p>And my personal favorite:</p>

<blockquote>
  <p><em>You made a mistake, but look at the positive side. If all those Ph.D.’s were wrong, the country would be in some very serious trouble.</em></p>
</blockquote>

<p><strong>Everett Harman, Ph.D.
U.S. Army Research Institute</strong></p>

<p>It took Marylin several tries to explain the concept well enough for the majority of her readers to understand it. I found her explanation to be clunky, so I posed the problem to my Facebook friends. What resulted was the longest comment string I've had in a long time. My friends, several of whom have advanced degrees, had a tough time with the problem. The people who knew the correct answer had a tough time explaining it to the doubters. </p>

<h3 id="whatcanthisstoryteachusaboutbuildingbettersoftware">What can this story teach us about building better software?</h3>

<p>There are several lessons this story can teach us about psychology, thinking things through, and humility.</p>

<h4 id="1peoplearebadatestimatingrisk">1. People are bad at estimating risk</h4>

<p>This story illustrates that people are not good at understanding probability. There's a whole slew of cognitive biases (brain fails) related to estimating probability. </p>

<p><a href="http://en.wikipedia.org/wiki/List_of_cognitive_biases#Decision-making.2C_belief.2C_and_behavioral_biases">List of Cognitive Biases</a></p>

<p>This is important to software development because much of what we do is estimate and mitigate risk. For example, mitigating security risks is incredibly important. Due to our inability to measure risk well, we may spend resources fixing low risk problems that were <a href="http://en.wikipedia.org/wiki/Availability_heuristic">recently featured in the news</a> instead of fixing high risk issues. </p>

<p>Risk also factors into software estimation. People are terrible at estimating how long it takes to do anything over a day. This is why agile software projects measure tasks using relative complexity (story points, T-shirt sizes, etc...) instead of hours. Agile projects also break down work into bite sized pieces, which are easier to comprehend. </p>

<h4 id="2watchoutforredherrings">2. Watch out for red herrings</h4>

<p>Another important aspect of software development is filtering out irrelevant information. In the Monty Hall problem, the host opening the losing door doesn't change the probability. You already knew one of the doors was a losing door. I find that it's important to remember this when I'm debugging code. Good testers tend to report more information than you need and it's up to you to figure out what's useful and what's not. </p>

<h4 id="3beskepticalofexperts">3. Be skeptical of "experts"</h4>

<p>Many of Marylin's critics were highly educated. All three of the quotations I mentioned were from PhD's, including one professional mathematician. In our society, we tend to take the opinion of experts at face value. Pew Research recently did a survey on the beliefs of scientists vs the beliefs of the public. (<a href="http://www.pewinternet.org/2015/01/29/public-and-scientists-views-on-science-and-society/">link</a>) This survey was widely reported on. </p>

<p>While the opinion of experts is vital, remember that they specialize in narrow areas. Any opinions they have outside of those areas should be subject to the same scrutiny that you give any smart person. Too often, people who are experts in one area are considered experts in other areas as well. A good example of this is when the media asks famous actors about their opinions on political issues.   The tendency to allow irrelevant traits, such as beauty or skill in an unrelated field, to effect our judgement someone's ability is called the <a href="http://en.wikipedia.org/wiki/Halo_effect">halo effect</a>. </p>

<p>You can use the halo effect to your advantage. Dressing sharp and being a good conversationalist can increase your credibility. While it's acceptable to go a tech conference in a t-shirt and jeans, people will think you are more professional if you wear something nice. </p>

<p>The halo effect also applies to software. In the book <a href="http://www.amazon.com/exec/obidos/ASIN/0465051367/thweofdujew-20">Emotional Design</a>, Don Norman explains how people find aesthetically pleasing objects to be more effective. When building your own software applications, pay attention to the design of the interface. Making things look good will make your software appear to be more useful.</p>

<h4 id="4dontbemean">4. Don't be mean.</h4>

<p>When doling out criticism, be nice. It hurts a lot less if you're later proven wrong. This doesn't mean you should sugar coat things, but you can deliver sharp criticism without being mean about it. Many of the people who wrote in nasty comments ended up apologizing for it once they realized their mistake. </p>

<h3 id="conclusion">Conclusion</h3>

<p>The story of Marilin vos Savant and the Monty Hall problem has many lessons for software developers. If you want to learn more about the topics in this post, check out the resources below. </p>

<p><a href="https://www.khanacademy.org/math/precalculus/prob_comb/dependent_events_precalc/v/monty-hall-problem">Khan Adademy: Monty Hall Problem</a> <br />
<a href="http://marilynvossavant.com/game-show-problem/">Maylin vos Savant: Game Show Problem</a> <br />
<a href="http://en.wikipedia.org/wiki/List_of_cognitive_biases#Decision-making.2C_belief.2C_and_behavioral_biases">List of Cognitive Biases</a> <br />
<a href="http://en.wikipedia.org/wiki/Availability_heuristic">The Availability Heuristic</a><br />
<a href="http://en.wikipedia.org/wiki/Halo_effect">The Halo Effect</a> <br />
<a href="http://www.amazon.com/exec/obidos/ASIN/0465051367/thweofdujew-20">Emotional Design (Amazon)</a></p>