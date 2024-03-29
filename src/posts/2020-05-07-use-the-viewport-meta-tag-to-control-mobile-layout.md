---
layout: post
title: 'Use the `viewport` meta tag to control mobile layout'
permalink: 'blog/{{ title | slug }}/index.html'
date: '2020-05-07'
categories:
    - code
tags:
    - html
---

Add this single line of code to your webpage's `<head>` section if you're experiencing layout problems on mobile devices.

```markup
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

This is the absolute minimum you will need to make your webpage render properly on mobile.

If you require even greater control over your mobile layout check out the [full viewport meta tag spec](https://developer.mozilla.org/en-US/docs/Mozilla/Mobile/Viewport_meta_tag).
