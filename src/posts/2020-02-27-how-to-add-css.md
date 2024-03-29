---
layout: post
date: '2020-02-27'
title: 'Three methods for adding CSS to your website'
permalink: 'blog/{{ title | slug }}/index.html'
categories:
    - popular
    - code
tags:
    - css
---

There are multiple ways to write <abbr title="Cascading Style Sheet">CSS</abbr> for your website and the method you choose may vary depending on your chosen CMS or framework, but essentially it boils down to one of the following methods.

-   [Inline Styles](#Inline-Styles)
-   [Style Tag](#Style-Tag)
-   [Linked Stylesheet](#Linked-Stylesheet)

## Inline Styles

Inline styles are added directly to the element which they are to be applied to.

```html
<p style="background-color: indianred; color: palegoldenrod; padding: 10px;">Some paragraph text</p>
```

which would render as

<p style="background-color: indianred; color: palegoldenrod; padding: 10px;">
  Some paragraph text
</p>

Because the styles are applied directly to an element, they do not impact any other elements on the page, so this particular styling will not apply to any other `<p>` elements on the page.

```html
<div>
	<p style="background-color: indianred; color: palegoldenrod; padding: 10px;">A styled paragraph</p>
	<p>An unstyled paragraph</p>
</div>
```

### Pros

-   Styles are scoped only to the element they are applied to so there are no [cascading](https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade) issues.
-   All the styles are contained within the HTML file so only one request needs to be made to the server to fetch your page.

### Cons

-   Managing a large code base is virtually impossible
-   HTML markup becomes bloated

## Style Tag

The `<style>` tag is used to define styling information for a HTML document.

It's recommended to place the `<style>` tag in the `<head>` section of your HTML.

The above inline style translated into a `<style>` tag would look like this.

```html
<head>
	<style>
		p {
			background-color: indianred;
			color: palegoldenrod;
			padding: 10px;
		}
	</style>
</head>
```

The key difference here is that the styling now applies to all `<p>` tags on the page. This is where the cascading (the 'C' in CSS) comes into play.

### Pros

-   Styles are all defined in a single place making them easier to find and manage
-   Still only one request needs to be made to the server to fetch your page.
-   HTML markup becomes cleaner

### Cons

-   Styles are available only to the page on which the `<style>` tag is present.

## Linked Stylesheet

A linked stylesheet would contain your css declarations in a separate file and be linked in the `<head>` section of your HTML like this.

```html
<head>
	<link src="/path/to-your/stylesheet.css" type="text/css" rel="stylesheet" />
</head>
```

We can now move all the css declarations from the `<style>` tag to an external stylesheet which would look like this.

<div class="file">stylesheet.css</div>

```css
p {
	background-color: indianred;
	color: palegoldenrod;
	padding: 10px;
}
```

As with the `<style>` tag, cascading rules also apply when using linked stylesheets.

### Pros

-   Styles are fully separated from markup
-   A single stylesheet can be linked to multiple pages of your website

### Cons

-   The server now needs to make two requests &mdash; one for the `.html` file and one for the `.css` file

## In Conclusion

So which method should you use? Of course, as with most things, it depends.

While all three methods have their benefits and drawbacks, a lot can be said about having styles de-coupled from markup, so having your CSS in a linked stylesheet is the approach I would recommend.

However, sometimes you need to apply some additional inline styling to override [specificity](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity) on a particular element.

There is also the concept of [critical css](https://www.smashingmagazine.com/2015/08/understanding-critical-css/) which uses a combination of inline and external css. You can even [automate this](https://github.com/addyosmani/critical) as part of your build process.

What is your method for adding CSS to your website?

---

## Further reading

[How to add CSS - W3 Schools](https://www.w3schools.com/css/css_howto.asp)
