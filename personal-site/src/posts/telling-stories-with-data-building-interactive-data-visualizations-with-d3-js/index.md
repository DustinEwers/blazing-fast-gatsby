---
id: 37
title: 'Telling Stories With Data: Building Interactive Data Visualizations With D3.JS'
date: 2014-08-07T22:10:01+00:00
author: Dustin Ewers
layout: post
guid: http://37df531c-6b12-45e0-b3be-0899f3a8e31f
permalink: /telling-stories-with-data-building-interactive-data-visualizations-with-d3-js/
thrive_post_fonts:
  - '[]'
categories:
  - JavaScript
---
This is a text version of a talk I've performed. The best way to use this post is to grab the demo code and follow along.

<strong>Demo Code:</strong>
<a href="https://github.com/DustinEwers/D3-js-Demos">https://github.com/DustinEwers/D3-js-Demos</a>

If you're interested in integrating D3.js, Web API, and ASP.NET MVC, I have a repo for that too:
<a href="https://github.com/DustinEwers/D3-DotNetMVC-Demos">https://github.com/DustinEwers/D3-DotNetMVC-Demos</a>

<h3 id="introduction">Introduction</h3>

Ever increasing mountains of data surround us. Finding insights in that data is one of the great challenges of the 21st century. One way to make your data work for you is to visualize it. In this post, I will show you how to create interactive data visualizations using D3.js, a popular JavaScript data visualization library.

<h3 id="whyshouldicareaboutdatavisualization">Why should I care about data visualization?</h3>

Data visualization is important because it gives us powerful tools to make sense of all the data humanity is creating. We have more data available to us then at any time in human history and we need sophisticated tools to store, manage, parse, and learn from it. Data visualization earns a place in our data toolbox because it gives us three advantages.

<h4 id="understanding">Understanding</h4>

One of the major advantages of data visualization is that it adds meaning to incomprehensible numbers. For example, I can tell you that the Earth has a radius of 3,959 miles and that Jupiter has a radius of 43,441 miles. It's clear that the Earth is much smaller than Jupiter, but those numbers are too large for humans to comprehend.

I could instead show you this image:
<a href="http://kepler.nasa.gov/multimedia/artwork/diagrams/?ImageID=123">Kepler Planets</a>

It's clear that Earth is tiny compared to Jupiter. The visual image shows the relationship more clearly than any set of numbers could.

Here's another example from the creator of XKCD:

<a href="http://xkcd.com/980/huge">Money: A Chart of <em>Almost</em> All of It</a>

Another way to increase undersanding is by telling stories with your data. Humans are hardwired to create and relate to stories. Using data visualization to tell stories can create a powerful understanding, even of complex information.

The best example of telling stories with data I've seen is the <a href="http://www.gapminder.org/world/#$majorMode=chart$is;shi=t;ly=2003;lb=f;il=t;fs=11;al=30;stl=t;st=t;nsl=t;se=t$wst;tts=C$ts;sp=5.59290322580644;ti=1800$zpv;v=0$inc_x;mmid=XCOORDS;iid=phAwcNAVuyj1jiMAkmq1iMg;by=ind$inc_y;mmid=YCOORDS;iid=phAwcNAVuyj2tPLxKvvnNPA;by=ind$inc_s;uniValue=8.21;iid=phAwcNAVuyj0XOoBL_n5tAQ;by=ind$inc_c;uniValue=255;gid=CATID0;by=grp$map_x;scale=log;dataMin=194;dataMax=96846$map_y;scale=lin;dataMin=23;dataMax=86$map_s;sma=49;smi=2.65$cd;bd=0$inds=;example=60">Health and Wealth of Nations</a> (<a href="http://bost.ocks.org/mike/nations/">D3.js Version</a>) by Hans Rosling and <a href="http://www.gapminder.org/">Gapminder</a>.

Here's a video of him describing it:
<a href="https://www.youtube.com/watch?v=jbkSRLYSojo">Hans Rosling's 200 Countries, 200 Years, 4 Minutes - The Joy of Stats - BBC Four</a>

This visualization tells us a complex and uplifting story of the last 200 years of human civilization. Here are a few of the things that can be learned from Health and Wealth of Nations:

