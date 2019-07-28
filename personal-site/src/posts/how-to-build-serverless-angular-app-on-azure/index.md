---
id: 438
title: How to Build a Serverless Angular App on Azure
date: 2017-10-09T00:26:28+00:00
author: Dustin Ewers
layout: post
guid: https://dustinewers.com/?p=438
permalink: /how-to-build-serverless-angular-app-on-azure/
thrive_post_fonts:
  - '[]'
thrive_share_count:
  - '{"facebook":4,"twitter":0,"plusone":0,"pinterest":0,"linkedin":4,"total":8,"last_fetch":1507652081,"url":"https://dustinewers.com/how-to-build-serverless-angular-app-on-azure/"}'
categories:
  - Angular
  - Cloud
  - JavaScript
  - Software Architecture
  - Software Design
---
Building web applications is hard work. Not only do you have to build the application, you need to figure out where to host it. Ever want to skip all the frustrating server provisioning and focus on your code? If so, then serverless architecture is worth a look. In this article, you will learn how to build setup a serverless Angular app using Azure.
<h3>What exactly do you mean by "serverless"?</h3>
The term "serverless" is <a href="http://www.commitstrip.com/en/2017/04/26/servers-there-are-no-servers-here/" target="_blank" rel="noopener">somewhat misleading.</a> There are still servers, but you don't have to care about them.

Serverless architecture runs on managed services that host your code. Server level concerns like figuring out how much memory you need, fault tolerance, and scalability are abstracted away. You don't need to pick out a VM or service tier. The service scales automatically. You upload your code and go. The service takes care of the rest.

Serverless platforms come in several different flavors including APIs like Firebase and functions as a service (FAAS). FAAS is where you host small bits of code in the cloud. Think micro-services to the nth degree. All of the major cloud providers have some flavor of FAAS. Examples include: Amazon Lambda, Google Cloud Functions, and Azure Functions. You can even host your own FAAS using OpenFAAS, though that kinda defeats the point. (<a href="https://github.com/anaibol/awesome-serverless" target="_blank" rel="noopener">comprehensive list of serverless platforms</a>)

For the purposes of this application, we are going to use Azure Functions for our backend API.
<h3>Where do we put the web site?</h3>
While Angular application are complex to develop, they compile into a handful of static files. There's no reason you can't throw these files up on any commodity static host. In this case, we're going to use Azure Web Sites. While this solution isn't 100% serverless, (you have to pick a hosting tier) hosting a handful of files on the free tier is close enough for me. To add another layer of performance, we're also going to use Azure CDN to cache the files so they load quickly.
<h3>Roadmap</h3>
Here's what we're going to do:
<ul>
 	<li>Build an API using Azure Functions</li>
 	<li>Setup an Azure Web App to host our Angular application</li>
 	<li>Setup Azure CDN to serve those files more quickly</li>
 	<li>Add CORS headers on our function app so we can use it with our Angular app</li>
 	<li>Setup a SPA redirect to prevent unintended 404 errors</li>
</ul>
<h3>Building an API with Azure Functions</h3>
We start off by creating a new Azure Function app. Starting from the <a href="https://portal.azure.com" target="_blank" rel="noopener">Azure Portal</a>, click "New" search for "function" and click Function App. This will bring you to the new function app blade. Type in your app name (it has to be unique), add the rest of your info and click Create.

<img class="alignnone size-full wp-image-443" src="/wp-content/uploads/2017/10/1-Functions-1-Create-App.png" alt="" width="657" height="1392" />

Now we're going to make a function. Either hit the plus sign or click "New Function". This brings you to the function template screen before. Functions can be activated by a variety of triggers including DB requests, files, and manual activation. We're going to use the HTTP Trigger. HTTP triggers are activated by an HTTP request. Select "HttpTrigger - C#".

<img class="alignnone size-full wp-image-444" src="/wp-content/uploads/2017/10/1-Functions-2-New-Function.png" alt="" width="1346" height="1012" />

You should now have this lovely boilerplate. This code can handle any http request and sends back a response.

<img class="alignnone size-full wp-image-445" src="/wp-content/uploads/2017/10/1-Functions-3-Default-Code.png" alt="" width="2270" height="1171" />

Let's ditch that boilerplate and drop in our API code. This is just going to be a simple GET request. Feel free to pretend we're calling a database here instead of just returning a list.

<img class="alignnone size-full wp-image-446" src="/wp-content/uploads/2017/10/1-Functions-3b-Add-Custom-Code.png" alt="" width="1254" height="1255" />

If you'd like to test your shiny new function, click the "get function url" link and drop that into Postman. As you can see here, things are working splendidly.

<img class="alignnone size-full wp-image-447" src="/wp-content/uploads/2017/10/1-Functions-4a-Testing-in-Postman.png" alt="" width="1885" height="1487" /> You can also test using the built-in testing utility on the right side of the function window.

<img class="alignnone size-full wp-image-448" src="/wp-content/uploads/2017/10/1-Functions-4b-Testing-in-App.png" alt="" width="633" height="1238" />
<h3>Setting up an Azure Web Site</h3>
Now that we have our backend setup, let's put together our front end. In this case, we're going to set up an Angular application built with the Angular CLI. Since this post is about setting up the architecture, I'm not going to go into great detail about the application itself, which can be found in <a href="https://github.com/DustinEwers/angular-and-dotnet/tree/master/serverless/angular-app/taco-truck-web" target="_blank" rel="noopener">this github repo</a>. If you're using another front-end library like React or Vue.js, this setup should be mostly the same.

