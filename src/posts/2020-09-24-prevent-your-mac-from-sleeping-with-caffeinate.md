---
layout: post
title: 'Prevent your Mac from sleeping with `caffeinate`'
permalink: 'blog/{{ title | slug }}/index.html'
date: '2020-09-24'
categories:
    - code
tags:
    - macos
---

Consider this scenario.

You're reading a long-form article on your Mac while also jotting down some notes. You take your hands of the keyboard and mouse and lean back in your chair a little.

Five minutes pass and while you're in the middle of reading a sentence your Mac screensaver is actived and breaks your flow.

😠

There are a couple of Apps available which will prevent your Mac from sleeping such as [Amphetamine](https://apps.apple.com/us/app/amphetamine/id937984704?mt=12) or [Caffeine](https://www.zhornsoftware.co.uk/caffeine/index.html), but you can also do the same with a simple Terminal command — `caffeinate`.

```bash
caffeinate
```

This will pervent your Mac from going to sleep. The command will continue to run indefinitely and will block the current Terminal instance, so you'll need to start a new Terminal tab/window if you need to continue to work in the Terminal.

```bash
caffeinate -t 600
```

Use the `-t` flag to set an optional timout in seconds. The example above will prevent the Mac from sleeping for 10 minutes.

You can press `control + c` at any time to cancel the command.
