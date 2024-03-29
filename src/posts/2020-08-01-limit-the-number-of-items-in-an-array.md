---
layout: post
title: 'Limit the number of items in an Array'
permalink: 'blog/{{ title | slug }}/index.html'
date: '2020-08-01'
categories:
    - code
tags:
    - javascript
---

Suppose you have an array of blog posts but only want to show a limited number of results, you can use the `slice()` method to create a new filtered array without mutating the original.

```javascript
const data = [
	// An array of many items
];

// This limit could be an explicit value or retrieved from a configuration setting.
const limit = 5;

// If a limit is set, return the filtered array otherwise return the full array.
const filteredData = limit ? data.slice(0, limit) : data;
```
