---
layout: post
title: 'Add CSS to console logs'
permalink: 'blog/{{ title | slug }}/index.html'
date: '2020-08-24'
categories:
    - code
tags:
    - css
    - console
---

Having lots of `console.log()` statements in your JavaScript (while you're in dev mode of course, remove them in production!) your console can quickly become cluttered and all the logs can start looking the same.

You can add CSS to your console logs be simply adding the color flag `%c` before the logged message and passing a string of CSS as the second argument.

```javascript
console.log('%c Hello World!', 'font-size:3em; background: #073642; color: #EEE');
```

{% lightbox 'console-colours-1024x684.png', 'Console colours example' %}

This can be a useful when you need to highlight key bits of information in your console to make your debugging easier.
