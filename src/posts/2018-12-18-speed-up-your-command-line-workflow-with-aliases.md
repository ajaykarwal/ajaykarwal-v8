---
layout: post
date: '2018-12-18'
title: 'Speed up your Terminal workflow with aliases on macOS'
permalink: 'blog/{{ title | slug }}/index.html'
categories:
    - code
tags:
    - terminal
    - macos
---

Whether your just starting out on your development journey or you're a seasoned pro, chances are you'll be reaching for the Terminal app on a regular basis.

I for one don't particularly enjoy using the Terminal but seeing as it's inevitable, you can make the whole process a little easier by setting up some simple time-saving aliases.

## Creating aliases

An aliases is simply a custom shortcut or abbreviation to a more verbose Terminal command.

Let’s create a temporary alias in the command line for `ls -l` (list of the current directory contents using a long listing format). Open Terminal and run the following command:

```shell
alias ll="ls -l"
```

_Note: There must not be any spaces before or after the equal sign otherwise the alias will not work._

Now if you type `ll` in your Terminal you should see something like this.

```shell
drwx------@  5 user  staff   160B 19 Jan 14:55 Applications/
drwx------+  5 user  staff   160B 12 Jun 17:12 Desktop/
drwx------+ 14 user  staff   448B 30 Apr 12:48 Documents/
drwx------+ 12 user  staff   384B 14 Jun 15:35 Downloads/
drwx------@ 25 user  staff   800B 11 Jun 10:06 Dropbox/
drwx------@ 19 user  staff   608B  8 Jun 09:27 Google Drive/
drwx------@ 71 user  staff   2.2K 24 May 12:41 Library/
drwx------+  4 user  staff   128B 29 Mar 14:36 Movies/
drwx------+  5 user  staff   160B 29 Mar 17:40 Music/
...
...
```

As previously mentioned, this is just a temporary alias. It will be removed when you quit the current Terminal session.

## Creating permanent aliases

To make aliases permanent, we have to set them in a `~/.bash_profile` file which is read when you open Terminal.

Use the command `ls -al` to check if you already have a .bash_profile file.

If not, you can create one by typing

```shell
touch .bash_profile
```

Open to edit the file by running the following:

```shell
nano ~/.bash_profile
```

You can also open and edit it with your code editor. I use Visual Studio Code with the command `code ~/.bash_profile`.

Add the following lines, save the file and then restart Terminal.

```shell
# -------
# Aliases
# -------
alias ll="ls -l"
```

You can also tell Terminal to reload the ~/.bash_profile file using the source command:

```shell
source ~/.bash_profile
```

## Useful Aliases

Here are some of the aliases I have set up which you may also find useful.

```shell
alias ..="cd .."          # Up 1 directory
alias ...="cd ../.."      # Up 2 directories
alias ....="cd ../../.."  # Up 3 directories
alias cd..="cd .."        # Because typing the space is for amateurs!

alias ls="ls -GFh"        # A nicer looking list
alias ll="ls -l"          # List current directory contents
alias la="ls -la"         # List all, including dotfiles

alias o="open ."          # Open the current directory in Finder

alias ip="dig +short myip.opendns.com @resolver1.opendns.com" # Public IP
```

## Other ideas

This website is built using [Jekyll](http://jekyllrb.com) and while I'm doing local development I always need to change to my project directory and run `bundle exec jekyll serve --watch`. This is a perfect candidate for an alias which I've set up as

```shell
alias jw="bundle exec jekyll serve --watch" ## Run the Jekyll serve and watch
```

I could go one step further and chain the `cd` command in there too so I can change directory and start up Jekyll all in one alias, e.g.

```shell
alias sitedev="cd ~/dev/sites/ajaykarwal-com/ && bundle exec jekyll serve --watch"
```

Notice the use of `&&` to chain a second command on.

## Conclusion

Aliases are a great way to save a few keystrokes as you ramp up your Terminal commands usage. Give it a go and take a step closer to becoming a command line power user!
