---
layout: post
title: 'Change the default save location for screenshots on macOS'
permalink: 'blog/{{ title | slug }}/index.html'
date: '2020-07-23'
categories:
    - code
tags:
    - macos
    - terminal
---

First of all, here's [how to take a screenshot on Mac](https://support.apple.com/en-gb/HT201361).

By default, macOS saves screenshots to the Desktop.

If you want to save your screenshot in a custom location, you can use this command:

```bash
defaults write com.apple.screencapture location ~/your/location/here
```

You now need to restart the system UI server, so run this command:

```bash
killall SystemUIServer
```

And that's it. Screenshots will now be saved to your new location.

To change back to the default location you can run

```bash
defaults write com.apple.screencapture location ~/Desktop/

# Followed by
killall SystemUIServer
```
