---
layout: post
date: '2020-03-18'
title: 'My current tech in 2020'
permalink: 'blog/{{ title | slug }}/index.html'
categories:
    - tech
tags:
    - tools
---

As with any job it's important to keep up to date with the latest technology and trends, but with software development — frontend development in particular — things change at such an alarming speed that many tech trends become obsolete before people even get a chance to explore them.

While the tools and tech I'm using today aren't vastly different than this time last year, I figured I'd create this snapshot of what I'm currently using.

## Code Editor

For over 4 years now I've been using [Visual Studio Code](https://code.visualstudio.com/) as my primary code editor. If you haven't tried VS Code yet you really need to. It's free, lightning fast, highly customisable and supports virtually all programming languages you can throw at it.

If there's something you feel is missing from VS Code out-of-the-box, there's probably an extension for it on the [VS Code Marketplace](https://marketplace.visualstudio.com/VSCode). I talked about [some of my favourite VS Code extensions](https://inspect.fm/episodes/20/) over on **Inspect** — my [podcast about Design + Development](https://inspect.fm).

## Languages and Frameworks

Day to day I'm using a pretty standard frontend stack of HTML, CSS and JavaScript.

### Markup

I don't explicitly write large amounts HTML these days as the markup for the projects I work on are usually coming from somewhere in the backend or from a CMS.

In my day job at [ecx.io](https://www.ecx.io/) we use a mixture of Adobe Experience Manager (AEM), SAP Hybris and Sitecore on the backend and I sit within the AEM team so most of the markup I write is in [HTL](https://docs.adobe.com/content/help/en/experience-manager-htl/using/getting-started/update.html) (no that's not a typo). HTML Template Language (also known as 'Sightly') is Adobe Experience Manager’s preferred and recommended server-side template system for HTML.

HTL makes use of `data` attributes to add logic into HTML templates, similar to how [Angular](https://angularjs.org/) uses the `ng-` attribute. For example, a simple unordered list in HTL could look like this.

```java
<ul data-sly-list.item="${component.items}">
  <li>${item.title}</li>
</ul>
```

When I'm working on smaller projects or brochure websites, I tend to reach for a static site generator such as [Jekyll](https://jekyllrb.com/). It's great for creating simple websites which don't require a full backend but could still benefit from some server-side logic.

My own website was built in Jekyll for several years until I recently switched over to [Gatsby](https://www.gatsbyjs.org/) — another static site generator built on React.

### CSS

When [adding CSS to a website](/how-to-add-css), I pretty much always reach for [Sass](https://sass-lang.com/) and use either [gulp](https://gulpjs.com/) or [webpack](https://webpack.js.org/) to compile it. AEM uses [Less](http://lesscss.org/) out-of-the-box but there's a [plugin](https://github.com/eirslett/frontend-maven-plugin) for switching over to Sass too.

### JavaScript

In 2020, everything is JavaScript. Currently in its [10th edition](https://en.wikipedia.org/wiki/ECMAScript#10th_Edition_-_ECMAScript_2019), JavaScript has really matured over the past few years with new features being added at least every year. It's for that reason that most of the JavaScript I write these days is [vanilla](http://vanilla-js.com/). With features like [Element.querySelector()](https://developer.mozilla.org/en-US/docs/Web/API/Element/querySelector), [ES6 Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array), and [Arrow Functions](https://www.w3schools.com/js/js_arrow_function.asp), there really is no need for a JS framework such as jQuery these days.

Don't get me wrong, I love [jQuery](https://jquery.com/). Like many it was my first exposure to JavaScript and I personally feel that learning jQuery made it easier for me to learn vanilla JavaScript. We still use jQuery in many of our legacy projects at work so I don't imagine it disappearing any time soon but it is definitely not a necessity anymore.

Over the past year I've been learning [React](https://reactjs.org/). We're starting to adopt React in a few projects at [ecx.io](http://ecx.io/) and I recently converted my own website from Jekyll to Gatsby, which is built on React and [GraphQL](https://graphql.org/).

## Hosting

I’m using [Netlify](https://www.netlify.com/) for all of my personal hosting. It’s totally free for most projects and you can get a site hosted on a custom domain within a matter of minutes. It’s a brilliant service which I encourage everyone to try out.

## Design

About a year ago I ditched Photoshop as my primary design tool and switched over to [Sketch](https://sketch.com/). I’d say it took at least 6 months for me to break the old muscle memory I had from using Photoshop for over 10 years but I’m glad I made the switch. For UI design (which is primarily what I do these days), Sketch is the right tool for the job.

For raster graphics and photo editing I occasionally use [Affinity Photo](https://affinity.serif.com/en-gb/photo/) which is a serious contender for Photoshop for a fraction of the price. It’s similar enough to feel familiar but also different enough that it takes a while to transfer your skills over.

## Other tools and hardware

You can also check out some of the [hardware and software I use](/uses) on a regular basis.

## Final thoughts

I really enjoyed documenting the current state of the tech that I use and I’ll definitely be making this an annual review.

I’d love to know what you’re using in 2020.
