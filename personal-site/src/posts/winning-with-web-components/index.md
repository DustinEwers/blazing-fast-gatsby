---
id: 543
title: Winning With Web Components
date: 2018-04-27T07:57:57+00:00
author: Dustin Ewers
layout: post
guid: https://dustinewers.com/?p=543
permalink: /winning-with-web-components/
thrive_post_fonts:
  - '[]'
thrive_share_count:
  - '{"facebook":3,"twitter":0,"plusone":0,"pinterest":null,"linkedin":0,"total":3,"last_fetch":1539209052,"url":"https://dustinewers.com/winning-with-web-components/"}'
image: /wp-content/uploads/2018/04/iker-urteaga-246955-unsplash.jpg
categories:
  - JavaScript
  - Tools
  - TypeScript
---
The web is always changing. Every time I turn around it seems like there's a new way to build user interfaces on the web. Whether it's yet another JavaScript framework or a new paradigm like Blazor, there's always something new. I love the innovation, but I hate having to build new controls for every new platform that comes along.  I would love to avoid this duplicate work. <span data-ccp-props="{&quot;201341983&quot;:0,&quot;335559739&quot;:160,&quot;335559740&quot;:259}"> </span>

As we push the limits of modern web development, web standards also evolve. A new collection of standards, collectively called Web Components, allows us to create reusable components using vanilla JavaScript. We can take those components and use them like any other html tag.  This allows us to simplify our web development while speeding up our applications. <span data-ccp-props="{&quot;201341983&quot;:0,&quot;335559739&quot;:160,&quot;335559740&quot;:259}"> </span>
<h3>What's a web component anyway?</h3>
Web components is a term that encompasses three new W3C standards. These three standards give us the ability to create custom elements.<span data-ccp-props="{&quot;201341983&quot;:0,&quot;335559739&quot;:160,&quot;335559740&quot;:259}"> </span>

<strong>Custom Elements</strong>
The custom elements spec allows you to create new HTML tags that you can add to your page. They behave like any existing HTML Tag. To use this spec, you create a new ES6 class that inherits from an existing element. Then you can define what's in that custom element and add it to your application as a new tag.<span data-ccp-props="{&quot;201341983&quot;:0,&quot;335559739&quot;:160,&quot;335559740&quot;:259}"> </span>

<strong>Shadow DOM</strong>
This term used to describe the virtual DOM used in React. Now it referrers to the ability to create an encapsulated DOM tree. This is used in conjunction with the custom elements spec to create components. <span data-ccp-props="{&quot;201341983&quot;:0,&quot;335559739&quot;:160,&quot;335559740&quot;:259}"> </span>

<strong>HTML Templates</strong>
HTML templates allow you to create snippets of HTML with slots where you can add your own custom markup. This makes it easier to encapsulate boilerplate html and DRY up your code.  <span data-ccp-props="{&quot;201341983&quot;:0,&quot;335559739&quot;:160,&quot;335559740&quot;:259}"> </span>

If you want to learn how to make a native web component, my favorite set of tutorials is on the Mozilla Developer Network. <span data-ccp-props="{&quot;201341983&quot;:0,&quot;335559739&quot;:160,&quot;335559740&quot;:259}">
<a href="https://developer.mozilla.org/en-US/docs/Web/Web_Components#Tutorials" target="_blank" rel="noopener">https://developer.mozilla.org/en-US/docs/Web/Web_Components#Tutorials</a><span data-ccp-props="{&quot;201341983&quot;:0,&quot;335559739&quot;:160,&quot;335559740&quot;:259}"> </span>
</span>

I also built a few simple native web components that you can check out:
<a href="https://github.com/DustinEwers/winning-with-web-components/tree/master/basic-components" target="_blank" rel="noopener">https://github.com/DustinEwers/winning-with-web-components/tree/master/basic-components</a><span data-ccp-props="{&quot;201341983&quot;:0,&quot;335559739&quot;:160,&quot;335559740&quot;:259}"> </span>
<h3>What about browser compatibility?</h3>
Like most new web standards, web components are not universally supported. Firefox and Edge/IE don't support web components. To get around this, you can either use a polyfill or a library. Web component libraries make it easier to build components. But, this isn't like bringing in a big framework. The output of these libraries is still standards compliant web components. It's like how you use Babel or TypeScript to smooth over old JavaScript. The native web component syntax is a little verbose, so my recommendation is to use a library. <span data-ccp-props="{&quot;201341983&quot;:0,&quot;335559739&quot;:160,&quot;335559740&quot;:259}"> </span>

