---
layout: post
title: 'How to check which version of jQuery is loaded'
permalink: 'blog/{{ title | slug }}/index.html'
date: '2020-06-28'
categories:
    - code
tags:
    - javascript
    - jquery
---

You can easily check which version of jQuery is loaded on a page (or whether it is loaded at all) by running either of these commands in your browser console.

```shell
jQuery().jquery

jQuery.fn.jquery

$().jquery

$.fn.jquery
```

All four of these commands will return the same result. If jQuery is loaded successfully, you will recieve the version number, e.g `3.5.1`.

If jQuery is not loaded you will recieve a message along the lines of `ReferenceError: jQuery is not defined`.

---

Do you still use jQuery in your projects? Is the library still relevant considering the advances in vanilla JavaScript?
