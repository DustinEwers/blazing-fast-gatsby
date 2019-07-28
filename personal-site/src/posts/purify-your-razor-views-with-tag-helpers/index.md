---
id: 21
title: Purify Your Razor Views With Tag Helpers
date: 2015-05-08T06:41:53+00:00
author: Dustin Ewers
layout: post
guid: http://ae06e2eb-17bd-40fc-8e66-9b1474f8c85f
permalink: /purify-your-razor-views-with-tag-helpers/
categories:
  - ASP.NET
---
Hate mixing HTML and C# code in your Razor views? Work with designers who are markup ninjas, but scratch their heads at a view full of HTML helpers?

If so, then ASP.NET vNext has a feature for you. It's called tag helpers. Tag helpers are custom HTML attributes or tags that you place in your view code. Using tag helpers, you can remove most of the C# code from your views. You can use them instead of HTML helpers. Like HTML Helpers, they render in the browser as standard HTML.

<blockquote><em>Note -</em> This post covers Tag Helpers in the *-beta4 version of ASP.NET MVC.

All of the source code used in this post can be found on github at <a href="https://github.com/DustinEwers/dot-net-mvc-ui-demos">https://github.com/DustinEwers/dot-net-mvc-ui-demos</a>. Look in the ASPNET5 folder.</blockquote>

<h4 id="usingtaghelpers">Using Tag Helpers</h4>

Here's an example of tag helpers in action:
<img src="https://dustinewers.com/content/images/2015/05/Screen-Shot-2015-05-07-at-12-49-00-PM.png" alt="Tag Helper View Photo" />

Notice the lack of C# code. Almost everything here is markup. All the HTML attributes that begin with "asp-" are tag helpers. This form is from the default ASP.NET template. For comparison, here's a similar form (from the template in the last version of ASP.NET MVC) built using standard HTML helpers:
<img src="https://dustinewers.com/content/images/2015/05/Screen-Shot-2015-05-07-at-12-46-36-PM.png" alt="Standard View Photo" />

ASP.NET MVC comes with lots of built in tag helpers. Here's some of the more notable ones:

<ul>
    <li><strong>asp-for</strong> -&gt; Adds the model specific attributes to the HTML element. This replaces HTML Helpers like "Html.LabelFor" and "Html.TextBoxFor"</li>
    <li><strong>asp-controller</strong> and <strong>asp-action</strong> -&gt; Works with your form tags to emit the appropriate route. These replace "Html.BeginForm"</li>
    <li><strong>asp-items</strong> -&gt; Populates your dropdown list with items from the model.</li>
    <li><strong>asp-validation-for</strong> -&gt; This attribute is used to populate the validation summary at the bottom of each element.</li>
</ul>

To use tag helpers in your project, you need to ensure the tag helper directive is in your project.

<pre><code>@addTagHelper "*, Microsoft.AspNet.Mvc.TagHelpers"
</code></pre>

This directive points to the assembly that contains the tag helpers. This will give your project access to the standard ASP.NET tag helpers. You can either put this on the page that uses tag helpers, or you can put it in a global page like _ViewStart.cshtml. In the default template it's in _GlobalImport.cshtml.

<h4 id="makingcustomtaghelpers">Making Custom Tag Helpers</h4>

The built in tag helpers are great, but you can also make your own tag helpers. A tag helper is a filter. They allow you to change the tag's output while it's being written to the view. Here's a tag helper that creates a Bootstrap form group container:

<pre><code>    public class FormgroupTagHelper : TagHelper
    {
        private const string SizeAttributeName = "size";

        public override void Process(TagHelperContext context, TagHelperOutput output)
        {
            int size;
            Int32.TryParse(context.AllAttributes[SizeAttributeName].ToString(), out size);

            output.TagName = "div";
            output.Attributes["class"] =  string.Format("form-group col-md-{0}", size);
            output.Attributes.Remove(SizeAttributeName);
        }
    }
</code></pre>

In this example, we change the name of the tag to a div, take a parameter from an attribute, add a css class, and remove the size attribute (a custom attribute we are using as a parameter).

To build a custom tag helper, you first need to build the tag helper class. Naming is important. The class name must end with "TagHelper" and inherit the TagHelper class. Then you can override the Process or ProcessAsync methods to add your custom logic. In the process method, you can alter the tag in any way you like. You can add or remove attributes and classes. You can also change the name of the tag.

After building your tag helper class, you need to add another addTagHelper directive to your view. This one will be for the assembly that contains the tag helper.

Then, you can use your tag helper in your views. Here's our formgroup tag helper in action. The "size" parameter is used by the tag helper to set the container size for the form group.

<pre><code>&lt;formgroup size="4"&gt;  
   &lt;label asp-for="Address1"&gt;&lt;/label&gt;
   &lt;input asp-for="Address1" class="form-control" /&gt;
   &lt;span asp-validation-for="Address1"&gt;&lt;/span&gt;
&lt;/formgroup&gt;  
</code></pre>

And this is a whole page using both custom and built in tag helpers:
<img src="https://dustinewers.com/content/images/2015/05/Screen-Shot-2015-05-07-at-12-38-29-PM.png" alt="Custom Tag Helpers Photo" />

<h4 id="conclusion">Conclusion</h4>

Tag helpers are a great new feature in ASP.NET vNext. With them, you can make views that look more like web pages than a weird hybrid of web pages and C#. Start up a project in Visual Studio 2015 or grab my demo code and check out tag helpers for yourself.

Additional Resources:
<a href="https://github.com/DustinEwers/dot-net-mvc-ui-demos">Demo Code</a>

<a href="https://github.com/aspnet/Mvc/tree/dev/src/Microsoft.AspNet.Mvc.TagHelpers">Tag Helpers Source Code</a>