To begin, create an Azure Web App. (New -&gt; Web App). The free tier should be adequate for our needs. We're just hosting a few files. If you want to use your own custom domain, you'll need to use a higher tier.

<img class="alignnone size-full wp-image-453" src="/wp-content/uploads/2017/10/2-Web-App-1.png" alt="" width="643" height="1414" />

Now we need to get the static files to host. If you're using Angular CLI (and you should be...), the command to do this is:

~~~~ng build --prod --aot~~~~

After that command runs, head over to the dist folder of your angular app. It should look something like this:

<img class="alignnone size-full wp-image-454" src="/wp-content/uploads/2017/10/2-Web-App-2-Angular-Files.png" alt="" width="1541" height="682" />

The next step is to get your static files into the web app. I used FTP, though you can download a publish profile if you want. Drop your static files into the wwwroot folder. At this point, you should be able go to the URL and your app will load.

<img class="alignnone size-full wp-image-455" src="/wp-content/uploads/2017/10/2-Web-App-3-FTP-Folder.png" alt="" width="1447" height="502" />

The next step is to set up a CDN. Since these are just static files, we can use a CDN to serve them. Azure CDN also allow us to serve the site over https without having to pay for a plan that supports SSL. To set one up, go to New, search "CDN", click "CDN", and click "Create".

This brings up the CDN profile blade. Type in your name, select "Standard" for your pricing tier, and select your web site from the dropdown. Then click "Create". Now you have a CDN for your static files.

<img class="alignnone size-full wp-image-456" src="/wp-content/uploads/2017/10/3-CDN-Setup-2.png" alt="" width="641" height="1314" />
<h3>Setting up CORS</h3>
Now that we have our web app in place, we need to set up the CORS (cross origin resource sharing) headers on our function. Browsers, by default, prevent your website from accessing APIs that don't match the url of your web application (CORS error pictured below). This feature helps to prevent Cross Site Request Forgery (CSRF) attacks, but is sometimes kind of annoying. If you want to use your function API from your web application, you'll need to add a CORS header to your API.<img class="alignnone size-full wp-image-449" src="/wp-content/uploads/2017/10/1-Functions-5-CORS-error.png" alt="" width="2048" height="331" />

To begin, go back to your function app and go to the "Platform features" tab and click "CORS".

<img class="alignnone size-full wp-image-450" src="/wp-content/uploads/2017/10/1-Functions-5a-CORS.png" alt="" width="1697" height="1315" />

This brings you to the CORS screen. Add the url/s of your web app. You can use "*", which is the wildcard route, but you shouldn't because it's rather insecure. It's best to use your web app's URL here.

<img class="alignnone size-full wp-image-452" src="/wp-content/uploads/2017/10/1-Functions-5c-CORS-Specific-Name.png" alt="" width="1179" height="1042" />
<h3>Setting up a SPA Redirect</h3>
At this point, we have a functioning web application, but there's still one more issue to resolve. Like most SPA applications, Angular supports client side urls that don't correspond to server-side resources. All of our application code is served from index.html on the root url, but we use the Angular router to map urls to parts of the application. For example, in our sample app, if we navigate from the home page to the Products page it works great, but if we hit refresh we get a 404. (error below) This is because there's no page on the server for that URL. To fix this we need to add a URL re-write rule to redirect anything that's not a static asset back to the index page.

<img class="alignnone size-full wp-image-458" src="/wp-content/uploads/2017/10/5-URL-Rewrite-1-Error.png" alt="" width="1433" height="313" />

To do this, we're going to create a web.config file with our rewrite rule.

Here's our rule (<a href="https://github.com/DustinEwers/angular-and-dotnet/blob/master/serverless/angular-app/web.config" target="_blank" rel="noopener">finished product</a>):

<img class="alignnone size-full wp-image-459" src="/wp-content/uploads/2017/10/5-URL-Rewrite-2-Fix.png" alt="" width="1723" height="663" />

This rule takes anything that isn't a file, directory, or an asset (*.html, *.js, *.css) and redirects it to the index page. If you have fonts or images in your application, you should probably add rules for those file extensions as well.

Then, take that web.config file and drop it into the wwwroot folder of our web app. App urls should now redirect appropriately.
<h3>Conclusion</h3>
If you'd like to build an Angular application and host it for cheap in the cloud, this is a great way to do it. The serverless architecture is great for MVPs, simple applications, and proof of concept applications. It's an easy way to get code into the world with minimum fuss.
<h3>References / Additional Information</h3>
If you'd like additional information or access to the code referenced in this post, check out the links below.

<a href="https://github.com/DustinEwers/angular-and-dotnet/tree/master/serverless" target="_blank" rel="noopener">Demo Code</a>

<a href="https://www.microsoft.com/middleeast/azureboxes/cloud-hosting-for-a-static-website.aspx" target="_blank" rel="noopener">Cloud hosting for a static website</a>

<a href="https://docs.microsoft.com/en-us/azure/azure-functions/functions-how-to-use-azure-function-app-settings" target="_blank" rel="noopener">Azure Functions Docs</a>

<a href="https://stackoverflow.com/questions/36630536/rewriting-a-url-in-an-azure-web-app" target="_blank" rel="noopener">URL Rewrites in an Azure Web App</a>

<a href="https://docs.microsoft.com/en-us/iis/extensions/url-rewrite-module/creating-rewrite-rules-for-the-url-rewrite-module" target="_blank" rel="noopener">URL Rewrite Docs</a>