<strong>Polyfills</strong>
<a href="https://www.webcomponents.org/polyfills">https://www.webcomponents.org/polyfills</a><span data-ccp-props="{&quot;201341983&quot;:0,&quot;335559739&quot;:160,&quot;335559740&quot;:259}"> </span>
<h3>Libraries, not frameworks... <span data-ccp-props="{&quot;201341983&quot;:0,&quot;335559739&quot;:160,&quot;335559740&quot;:259}"> </span></h3>
There are two popular ones out there. The first, and most popular, is Polymer. Polymer's goal is to add a layer of syntactic sugar to the existing web components spec. Polymer also includes polyfills that allow you use your components across different web browsers.  If you want to learn more, check out the Polymer Project. <span data-ccp-props="{&quot;201341983&quot;:0,&quot;335559739&quot;:160,&quot;335559740&quot;:259}">

</span><a href="https://www.polymer-project.org/" target="_blank" rel="noopener">https://www.polymer-project.org/</a> <span data-ccp-props="{&quot;201341983&quot;:0,&quot;335559739&quot;:160,&quot;335559740&quot;:259}"> </span>

The other library is Stencil.js. Stencil was built by the folks at Ionic. Ionic builds a popular mobile and Progressive Web Application (PWA) framework. Their existing method of using Angular was too slow for a modern PWA. To alleviate this problem, they moved to web components. They also built a library to help them along the way. Stencil makes use of TypeScript and TSX (TypeScript JSX) to build components in a way that feels familiar to folks using React or Angular. It takes the best concepts of Angular and React and combines them together.<span data-ccp-props="{&quot;201341983&quot;:0,&quot;335559739&quot;:160,&quot;335559740&quot;:259}"> </span>

<a href="https://stenciljs.com/" target="_blank" rel="noopener">https://stenciljs.com</a> <span data-ccp-props="{&quot;201341983&quot;:0,&quot;335559739&quot;:160,&quot;335559740&quot;:259}"> </span>

If you prefer a more native JavaScript experience and hate helper technologies like TypeScript and JSX, then Polymer is for you. If you like using TypeScript and JSX, Stencil is the library for you. Personally, I like Angular and React, so the syntax in Stencil is appealing to me. Lots of other people agree, but there's nothing wrong with either library.  <span data-ccp-props="{&quot;201341983&quot;:0,&quot;335559739&quot;:160,&quot;335559740&quot;:259}"> </span>

I also have some Stencil demos available. I have a component library and I consume that library from a React application.  <span data-ccp-props="{&quot;201341983&quot;:0,&quot;335559739&quot;:160,&quot;335559740&quot;:259}"> </span>

Component Library:
<a href="https://github.com/DustinEwers/winning-with-web-components/tree/master/stencil-demo/library" target="_blank" rel="noopener">https://github.com/DustinEwers/winning-with-web-components/tree/master/stencil-demo/library</a>

React Application:
<a href="https://github.com/DustinEwers/winning-with-web-components/tree/master/react-demo/wc-app" target="_blank" rel="noopener">https://github.com/DustinEwers/winning-with-web-components/tree/master/react-demo/wc-app</a>
<h3>Where Web Components Help You Win</h3>
There are a couple of situations where web components are really helpful. The first is when you're building component library for use in lots of different projects.  This can include your own personal library of components, a core library of components for your company, or set public set of components. Companies that make component libraries, like Ionic or Telerik, have much to gain from web components.  <span data-ccp-props="{&quot;201341983&quot;:0,&quot;335559739&quot;:160,&quot;335559740&quot;:259}"> </span>

The second situation is if you want to build a progressive web application. PWAs are rated on their "time to paint", ie. how fast you can get content to show when you load the application. Applications that rely on frameworks can take up to several seconds to load. Web components load instantaneously. Even in my trivial demo code, there's a noticeable different in a page built with web components and one built in React.  <span data-ccp-props="{&quot;201341983&quot;:0,&quot;335559739&quot;:160,&quot;335559740&quot;:259}"> </span>

As we learn how to do more with web technologies, web standards evolve. Component based frameworks have become the dominant paradigm for building modern web apps. While component based frameworks like React and Angular are great, sometimes you don't want or need the bulk. Web components combine several standards to build components using native browser technology. To make things easier, you can use libraries like Polymer and Stencil to help you out. Break free of framework churn by using the platform and building web components.  <span data-ccp-props="{&quot;201341983&quot;:0,&quot;335559739&quot;:160,&quot;335559740&quot;:259}"> </span>

&nbsp;