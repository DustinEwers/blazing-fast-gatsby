---
id: 566
title: Adventures Building and Hosting Static Websites
date: 2018-07-31T23:53:41+00:00
author: Dustin Ewers
layout: post
guid: https://dustinewers.com/?p=566
permalink: /adventures-building-static-websites/
thrive_post_fonts:
  - '[]'
categories:
  - Cloud
  - JavaScript
  - React
---
It's fun to experiment, but you eventually need to get things done. I spent a good chunk of my last weekend working on a side project. I have an idea for a website and I'm going to build it up over the next few months. I have a few goals for this site. Tech-wise, I wanted to build something that was super cheap to host while doing something practical with my cloud skills.

There's a near infinite number of ways to build a website, but I wanted to use a static generator. Static sites are cheap, fast, easy to make, and easy to secure. Unlike a WordPress site, you don't need to constantly update it or worry about it getting hacked. Static sites are low maintenance, which is great for people like me who don't have oodles of free time to click "update". Drop some assets on some cheap hosting and call it a day.

There are many static site generators to choose from. I wanted to go with a React based static generator. I know and enjoy using React. I wanted an easy path to building any extensions. There are lots of other generators written in different languages, but I wanted something that meshes with my current skills. Trying to learn too many new things at once results in zero progress. The most popular React-based site generator is Gatsby.js. I looked into some of the alternatives (react-static), but Gatsby.js had better support.

After picking my technology, I needed to find a place to host the site. I've been working on my Azure skills lately and they recently released a new static web hosting service, so I started there. Besides being what I'm comfortable with, I also like the idea of being able to rope in Azure services if I want to add features to my site.

My goal was to build a CI/CD process using Visual Studio Team Services (VSTS) that would automatically deploy to static hosting from a git repo. This did not end well. Azure Static Hosting is "preview" for a reason. My static settings kept reverting back randomly and the built-in blob storage deploy tasks failed with a blank error message. I've had good luck with other Azure services, but this was a total disaster.

I could of gone with an Azure website to host my static files, but I wanted the super cheap static site hosting experience. Instead of banging my head against a wall, I tried out AWS instead. Amazon S3 has been out for a long time and is often used to host static sites. The AWS S3 experience was far more mature than Azure Blob storage. The UI for S3 is far nicer and you can add AWS build tasks to VSTS that actually work. Except for some weirdness with user accounts, it was easy to setup. I had a nice three step build pipeline from my Git repo on VSTS to an S3 static site bucket on AWS. This is coming from someone who has zero experience building things on top of AWS.

Even though my experience on AWS was great, I wanted to try out one more experiment. Netlify is a hosting platform that's built for static sites. Accounts are free and you can have a static site up and running on Netlify in about five minutes. While they don't support VSTS, they do support Github and Gitlab. After signing up for a free Gitlab account, I setup a private repo, hooked it up to Netlify, added my custom domain, and was ready to go. Netlify's built in CI/CD software is easy to use. It only takes a few few minutes to hook up your git repo. Netlify even has branched deploys so you can make a QA environment. Overall, it took less than an hour to setup everything.

In the end, I went with Netlify. While they don't offer the variety of services AWS and Azure do, they are excellent for hosting static content. If I was building a static app that needed a backend, I probably would go the AWS S3 route. Netlify can talk to Lambda functions, but I'd prefer to stick with one cloud platform per app. I'm sure Azure will improve their static hosting game, but for now, I wouldn't use it for anything production related.

If you're building a static website, it'd be hard to do better than using Gatsby.js on Netlify. It's a killer combo. Easy to work with and free to host. This is going to be my new default for any kind of content site or MVP web application.