---
layout: post
title: 'Frontend Development on Windows'
date: '2021-04-27'
permalink: '{{ title | slug }}/index.html'
categories:
    - code
tags:
    - windows
    - moving-to-windows
---

> This post is part of my [Moving to Windows](/tags/moving-to-windows/) series.


Pick almost any code repository from the last 5-7 years and you'll likely find it has a `package.json` file full of dependencies, a decent `README.md` file telling you how to get started, and perhaps some 'dot files' to help keep things in check. 

Because of this, setting getting a project up and running locally is usually as simple as running `npm install` followed by `npm start` and you're off.

Luckily, all the projects I needed to port over from macOS to Windows followed this pattern so I had zero trouble getting any of my projects to compile and run.

Of course there's a brief list of prerequisites which need to be dealt with first but fortunately I've had a 'new computer setup' note in my iPhone for a while now to refer to.

## Getting started

For most people, including myself, installing Git, Node and the CLI tools for your chosen frameworks (React, Angular etc..) covers about 90% of the frontend dev requirements. 

These can all be installed via the instructions on their respective websites, or if you were a [Homebrew](https://brew.sh/) user on macOS, you can also use [Homebrew on Windows](https://docs.brew.sh/Homebrew-on-Linux) if you've enabled the Windows Subsystem for Linux (WSL). Alternatively, Windows has its own package manager — [Chocolatey](https://chocolatey.org/) — which works in pretty much the same way as Homebrew. Another option is [Ninite](https://ninite.com/).

OK, now, install VS Code, sync your settings (you do have your settings synced right!?), set Chrome as your default browser and you're ready to go.

Well... almost.

## Command Line

Coming from macOS you're probably used to `bash` or `zsh` as your Terminal shell. Well on Windows you're going to have to put in a little work for a nicer command line experience.

After trying to get by with the default Command Prompt and Powershell applications, I quickly realised that they didn't fit with the way I'm used to working. 

Previously on macOS I had a bunch of [Terminal aliases](/speed-up-your-terminal-workflow-with-aliases-on-macos/) set up to speed up my workflow which is super simple in `bash`. On Windows Command Prompt (and Powershell) you need to use the `DOSKEY` utility and start messing around with registry values to make the aliases persist when command prompt is closed, which is a bit of a nightmare. [Here's how to do it](https://stackoverflow.com/a/21040825) if you're interested though.

Command Prompt also doesn't track you history by default when the application is closed so pretty quickly you find that you're having to jump through a lot of hoops and do lots of hacking to make things work nicely.

Enter, [cmder](https://cmder.net/), which is a really nice console emulator for Windows. It's highly customisable, saves your command history, and most importantly for me, makes it really easy to port your bash aliases over from macOS.

So... install cmder. Just do it. Trust me.

Oh.. and after installing Git, you also have the option to set Git Bash as your default in VS Code's integrated terminal if that's you preferred way of working.

## Wrapping up

And honestly, when it comes to frontend development on Windows, that's pretty much all there is to it. We're at a good place in frontend dev right now which makes writing HTML, CSS and JavaScript easily accessible no matter what your computer setup may be. 

Most of the tooling is fully compatible across platforms and cloud syncing takes away all the friction of moving to a new system, whether that is Mac to Windows; Windows to Mac; or simply setting up a new laptop.

I've been on Windows for a few weeks now and haven't run into any show-stopping issues with frontend development.