<ul>
    <li>200 years ago: Everyone was poor and most people lived short lives.</li>
    <li>1800 – 1900: Major industrial powers like US, UK, Germany and France started gaining wealth, but most of the world was still poor and everyone still lived short lives.</li>
    <li>1900-1950: Industrial nations like Japan, the United States, and Western Europe had massive increases in both wealth and life expectancy</li>
    <li>1950-1980: Even though many countries were still poor, they had massive gains in life expectancy. The industrialized nations developed in the opposite order.</li>
    <li>1980-Present: India, China, and the rest of the developing world begin gaining wealth.</li>
</ul>

<h4 id="persuasion">Persuasion</h4>

Having the facts is great, but good stories are more persuasive than statistics. Stories are an integral part of the human experience. We naturally tell them from childhood. Stories are so integral that <a href="http://en.wikipedia.org/wiki/Monomyth">all human cultures tell the same story</a>. Look at any successful marketing campaign and you will see that stories. Data visualization is a great way to tell stories. Notice how effectively the Health and Wealth of Nations visualization combats the constant "if it bleeds it leads" mentality of the news media. The visualization tells us a story about the world while making a persuasive argument that the world is becoming a much better place to live.

Additional Reading:
<a href="http://www.copyblogger.com/marketing-stories/">http://www.copyblogger.com/marketing-stories/</a>
<a href="http://www.presentationzen.com/presentationzen/2008/07/robert-mckee-on-the-power-of-story.html">http://www.presentationzen.com/presentationzen/2008/07/robert-mckee-on-the-power-of-story.html</a>

<h4 id="efficiency">Efficiency</h4>

Several public figures have tried to communicate, inaccurately, how much data is being produced. While solid numbers are hard to come by, it's clear that we have more data available that in any time in human history. There is a pressing need to process that data efficiently. Humans are visual creatures. We can process an image much faster than a table of data points. Data visualization gives us a powerful tool to manage the data we've created. There's a reason Excel comes with a "chart" function.

<h3 id="whatisd3js">What is D3.js?</h3>

D3.js is a web based data visualization library written in JavaScript. Mike Bostock created D3.js in 2011. "D3" stands for Data Driven Documents. D3.js creates data driven documents by binding data to DOM elements.

<h4 id="whyd3js">Why D3.js?</h4>

<ul>
    <li>D3.js uses standard web technologies like JavaScript, HTML, CSS, and SVG</li>
    <li>Free and Open Source (Free as in speech and beer)</li>
    <li>D3.js includes tools to create <a href="https://github.com/mbostock/d3/wiki/Gallery">almost any standard data visualization</a></li>
    <li>No need to install plugins like Flash or Java, which was a limitation of previous web based data visualization libraries.</li>
</ul>

<h4 id="whynotd3js">Why not D3.js?</h4>

<ul>
    <li>D3.js can be hard to learn, especially if you are not comfortable with JavaScript.</li>
    <li>D3.js doesn't include any "pre-canned" visuals, as opposed to tools like <a href="http://www.flotcharts.org/">Flot</a></li>
    <li>D3.js doesn't support IE8 out of the box. You can jump through some hoops to make D3.js work with IE8, but support doesn't come out of the box.</li>
    <li>D3.js doesn't hide your root data. Any data you use in D3.js is accessible to any savvy web user.</li>
</ul>

<h4 id="idealusecase">Ideal Use Case</h4>

D3.js works best when you want to build complex, web based, interactive data visualizations targeted at modern web browsers.

<h3 id="gettingstartedwithd3js">Getting Started with D3.js</h3>

<h4 id="obtainingd3js">Obtaining D3.js</h4>

You can get D3.js from a variety of places including <a href="https://github.com/mbostock/d3">Github</a>, <a href="https://www.nuget.org/packages/d3/">NuGet</a>, <a href="https://www.npmjs.org/package/d3">NPM</a>, and <a href="http://bower.io/search/?q=d3">Bower</a>

I encourage you to follow along with the examples as I explain them. I've included links to the relevant project files.

<h4 id="selectdataenterappend">Select - Data - Enter - Append</h4>

"Select, Data, Enter, Append" is the core pattern in D3.js. You select an element, bind some data, handle the enter event, and append some DOM elements. This examples shows you how to do that. Consider it "Hello World" for D3.js.

