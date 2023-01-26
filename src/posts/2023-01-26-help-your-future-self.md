---
layout: post
title: Help Your Future Self
permalink: "{{ title | slug }}/index.html"
date: 2023-01-26T20:59:18.856Z
categories:
  - code
tags:
  - advice
  - tips
draft: true
---
Back in 2014 I applied for my first senior frontend role. The first part of the process was a coding test which would then lead onto a telephone interview.

This was gist of this test:

> An ex-employee did not back up their working files before they left the company. The only copy is now the minified version on the live website. We need to make some changes but at the moment the file is unusable. 
>
> We need you to un-minify the file and rename all the variables and functions into something meaningful.

The code looked like this.

![A block of minified JavaScript which is difficult to decipher](/assets/images/uploads/minified-code.png)

While I did find this test challenging and enjoyable, the experience has stuck with me ever since. It’s not a situation I’d ever like to be in for real.

So what are some of the ways we can all be better developers for both our future selves and those that take over from us when we move on.

### Version Control

You already know the importance of version control. Just make sure that you’re using the system properly.

Make small commits and make them often.

Try not to include too many files in a single commit.

Add a descriptive commit message and use bullet points for additional info.

“JavaScript stuff” is not a good commit message.

### README file

Always add a Readme to your project.

Document the setup process, no matter how obvious it might seem.

Keep it up to date and in version control.

### Naming things

Naming things is hard but it’s important to be descriptive here. Don’t be afraid to use long variable names. Your IDE should help you autocomplete them and your build process should shorthen them for production.

Consider using named functions rather than anonymous — but make the names useful (not `foo( )`).

### Avoid monolithic functions

Try and split your code into smaller functions which serve a single purpose — ideally into pure functions. Functional programming as a whole is a topic everyone should look into. Check out this talk by [Anjana Vakil](https://www.youtube.com/watch?v=e-5obm1G_FY).

### Explain hacks

We all use the odd hack now and then. That’s totally fine just make sure you leave a comment to explain what the hack is for.

If you found it on Stack Overflow, leave the url in your comment.

You should also revisit your code from time to time and try and remove redundant hacks.

### Comments

Good commented code is a developers best friend. You definitely don’t need to explain every live of code you write but anything which is a little ambiguous or perhaps has some side effect should be clearly commented.

Use IDE plugins to manage your comments and make them more powerful.

### TTP

Talk to people. Keep your team in the loop about any significant changes you’re making.

Discuss coding standards and agree on some processes for documentation.

Don’t approve Pull Requests if they don’t meet the standards. The whole team is responsible for future-proofing your code base.

## Conclusion

These are just a few steps we can all take to help our code stand the test of time. Have a think about your own workflow. Are you guilty of skipping any of these tips?

Talk to your teams and put some processes in place today to you help out the next generation of developers and your future self.