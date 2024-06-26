---
layout: post
title: 'Accessing localhost on Mac from a Windows Virtual Machine'
permalink: 'blog/{{ title | slug }}/index.html'
date: '2020-06-02'
categories:
    - popular
    - code
tags:
    - windows
    - mac
    - localhost
---

As a frontend developer, it's important to test your code on as many web browsers as possible, but as a Mac user it is necessary to run Windows in a Virtual Machine — in my case, [VirtualBox](https://www.virtualbox.org/) — in order to test on Microsoft Edge and Internet Explorer.

> Microsoft offers [Free Virtual Machines from IE8 to MS Edge](https://developer.microsoft.com/en-us/microsoft-edge/tools/vms/).

Out of the box, VirtualBox doesn't have access to `localhost` from the host Mac, so you'll need to follow these steps.

## Exposing Mac localhost to Windows VM

On VirtualBox, make sure your network adapter is set to NAT. On your Windows VM, make sure you can access any public webpage (e.g. ajaykarwal.com)

Get your `Default Gateway IP address` for your Windows VM. To do so, click on the Windows start menu. Type `Command Prompt` in the search field. Open the program and type `ipconfig`.

Again on Windows VM, click on the Windows start menu. Type `Notepad`. Right-click on Notepad and select `Run as administrator`.

From Notepad, open `C:\Windows\System32\drivers\etc\hosts`. Add this line to the bottom:

```powershell
10.0.2.2 localhost
# Where 10.0.2.2 is your gateway IP
```

You should now be able to access localhost on your Mac by visiting `http://10.0.2.2` on your Windows VM.
