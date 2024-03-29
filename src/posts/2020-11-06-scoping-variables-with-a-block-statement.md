---
layout: post
title: 'Scoping Variables With A Block Statement'
permalink: 'blog/{{ title | slug }}/index.html'
date: '2020-11-06'
categories:
    - code
tags:
    - javascript
---

A block is simply any code wrapped in curly braces `{ }`.

In JavaScript, you can use block scope and the `let` keyword to your advantage by defining variables that are only available to a block rather than polluting the global scope.

Let's look at two examples:

```javascript
const dateStr = '2020-05-04';
var [year, month, day] = dateStr.split('-');

// 'year' accidently gets redefined on the global scope
var year = '1982';

let parsedDate;
parsedDate = Date.parse(year, month, day);
console.log(parsedDate);

// Expected: 1577836800000
// Actual:   378691200000
```

The `year` varibale is available on the global scope and could easily be redefined causing an unexpected final result.

Here's how block scope can fix this.

```javascript
const dateStr = '2020-05-04';
let parsedDate;
var year = '1982'; // Gloabl year variable

{
	let [year, month, day] = dateStr.split('-');
	parsedDate = Date.parse(year, month, day);
}

console.log(parsedDate);

// Expected: 1577836800000
// Actual:   1577836800000
```

We now have a global `year` variable and block scoped `year`, `month` and `day` variables. Assigning a value to `parsedDate` is handled within the block scope so the actual result matches our expected result.
