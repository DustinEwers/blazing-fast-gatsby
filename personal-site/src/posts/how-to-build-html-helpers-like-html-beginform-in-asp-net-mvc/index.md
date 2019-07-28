---
id: 25
title: How to Build HTML Helpers like Html.BeginForm() in ASP.NET MVC
date: 2015-03-18T12:46:19+00:00
author: Dustin Ewers
layout: post
guid: http://e1b5b012-5534-45dc-9091-4f80b0757c32
permalink: /how-to-build-html-helpers-like-html-beginform-in-asp-net-mvc/
categories:
  - ASP.NET
---
If you've used ASP.NET MVC for more than five minutes, you've probably used the Html.BeginForm helper method.

<pre><code class="csharp">
@using (Html.BeginForm()) {
// Form Fields go here
}
</code>
</pre>

This method wraps your content in a form tag. It's a handy way to build forms, but we can also create our own html helpers for other container elements. In this post, I'm going to show you how to wrap a Bootstrap row in an HTML helper.

Bootstrap, the UI library that comes with .NET, makes it easy to build professional looking web applications. One of it's primary disadvantages, however, is that you have to write a lot of markup to get your layouts to work correctly. We can reduce this by creating a custom HTML Helper that works like Html.BeginForm().

<pre><code class="csharp">
@using (Html.BeginRow()) {
// Grid content goes here
}
</code>
</pre>

<h4 id="step1">Step 1</h4>

Create a Private Class that implements IDisposable. Have the constructor take a TextWriter object. Set the dispose method to use the text writer to output the closing tag for the row.

<pre><code class="csharp">
private class RowContainer : IDisposable {
    private readonly TextWriter _writer;

    public RowContainer(TextWriter writer) {
        _writer = writer;
    }

    public void Dispose()
    {
        _writer.Write("&lt;/div&gt;");
    }
}
</code>
</pre>

<h4 id="step2">Step 2:</h4>

Create an HTML helper extenstion method that creates the beginning tag and returns the object created in Step 1. You can use ViewContext.Writer to directly output the markup.

<pre><code class="csharp">
public static IDisposable BeginRow(this IHtmlHelper htmlHelper, string cssClass = "") {
    var writer = htmlHelper.ViewContext.Writer;
    writer.WriteLine(string.Format("&lt;div class='row{0}'&gt;", cssClass));
    return new RowContainer(writer);
}
</code> 
</pre>

<h4 id="step3">Step 3</h4>

Use the helper in your Razor view with a using statement, just like BeginForm(). When the using statement disposes the returned object, it'll close out the tag.

<pre><code class="csharp">
@using (Html.BeginForm()) {
// Form Fields go here
}
</code>
</pre>

<h4 id="additionalinformation">Additional Information</h4>

<a href="https://github.com/DustinEwers/dot-net-mvc-ui-demos/blob/master/UIDemos/src/UIDemos/Helpers/HtmlHelpersExtensions.cs">Full Code</a>