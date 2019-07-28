---
id: 17
title: How to Future Proof Your Web Application
date: 2015-07-22T06:37:37+00:00
author: Dustin Ewers
layout: post
guid: http://631b05f7-ff22-4e18-be22-6a3d7a6b747c
permalink: /how-to-future-proof-your-web-application/
categories:
  - Software Design
---
<strong>What do traditional archers and old Linux hackers have in common?</strong>
<em>Terrible looking websites.</em>

I’ve recently started getting into traditional archery. Like any other geek, the first place I looked for information was the Internet. In my quest to suck less at hitting targets, I scoured the Internet for resources. I found lots of content, especially video content, but most of the websites were so outdated it made them hard to read. Not only were they unusable on my phone, but many sites didn't even look good on my computer. While there are lots of videos on YouTube, I could only find one well designed site. (<a href="http://www.archery360.com/">http://www.archery360.com/</a>)

The thing about traditional archery is that it's been around for thousands of years. It’s about the most evergreen content you can find. A well written archery site should be able to last indefinitely.

This got me thinking about how to build a future proof (or at least future resistant) web application. The benefits of future proof apps are obvious, but even if you don't plan for longevity, your app is probably going to be running longer than you expect. I've seen many instances of businesses running ancient apps that no one thought would last that long. Think about the trillions of lines of COBOL happily chugging away in server rooms across the world.

Additionally, most people have better things to do than redesign their sites every year. Not everyone needs to keep up with the latest web design trend. This is especially true for people who are producing evergreen content, as opposed to news sites and blogs.

<h2 id="howdowemakeourwebappsfutureproof">How do we make our web apps future proof?</h2>

<h3 id="makethingseasytochange">Make things easy to change</h3>

Great software is software that can be efficiently maintained. Pay attention to proper design principles. Separate your concerns, don't get too clever, and keep things simple whenever possible. Program to interfaces to isolate dependencies. There's a reason why we call these concepts "best practices". Additionally, use a robust suite of automated tests. Automated tests will save your ass when trying to make changes. Software that can be properly maintained lasts longer and is easier to deal with. It's also less expensive. Realize that most of the stuff you write isn't going to be scrapped in the next few years. The web is a mature platform and most applications are going to be around for a while.

<h3 id="picktechnologieswithafuture">Pick technologies with a future</h3>

Thinking about using that sexy new JavaScript framework for your mission critical business application? You may want to reconsider. Picking the right stack means balancing a lot of different factors. Here’s a few things to think about:

<h4 id="thelindyeffect">The Lindy Effect</h4>

<a href="https://en.wikipedia.org/wiki/Lindy_effect">https://en.wikipedia.org/wiki/Lindy_effect</a>

The Lindy Effect predicts the lifetime of nonperishable media, like books or JavaScript frameworks. It states that the longer something has been in use, the longer it will likely remain in use. For example, the Bible will likely remain in print far longer than the book at the top of the New York Times best seller list. This makes sense. For something to stay in print for a long time, it probably offers significant value. This effect applies to software too. Ruby on Rails, ASP.NET, and PHP have been around for a while. They are mature platforms and don't appear to be going anywhere any time soon. Meanwhile, there’s a hot new JavaScript framework every week. It's hard to tell which one of these frameworks is going to emerge from the pack. (… though we all know Angular.js already won)

<h4 id="istherenewstuffbeingwritteninthetechnology">Is there new stuff being written in the technology?</h4>

While the Lindy Effect is useful, relying on it alone will steer you wrong. COBOL and FORTRAN have been around since forever, but there’s no way in hell anyone should be writing new code in them. Think about what other people are doing with your chosen stack today. Are people writing anything new in it or is the technology on it's way out?

<h4 id="whosbackingthecommunity">Who’s backing the community?</h4>

Another predictor of longevity is who’s backing the technology in question. ASP.NET has Microsoft behind it. Ruby on Rails and PHP both have large communities of users. Angular.js has Google (and to a lesser degree, Microsoft) behind it. You don’t need a large corporate backer to be viable, but if you see lots of people and companies get behind a technology, the likelihood of it being around in ten years is high.

<h3 id="designforthefuture">Design for the future</h3>

People access the web from all sorts of devices. From computers to phones to Internet enabled refrigerators. One thing we know about the future is that the number of device form factors is not going down. When I was looking for archery sites, the most common problem was the text was too small. This was because most of the sites were designed with one viewport in mind.

There are two things we can do to make our designs future proof.

<h4 id="keepitsimple">Keep it simple.</h4>

This is <a href="https://web.archive.org/web/20000301105534/http://google.com/">Google’s homepage in the year 2000</a>

<img src="https://dustinewers.com/content/images/2015/07/Screen-Shot-2015-07-22-at-7-38-55-AM.png" alt="How to Future Proof Your Web Application" />

How dated does it look? Can you still use it?

While Google isn't the most beautiful site, it's simplicity gives it long term appeal. When building something to last, stick with a simple design. You don't need to go as spartan as Google, but keep the content to chrome ratio firmly in the content side.

<h4 id="useresponsivedesign">Use responsive design</h4>

With frameworks like Bootstrap and Foundation, it's easier than ever to make your site responsive. Responsive design should be the default for everything you build on the web. You never know what kind of device someone is going to visit your page with, but with a little bit of effort, you can make your web application work on most of them.

<h4 id="conclusion">Conclusion</h4>

Future proofing should be an important design consideration. By making good choices in the beginning, you can ensure your web app will live a long life.

Now if you'll excuse me, I have a traditional archery website to build…