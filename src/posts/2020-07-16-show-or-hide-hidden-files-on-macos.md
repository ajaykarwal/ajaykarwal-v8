---
layout: post
title: 'Show or Hide hidden files on macOS'
permalink: '{{ title | slug }}/index.html'
date: '2020-07-16'
tags:
    - macos
    - terminal
---

By default, files which begin with a dot (e.g. `.gitignore`) on macOS are hidden from the Finder app. You can however, quickly show or hide these files with a simple Terminal script.

```bash
# Show files
$ defaults write com.apple.finder AppleShowAllFiles YES
$ killall Finder

# Hide files
$ defaults write com.apple.finder AppleShowAllFiles NO
$ killall Finder
```