Example Code:
<a href="https://github.com/DustinEwers/D3-js-Demos/blob/master/loading_data.html">loading_data.html</a>
<a href="https://github.com/DustinEwers/D3-js-Demos/blob/master/js/d3/loading_data.js">loading_data.js</a>

This is the relevant code:

<pre><code>  var dataSet = [{
              LiteracyRate: 80,
              PercentGuessed: 22
            },
            {
              LiteracyRate: 60,
              PercentGuessed: 52
            },
            {
              LiteracyRate: 40,
              PercentGuessed: 26
            }];

  d3.select("#tagTableBody")
    .selectAll("tr")
    .data(dataSet)
    .enter()
    .append("tr")
    .html(function (dataPoint) {
        var message = "&lt;td&gt;" + dataPoint.LiteracyRate + "&lt;/td&gt;";
        message += "&lt;td&gt;" + dataPoint.PercentGuessed + "&lt;/td&gt;";
        return message;
    });
</code></pre>

Here's what's happening:

<strong>select()</strong>
Selects a place in the DOM to append elements to. For this example, that's a tbody element selected by it's id. D3.js uses CSS3 style selectors, so you have several options for selectors, though I use ID and element selectors most of the time.

<strong>selectAll()</strong>
Selects the items you're going to bind data to. Don't worry about the fact that these elements don't exist yet. In this case, we're selecting table rows.

<strong>data()</strong>
Binds the data to the elements.

<strong>enter()</strong>
Handles any new data points. Anything you call after this is attached to the enter event.

<strong>append()</strong>
Adds a table row for each data point.

<strong>html()</strong>
Adds the content of the row. The html takes a function that passes in the data point. Most generator functions will accept a function parameter.

<h4 id="abriefprimeronsvg">A Brief Primer on SVG</h4>

SVG stands for scalable vector graphics. It's an xml based way to define vector images. It's a commonly used web technology for building graphs and is the preferred way of making charts in d3.js.

<strong>Note</strong> SVG is not supported in IE8. <a href="http://caniuse.com/svg">(SVG Support)</a>

The example code shows you how to build a circle, a group of rectangles, and a text element. If you would like to learn more about SVG, check out <a href="https://developer.mozilla.org/en-US/docs/Web/SVG">Mozilla's SVG Reference</a>.

Example Code:
<a href="https://github.com/DustinEwers/D3-js-Demos/blob/master/svg.html">svg.html</a>

<h4 id="importantthingsaboutsvg">Important things about SVG:</h4>

<ol>
    <li>SVG elements can be styled with CSS, though SVG elements use different styles than HTML elements. Preface your svg styles with "svg" so they only apply to svg elements.</li>
    <li>SVG elements can trigger events, which is useful for triggering interaction.</li>
    <li>Many SVG elements can use relative sizes, like percentages and ems, which makes it easier to build responsive charts.</li>
    <li>(0,0) is SVG is the top left corner. This is different from the coordinate systems I'm used to where (0,0) is the bottom left corner.</li>
</ol>

<h4 id="scalesandaxes">Scales and Axes</h4>

When building charts, you are going to need to scale your data to your image size and build relevant axes to label your data. D3.js has several helper functions to assisting in creating scales and building the SVG for your axes. The demo below uses three different scales and renders an axis for each of them.

Example Code:
<a href="https://github.com/DustinEwers/D3-js-Demos/blob/master/axes_scales.html">axes_scales.html</a>
<a href="https://github.com/DustinEwers/D3-js-Demos/blob/master/js/d3/axes_scales.js">axes_scales.js</a>

A D3.js scale is a function that maps a group (domain) of inputs to a range of values. There are three different types of scales in D3.js:

<strong>Quantitative Scales</strong> scales apply a mathematical function to build a scale.

<strong>Ordinal Scales</strong> are useful for mapping discrete values (like categories) to a scale.

<strong>Time Scales</strong> map a time range.

If you want to learn more:
<a href="https://github.com/mbostock/d3/wiki/Scales">D3.js Scales</a>.

A basic scale:

<pre><code>// Linear Scale
var linearScale = d3.scale
    .linear()
    .range([0, height-10])
    .domain([0, d3.max(data)])
    .nice();
</code></pre>

Here's what's going on:

<strong>d3.scale.linear()</strong>
Generates a linear scale function.

