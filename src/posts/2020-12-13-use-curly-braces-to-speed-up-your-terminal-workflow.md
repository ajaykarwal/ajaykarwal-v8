---
layout: post
title: 'Use curly braces to speed up your Terminal workflow'
permalink: '{{ title | slug }}/index.html'
date: '2020-12-13'
categories:
    - code
tags:
    - terminal
---

Use curly braces to perform multiple actions when dealing with files via the Terminal.

```bash
$ touch myfile-{1..4}.md

// Creates a sequence of files like so
myfile-1.md
myfile-2.md
myfile-3.md
myfile-4.md
```
