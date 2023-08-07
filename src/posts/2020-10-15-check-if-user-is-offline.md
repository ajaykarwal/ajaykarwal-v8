---
layout: post
title: 'Check if user is offline'
permalink: 'blog/{{ title | slug }}/index.html'
date: '2020-10-15'
categories:
    - code
tags:
    - javascript
    - tips
---

It's pretty easy to check if a user is offline with javascript.

```javascript
window.addEventListener('offline', () => console.log('is offline'));
```

This can be useful to display a warning if your application auto-saves at a regular interval.

If the user is offline, the auto-save may fail so a warning message would be a good bit of UX here.