<strong>.range([0, height-10])</strong>
Sets the range of outputs. We're subtracting 10 pixels to give the the scale a little bit of room.

<strong>.domain([0, d3.max(data)])</strong>
Sets the domain of inputs. d3.max() gets the largest item in the set.

<strong>.nice();</strong>
Causes D3.js to round off outputs. This prevents D3.js from creating values like "45.8530260724415" for pixel measurements.

D3.js, an axis is a function the draws an axis with the appropriate labels and tick marks. This function creates an axis for the scale above.

<pre><code>//Linear Axis
var linearAxis = d3.svg.axis()
                   .scale(linearScale)
                   .orient("left")
                   .ticks(5);
</code></pre>

<strong>d3.svg.axis()</strong>
Declares an axis function.

<strong>.scale(linearScale)</strong>
Sets a scale for the axis to draw.

<strong>orient("left")</strong> and <strong>ticks(5)</strong>
Set up how the scale is rendered.

<h4 id="handlingdatachanges">Handling Data Changes</h4>

As I've mentioned before, D3.js binds data to DOM elements. As you add, remove, and change your dataset, D3.js has events that are called. You can handle those events to add, change, and remove elements in your chart.

Example Code:
<a href="https://github.com/DustinEwers/D3-js-Demos/blob/master/updating_data.html">updating_data.html</a>
<a href="https://github.com/DustinEwers/D3-js-Demos/blob/master/js/d3/updating_data.js">updating_data.js</a>

<strong>D3.js Data Events:</strong>

<strong>Enter</strong> occurs when data enters the set. This is the most common event.

<pre><code>selection.enter()
         .append("circle")
         .attr("cx", function (item, i) { return width })
         .attr("cy", function (item, i) { return height - item.Height })
         .attr("r", function (item) { return item.Radius })
         .on("click", function (item) { alert(generateMessage(item));});
</code></pre>

In this example, when enter is triggered, we build an SVG circle and add a click handler to it.

<strong>Exit</strong> occurs when data leaves the set.

<pre><code>selection.exit()
         .transition()
         .attr("cx", function (item, i) { return width })
         .attr("cy", function (item, i) { return height })
         .attr("r", function (item) { return 0 })
         .attr("fill", function (item) { return "#000000" })
         .duration(1000)
         .remove();
</code></pre>

In this example, we move the SVG element to the bottom right corner, fade it out, and then remove the element. <strong>transition()</strong> and <strong>duration()</strong> create a smooth animation as the element leaves the chart.

<strong>Update</strong> occurs when data changes.

<pre><code>selection.transition()
         .duration(1000)
         .attr("cx", function (item, i) { return xScale(i) })
         .attr("cy", function (item, i) { return height - item.Height })
         .attr("r", function (item) { return item.Radius })
         .attr("fill", function (item, i) { return prettyColors[item.Index % (prettyColors.length - 1)] });
</code></pre>

To update an element, you just add the code to change the element to your selection. In this case, we're moving the circle and changing it's color.

<strong>Important Note</strong>
In order for the update event to work as expected, you need to set an index function to provide a key to the elements. In this example, we give each item in our data set an index and use that when the data is bound.

<pre><code>var selection = svg.selectAll("circle")
                   .data(dataSet, function (item) { return item.Index });
</code></pre>

<h3 id="advancedtopics">Advanced Topics</h3>

<h4 id="reuse">Reuse</h4>

Building a chart in D3.js takes a significant amount of code, which we don't to have to repeat for every chart we make. To make our charts reusable, we can use the pattern that D3.js uses in it's generator functions.

Example Code:
<a href="https://github.com/DustinEwers/D3-js-Demos/blob/master/bar_chart.html">bar_chart.html</a>
<a href="https://github.com/DustinEwers/D3-js-Demos/blob/master/js/d3/bar_chart.js">bar_chart.js</a>

Basic Reusable Chart Pattern:

<pre><code>// Add a new object onto the d3 namespace
d3.d3Demos = {};

// Add a generator function
d3.d3Demos.barchart = function(){
  // set default values
  var width = 900;

  // Create a generator function that builds the chart.
  function generator(selection){
    selection.each(function(dataSet) {
        // Chart Building Code            
    });             
  }

  // Create setter functions that add the values to the function object.
  generator.width = function(value) {
    if (!arguments.length) return width;
    width = value;
    return generator;
  };

  // return the generator function
  return generator;
};
</code></pre>

