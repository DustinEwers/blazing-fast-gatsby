---
id: 533
title: Adventures in Learning Azure
date: 2018-03-06T22:39:54+00:00
author: Dustin Ewers
layout: post
guid: https://dustinewers.com/?p=533
permalink: /learning-azure/
thrive_post_fonts:
  - '[]'
image: /wp-content/uploads/2018/03/cloud_city_web.jpg
categories:
  - Cloud
---
<span style="font-weight: 400;">Being a developer is committing to a lifetime of learning new skills. Over the past few weeks, I’ve been working on grokking cloud architecture on Azure. Like many devs on the Microsoft stack, I’ve played around with Azure. I built a few resources and watched some demos, but until recently, I hadn’t taken the time to really invest in the skill set. I never felt like I had a good understanding of Azure as a whole. In this post, I’m going to talk about my experiences learning about Azure over the past few weeks.</span>

<span style="font-weight: 400;">The toughest part of learning Azure is that it’s huge. “The cloud” is nebulous by definition, and Azure doesn’t disappoint. Azure isn’t a single thing, but collection of many different products and services. This abundance makes it tough to get started.</span>

<span style="font-weight: 400;">When thinking about Azure, you can divide the services into a few large buckets.
Here’s a high level overview of what’s in Azure:</span>
<h3><span style="font-weight: 400;">Virtual infrastructure (aka Infrastructure as a Service or IaaS)</span></h3>
<span style="font-weight: 400;">In Azure, you can build virtual machines, virtual networks, load balancers, and other virtual appliances. If it exists in a data center, you can probably make one in Azure.</span>
<h3><span style="font-weight: 400;">App Services (aka Platform as a Service or PaaS)</span></h3>
<span style="font-weight: 400;">App services host specific kinds of applications without the need to configure servers. You usually run these on top of VMs, but you don’t need to configure them. You just pay for the compute resources. Azure has app services for web applications, apis, mobile apps, and functions.</span>
<h3><span style="font-weight: 400;">Identity, Secrets, and Security</span></h3>
<span style="font-weight: 400;">Azure has several services that support security and identity. This includes several flavors of Active Directory and Key Vault, which stores application secrets. Azure also has several different mechanisms to scan for security issues.</span>
<h3><span style="font-weight: 400;">Data Storage</span></h3>
<span style="font-weight: 400;">If you have data, Azure can store in a ton of different ways. You have your basic storage accounts, which can hold blobs, queues, files, and json objects. You also have Azure SQL Server and several other hosted SQL databases (including Postgres and MySql). If you need worldwide scale, you can use Cosmos DB. Azure also has a pile of big data tools like HDInsight and Stream Analytics.</span>
<h3><span style="font-weight: 400;">APIs</span></h3>
<span style="font-weight: 400;">Azure has a lot of APIs you can take advantage of in your applications. This includes things like Cognitive Services, Notification Hubs, and Multifactor Authentication. You can leverage these tools to shortcut things you used to have to do yourself.</span>

<span style="font-weight: 400;">This is by no means an exhaustive list. Azure updates constantly and new offerings are added all the time.</span>
<h2><span style="font-weight: 400;">Finding a Roadmap</span></h2>
<span style="font-weight: 400;">To help navigate this landscape, I chose to base my studying on the Microsoft Azure certifications. While I still haven’t convinced myself to take the actual exams, the exam outline is a useful map for learning. I’ve always been on the fence about the actual value of developer certifications. Much of what’s covered is stuff that’s easy to look up in the docs and developer certs lack the clout of networking certifications. Software also changes so fast that certs tend to either rapidly expire or are out of date. Azure certifications update every three months, which makes it hard to find solid resources. Regardless of the value of the certifications, the outlines are useful.</span>

<span style="font-weight: 400;">Here’s the two certs I looked at
<a href="https://www.microsoft.com/en-us/learning/exam-70-532.aspx" target="_blank" rel="noopener">https://www.microsoft.com/en-us/learning/exam-70-532.aspx
</a></span><a href="https://www.microsoft.com/en-us/learning/exam-70-535.aspx" target="_blank" rel="noopener"><span style="font-weight: 400;">https://www.microsoft.com/en-us/learning/exam-70-535.aspx</span></a>
<h2><span style="font-weight: 400;">Udemy</span></h2>
<span style="font-weight: 400;">I began by working my way through a 70-532 course on Udemy. I watched all the videos and built plenty of demos while going along with the course. The course claims to prepare you for the exam, but it doesn’t some close to the level of detail you’d need. It’s an OK overview, but the more I learned about Azure, the more I felt like this course was a waste of my time.</span>

<span style="font-weight: 400;">After reviewing some other courses from Udemy, I found the platform to be hit-and-miss. Udemy also has a pretty serious piracy problem where pirates will steal courses from other people and host them on Udemy. While the Azure course I saw was decent, I can’t recommend using Udemy as a first rate source for developer content.</span>

<span style="font-weight: 400;">Here’s the course I used
<a href="https://www.udemy.com/70532-azure/learn/v4/overview" target="_blank" rel="noopener">https://www.udemy.com/70532-azure/learn/v4/overview</a>
</span>
<h2><span style="font-weight: 400;">Pluralsight</span></h2>
<span style="font-weight: 400;">After working my way through that course, I searched for other resources. Microsoft offers free Azure training through Pluralsight. It’s been a while since I’ve checked out Pluralsight and they’ve done a lot to improve the platform. The last time I used it, Pluralsight had cranked up their video acquisitions. This was good for variety, but choice overload made it nearly impossible to figure out what course to take. Nothing sucks quite like ten courses that look identical. Fortunately, Pluralsight introduced learning paths. Now, instead of sorting through hundreds of courses, you can sort through a few dozen learning paths. Each path has a handful of courses that go from beginner to advanced. You can also use their handy Pluralsight IQ function to gauge your skill level. It’s like a mini certification test. They’re also free, so check them out if you’re up for a challenge.</span>

