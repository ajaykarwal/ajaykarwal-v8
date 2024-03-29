---
layout: post
title: 'Empty a JavaScript Array'
permalink: 'blog/{{ title | slug }}/index.html'
date: '2020-12-24'
categories:
    - code
tags:
    - javascript
    - links
---

[Ahmed Awais](https://twitter.com/MrAhmadAwais) shared this simple tip to empty a JavaScript Array.

```javascript
arr.length = 0;
```

So simple right? But why would you want to do this?

Perhaps your application uses an array to store a list of products, and when a user applies a filter facet, you could empty the array before populating it again with the new set of filtered products.

Check out the original tweet below for more discussion on the topic.

https://twitter.com/MrAhmadAwais/status/1256282166440452096