To call the generator function:

<pre><code>var data = [{y: 50, x: 11}, {y: 60, x: 36}, {y: 70, x: 53}];
// Creates the generator
var chart1 = d3.d3Demos.barchart();

d3.select("#question1").datum(data).call(chart1);
</code></pre>

When we call the generator function, we are using the <strong>datum()</strong> (not <strong>data()</strong>) function to add the data to the selection. <strong>dataum()</strong> adds the data, but doesn't bind it. The <strong>call()</strong> function executes a function and passes in the current selection.

If you want to learn more:
<a href="http://bost.ocks.org/mike/chart/">Towards Reusable Charts</a>

<h4 id="layouts">Layouts</h4>

While our previous demos have focused on making charts with simple SVG elements, D3.js is capable of making complex visualizations. It does this through the use of layouts. A layout is a function that transforms your data into a format that makes it easier to build a complex visualization. There are many layouts in D3.js. In this example, we will focus on the pie chart layout.

Example Code:
<a href="https://github.com/DustinEwers/D3-js-Demos/blob/master/responsive_pie.html">responsive_pie.html</a>
<a href="https://github.com/DustinEwers/D3-js-Demos/blob/master/js/d3/responsive_pie.js">responsive_pie.js</a>

<pre><code>// Create the layout function
var pie = d3.layout.pie();

//Create SVG element
var viewBox = "0 0 " + size + " " + size;
var svg = d3.select(this)
            .append("svg")
            .attr("class", "svg-content")
            .attr("viewBox", viewBox)
            .attr("preserveAspectRatio", "xMinYMin meet");

// This method generates SVG arcs
var arc = d3.svg.arc()
            .innerRadius(innerRadius)
            .outerRadius(outerRadius);

var arcs = svg.selectAll("g.arc")
            .data(pie(dataSet))
            .enter()
            .append("g")
            .attr("class", "arc")
            .attr("transform", "translate(" + outerRadius + ", " + outerRadius + ")");

arcs.append("path").attr("fill", function(d, i) {
                return colors(i);
            })
            .attr("d", arc);

    });
  }
</code></pre>

We are passing our data set to the <strong>pie()</strong> function we created at the top of the example. The layout calculates the data we need to use the <strong>arc()</strong> function, which generates the definition of the path elements we're using for our pie wedges.

<h4 id="responsivetactics">Responsive Tactics</h4>

Anyone doing modern web development should be concerned with making their websites responsive. Because D3.js uses SVG, which is a vector based format, we have several options for making our charts responsive.

The first option is to use relative sizes like percentages or ems. This approach is useful for simple charts, but can be cumbersome for complex charts.

Another option is to make the SVG element scale to the size of it's container. This is a flexible method, but this means everything in your chart scales, including your text. This is the method I used in the previous example. To deal with the text size limitation, I moved the legend outside of the SVG element.

If you would like to learn more making SVG responsive:
<a href="http://demosthenes.info/blog/744/Make-SVG-Responsive">http://demosthenes.info/blog/744/Make-SVG-Responsive</a>

<h3 id="resources">Resources</h3>

<h4 id="books">Books</h4>

Interactive Data Visualization for the Web
<a href="http://chimera.labs.oreilly.com/books/1230000000345">Free Online Version</a> |
<a href="http://www.amazon.com/exec/obidos/ASIN/1449339735/thweofdujew-20">Amazon</a>

Developing a D3.js Edge
<a href="http://www.amazon.com/exec/obidos/ASIN/B00DNJ1UMM/thweofdujew-20">Amazon</a>

<h4 id="helpfulsites">Helpful Sites</h4>

<a href="http://bost.ocks.org/mike/">Mike Bostock's website</a>
<a href="http://d3js.org/">D3.js website</a>
<a href="https://developer.mozilla.org/en-US/docs/Web/SVG">MDN SVG Reference</a>

<h4 id="repos">Repos</h4>

<a href="https://github.com/DustinEwers/D3-js-Demos">https://github.com/DustinEwers/D3-js-Demos</a>
<a href="https://github.com/DustinEwers/D3-DotNetMVC-Demos">https://github.com/DustinEwers/D3-DotNetMVC-Demos</a>