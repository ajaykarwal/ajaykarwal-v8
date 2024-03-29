---
layout: post
title: 'Dark Mode CSS Media Query'
permalink: 'blog/{{ title | slug }}/index.html'
date: '2020-11-01'
categories:
    - code
tags:
    - css
---

It's super easy to detect whether a user has their device set to Dark or Light mode using a CSS media query.

```css
@media (prefers-color-scheme: dark) {
	/* Styles for users who prefer dark mode */
}

@media (prefers-color-scheme: light) {
	/* Styles for users who prefer light mode */
}
```

You should only need to use one of these queries, as the user will default to the code outside of the media query if the condition isn't met.

[Robin Rendle](https://css-tricks.com/dark-modes-with-css/) provides some further advice on how to adjust your content for Dark Mode. It's not as simple as white text on a black background.

Browser support is pretty much universal.

{% lightbox 'prefers-color-scheme.png', 'CanIUse prefers color scheme data' %}
