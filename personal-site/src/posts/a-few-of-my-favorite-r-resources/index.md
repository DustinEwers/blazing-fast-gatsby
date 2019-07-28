---
id: 346
title: A Few of My Favorite R Resources
date: 2017-06-07T00:55:23+00:00
author: Dustin Ewers
layout: post
guid: https://dustinewers.com/?p=346
permalink: /a-few-of-my-favorite-r-resources/
thrive_post_fonts:
  - '[]'
thrive_share_count:
  - '{"facebook":0,"twitter":0,"plusone":0,"pinterest":0,"linkedin":9,"total":9,"last_fetch":1498503133,"url":"https://dustinewers.com/a-few-of-my-favorite-r-resources/"}'
categories:
  - Data Analysis
  - R
---
In an effort to improve my data analysis skills, I've been learning and speaking about the R programming language. Even if you don't want to be a data scientist, (whatever the hell that means this week) learning some analysis skills can pay dividends. Data literacy is an essential skill in our data soaked economy and R is a good learning tool for analysis skills.

One of the harder things to do when starting in a new area is finding useful resources. It's tough to find the digital needle in the web powered haystack. To make your life a little easier, here's a list of the R resources I found to be useful.

<h2>Setting Up R</h2>

There are three paths to getting R setup on your machine. If you're a Visual Studio 2017 user, the easiest way to get R is to install the Data Science workload in Visual Studio. This will get you the Microsoft flavor of R and R Tools for Visual Studio.

<a href="https://docs.microsoft.com/en-us/visualstudio/rtvs/installation" target="_blank" rel="noopener noreferrer">Installing R Tools for Visual Studio</a>

If you're not into Visual Studio, you can also install an R interpreter and R Studio. R Studio is a free R IDE. For interpreters, you can go with either the Microsoft flavor or the standard CRAN flavor of R.

<a href="https://cran.rstudio.com/bin/windows/base/" target="_blank" rel="noopener noreferrer">R Windows Installer
</a><a href="https://mran.microsoft.com/open/" target="_blank" rel="noopener noreferrer">Microsoft R (optional)</a><a href="https://cran.rstudio.com/bin/windows/base/" target="_blank" rel="noopener noreferrer">
</a><a href="https://www.rstudio.com/products/rstudio/" target="_blank" rel="noopener noreferrer">R Studio</a>

If neither of those options work for you, you can also run R in a Jupyter Notebook. Jupyter is a web-based environment that makes it really easy to mix text and code. It's used in many contexts including scientific research and virtual textbooks. To setup a local copy, start off by installing Anaconda. Anaconda is a data science environment that includes a plethora of handy analysis tools. After you install Anaconda, you'll need to install R using the conda package manager. Then you can run Jupyter using the "jupyter notebook" command.

<a href="https://www.continuum.io/downloads">Anaconda Download
</a>

Commands:

~~~~
conda install -c r r-essentials
jupyter notebook
~~~~

<h2>Sites</h2>

<a href="https://www.rstudio.com/resources/cheatsheets/" target="_blank" rel="noopener noreferrer">R Studio Cheat Sheets
</a>A collection of useful R related guides in PDF format.

<a href="http://www.r-tutor.com/content/r-tutorial-ebook" target="_blank" rel="noopener noreferrer">R Tutor Tutorials</a>
This site came in handy a few times while trying to find specific R issues.

<a href="https://flowingdata.com/tag/r/" target="_blank" rel="noopener noreferrer">Flowing Data
</a>Flowing data has a variety of useful articles on R and other data topics.

Don't forget about the built-in R help system. Prefix any command with a question mark and it'll search the R documentation for you. (Example: "?kmeans")

<h2>Books</h2>

I skimmed through a bunch of books on R, but the one I really liked was <a href="http://amzn.to/2sRm4zN" target="_blank" rel="noopener noreferrer">R: Recipes for Analysis, Visualization and Machine Learning</a>. The writing was clear and the content was pragmatic. The task based format was easy to follow and implement. Another book that I used was <a href="http://amzn.to/2s2C9X8" target="_blank" rel="noopener noreferrer">R for Data Science</a>.

<a href="http://amzn.to/2sRm4zN" target="_blank" rel="noopener noreferrer">R: Recipes for Analysis, Visualization and Machine Learning
</a><a href="http://amzn.to/2s2C9X8" target="_blank" rel="noopener noreferrer">R for Data Science</a>
This list of resources is enough to help you get started in learning R. Go forth and learn how to slice and dice your data.