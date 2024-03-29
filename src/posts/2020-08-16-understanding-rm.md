---
layout: post
title: 'Understanding `rm`'
permalink: 'blog/{{ title | slug }}/index.html'
date: '2020-08-16'
categories:
    - code
tags:
    - terminal
---

> **Warning:**
> The `rm` command could potentially destroy your whole filesystem.
> Use with caution.

`rm` is a destructive terminal command. It's used to permanently delete files and directories, forever, with no concept of a 'trash can'.

Destroy a file:

```bash
rm someFile.txt
```

That's it. Its gone. No warning. No confirmation. No Undo's!

You can use glob patterns to drill down into directories and delete all files with a paticular extension.

```bash
rm src/assets/**/*.css
```

This will delete all `.css` files which are within the `src/assets` directory and all of its sub-directories.

And if you want to delete all files within a directory:

```bash
rm src/assets/*
```

Or simply remove a directory and everything it contains:

```bash
rm src/assets
```

And when you want to destroy an entire directory tree, sub directories and all it's files, you can add the `-r` (recursive) and `-f` (force) flags — usually combined as `-rf`. Force is used here to ignore warning which are shown for certain special files.

This is particularly useful when dealing with `node_modules`.

```bash
rm -rf node_modules
```

Poof! All gone. Forever.

I repeat, take caution when using `rm`!
