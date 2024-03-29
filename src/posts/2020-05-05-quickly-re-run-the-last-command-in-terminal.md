---
layout: post
date: '2020-05-05'
title: 'Quickly re-run the last command in terminal'
permalink: 'blog/{{ title | slug }}/index.html'
categories:
    - code
tags:
    - terminal
    - tips
---

A simple way to re-run the last command in Terminal is to simple press the `up arrow` key and hit enter.

Terminal’s built in history saves all your commands so you can use the up and down arrow keys to scroll through them.

Another way to run the last command is with the “double bang”.

```shell
$ !!
```

Now, suppose you run a command and receive a permissions warning. You now want to re-run the last command but need to append `sudo` to the front.

You could press the `up arrow` and then use your `left arrow` key to move your cursor to the beginning of the command and type in `sudo`, which I’m sure you’ll agree is long-winded. Here’s a simpler way:

```shell
$ sudo !!
```

The `!!` is a placeholder for the previously run command, meaning there’s no need to re-type everything again.

> As with all things in the Terminal — use with caution.
