---
layout: post
date: '2020-10-05'
title: 'Convert Pixels to Rem in Sass'
permalink: 'blog/{{ title | slug }}/index.html'
categories:
    - code
tags:
    - css
---

It’s good practice to use `rem` for font sizes rather than `px` but remembering which `rem` value to use can be tricky.

Use a Sass function to calculate the rem value and a mixin to set the value.

```scss
@function calculateRem($size) {
	$remSize: $size / 16px;
	@return $remSize * 1rem;
}

@mixin font-size($size) {
	font-size: $size;
	font-size: calculateRem($size);
}
```

Simply use the mixin whenever you want to set a font size value.

```scss
p {
	@include font-size(22px);
}
/* Output */
p {
	font-size: 22px;
	font-size: 1.375rem;
}
```

The mixin outputs the original pixel value as a fallback for old browsers where `rem` is not supported, and the calculated `rem` value after it which takes priority in all modern browsers.