Azure Learning Paths
<a href="https://azure.microsoft.com/en-us/training/learning-paths/" target="_blank" rel="noopener">https://azure.microsoft.com/en-us/training/learning-paths/</a>

<span style="font-weight: 400;">I split my time between several of the Azure related learning paths. They have a 70-532 related path, but they also had paths geared towards solutions architecture and developers. As mentioned before, I’m more interested in gaining useful skills than becoming certified. I don’t feel any obligation to stick to the certification content.</span>

<span style="font-weight: 400;">Here’s a few of the courses I looked at:</span>

<span style="font-weight: 400;">The 70-532 path has an excellent set of courses by Mike Pfeiffer.
<a href="https://app.pluralsight.com/paths/certificate/developing-microsoft-azure-solutions-70-532" target="_blank" rel="noopener">https://app.pluralsight.com/paths/certificate/developing-microsoft-azure-solutions-70-532</a>
</span>

<span style="font-weight: 400;">This path dealt with Azure at the architecture level. Simon Allardice’s course gave a nice conceptual framework to hang some of the more detailed concepts on. Simon’s course directed me to Scott Allen course for a more detailed view.
<a href="https://app.pluralsight.com/paths/skill/microsoft-azure-solutions-architect" target="_blank" rel="noopener">https://app.pluralsight.com/paths/skill/microsoft-azure-solutions-architect</a>
</span>

<span style="font-weight: 400;">Scott Allen is an excellent presenter and his advanced course in the .NET developer path does not disappoint.
<a href="https://app.pluralsight.com/paths/skill/net-developer-on-microsoft-azure" target="_blank" rel="noopener">https://app.pluralsight.com/paths/skill/net-developer-on-microsoft-azure</a>
</span>

<span style="font-weight: 400;">Pluralsight has some great resources and a lot of the Azure content is free, so I recommend you check it out.</span>
<h2><span style="font-weight: 400;">Get Your Hands Dirty</span></h2>
<span style="font-weight: 400;">Besides watching courses, I built a ton of small demo projects. Like anything else, you can’t just watch a video and expect to know how to do something. You need to get your hands dirty. While watching the videos, I’d follow along with the course by building along. Additionally, I worked my way through the various exam objectives make small demo projects.</span>

When doing demo projects, I recommend you build small. Building small helps you focus on the topic at hand while avoiding getting sunk in non-relevant details. It also gives you references you can go back to later.
<h2><span style="font-weight: 400;">RTFM (It’s actually pretty good)</span></h2>
<span style="font-weight: 400;">Another excellent resource is Microsoft’s own Azure documentation. Our friends at Microsoft poured a lot of love into their documentation and it shows. The Azure docs have lots of reference information combined with specific tutorials. It’s worth having a tab with the Azure docs open at all times. </span>

<span style="font-weight: 400;">Azure Docs
<a href="https://docs.microsoft.com/en-us/azure/" target="_blank" rel="noopener">https://docs.microsoft.com/en-us/azure/</a>
</span>
<h2><span style="font-weight: 400;">Next Steps</span></h2>
<span style="font-weight: 400;">While I’ve worked diligently these past few weeks, I don’t feel like an Azure ninja yet. I’m going to continue to build my skills and improve. To do that, I’m going to do a few things. </span>

<span style="font-weight: 400;">Keep building demos. Practice makes perfect. </span>

<span style="font-weight: 400;">Finish the Pluralsight 70-532 course and watch some of the other advanced Azure courses. </span>

<span style="font-weight: 400;">Explore some of the services I didn’t get a chance to play with yet. I still haven’t spent much time working with Azure’s data analytics offerings yet. </span>

<span style="font-weight: 400;">Continue to subscribe to various Azure resources like <a href="https://buildazure.com/" target="_blank" rel="noopener">BuildAzure.com</a> and the Azure Weekly newsletter. It’s easier to keep up when the information comes to you.</span>

<span style="font-weight: 400;">Seek opportunities to get real life experience with Azure. There’s a big difference between an easy looking demo and actually using something in production.</span>
<h2><span style="font-weight: 400;">If I Had to Do It Again</span></h2>
<span style="font-weight: 400;">If I had to start over again, I’d do things a little differently. First, I’d start with the Pluralsight learning paths. The Pluralsight content is free and higher quality than the Udemy content. It’s hard to argue with cheaper AND better. Other than that, I’d have spent more time building things in PowerShell and the C# API instead of using the portal. While most demos occur in the Azure portal, you’re missing out on a big part of what makes Azure cool. Azure makes it easy to represent your infrastructure as code. </span>

<span style="font-weight: 400;">My current learning process is a cycle between watching videos, building demos, answering questions, and reading docs. When I learn new things, I alternate consumption, recall, and creation. It’s not fancy, but it works. </span>

<span style="font-weight: 400;">If you’re interested in learning more about Azure and cloud technologies, head out to the </span><a href="https://docs.microsoft.com/en-us/azure/"><span style="font-weight: 400;">Azure Docs</span></a><span style="font-weight: 400;"> and check out some of the free </span><a href="https://azure.microsoft.com/en-us/training/"><span style="font-weight: 400;">Azure training</span></a><span style="font-weight: 400;">. It’s amazing what we can do with a few credits and some knowledge. </span>