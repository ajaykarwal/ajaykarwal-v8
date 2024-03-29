---
layout: post
date: '2020-03-08'
title: 'How I use Sass in my projects'
permalink: 'blog/{{ title | slug }}/index.html'
categories:
    - code
tags:
    - css
    - sass
---

I've previously posted about the three basic ways you can [add CSS to your website](/how-to-add-css). However, in modern web applications it's more common to use a CSS pre-processor such as Less, Stylus, or in my case, Sass.

A CSS pre-processor extends the functionality of CSS by adding variables, operators, interpolations, functions, mixins and many more useful features.

Files are processed on a server or via a build tools such as Gulp or Webpack and the result is compiled down to standard CSS which is readable by all browsers.

You can find out more about different pre-processers [here](https://htmlmag.com/article/an-introduction-to-css-preprocessors-sass-less-stylus).

## A Quick Introduction to Sass

Sass comes in [two flavours](https://sass-lang.com/documentation/syntax) — `.sass` (classic Sass), and `.scss` ("Sassy CSS").

Essentially the difference is that `.sass` uses an indented notation which removes curly braces `{ }` and relies on white-space and indenting to handle CSS declaration blocks, whereas `.scss` is more reminiscent of plain CSS.

For the purpose of this article I will be using `.scss` which is my preferred version.

## How I organise my Sass files

Here is how I organise my Sass files when starting a new project.

```shell
styles/
|
|____base/
| |____  _base.scss
| |____  _mixins.scss
| |____  _reset.scss
| |____  _utility.scss
| |____  _variables.scss
|
|____components/
| |____  _buttons.scss
| |____  _footer.scss
| |____  _header.scss
| |____  _layout.scss
| |____  ... more components
|
|____main.scss
```

See the full structure on [GitHub](https://github.com/ajaykarwal/ajaykarwal.com/tree/master/src/styles).

Lets break this structure down a little.

### Entry point

My main entry point is located at `/styles/main.scss`. This is the file that gets processed by my build process and compiled down to `main.css`. The entry point file imports all other Sass component files.

<div class="file">main.scss</div>

```scss
@import 'base/reset';

@import 'base/variables';
@import 'base/mixins';
@import 'base/base';
@import 'base/typography';

@import 'components/layout';
@import 'components/header';
@import 'components/footer';

@import 'components/article';
@import 'components/author';
@import 'components/buttons';
@import 'components/code';
// More components, sorted alphabetically

@import 'base/utility';
```

I dont really add any comments to this file, but I use line breaks to organise the imported files into groups. The order of these imports is important as the compiled output `.css` file will be organised in this order. Importing files in the wrong order could affect the cascade and styles my be overridden.

### Base

I start by importing a copy of [Eric Meyer's CSS Reset](https://meyerweb.com/eric/tools/css/reset/) to get rid of any browser inconsistencies. This is followed by `variables` and `mixins` which are needed to interpolate values throughout the rest of the code base.

`base/_base.scss` contains styling for base HTML elements. There are no root-level classes or ID's in this file. This one file alone sets up the styling for more than half of a website due to cascading.

`base/_typography.scss` sets up the styling for all headers, paragraphs, links, and anything else involving text. Again, no root-level classes here.

Finally, the base directory has a `_utility.scss` file which is imported at the end of `main.scss`. This file contains a few override classes, some of which have `!important` on the end which is why this file is imported last &mdash; to prevent any specificity clashing.

### Components

All other styling sits in the `components` folder and I aim to break down everything into components. All files are named in hyphenated lowercase and the css declaration inside each file ususally begins with the same name, e.g

<div class="file">_footer.scss</div>

```scss
.footer {
	display: flex;
	align-items: center;
	@include font-size(14px);

	// More styling...
}
```

I follow the [BEM methodology](http://getbem.com/) while writing Sass and aim to keep my nesting to a maximum of 4 levels deep (give or take)!

## Wrapping up

And that's pretty much the structure I use for all project which use Sass. At my day job we do have a few projects which keep Sass files in the same folder as the associated markup and JavaScript and use Webpack to compile these, but my preferred method is to keep all Sass files in one place.

What do you think of this strucutre? Is there anything you would do differently? How do you structure your projects? Let me know in the comments below.

## Further Reading

[An Introduction to CSS Pre-Processors: SASS, LESS and Stylus](https://htmlmag.com/article/an-introduction-to-css-preprocessors-sass-less-stylus)
