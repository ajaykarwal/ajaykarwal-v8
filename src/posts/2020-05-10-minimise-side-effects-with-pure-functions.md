---
layout: post
title: 'Minimise side effects with pure functions'
permalink: 'blog/{{ title | slug }}/index.html'
date: '2020-05-10'
categories:
    - code
tags:
    - javascript
---

A **Side Effect** occurs when a function mutates a value, meaning you end up with a different result each time the function is called.

```javascript
// BAD. Don't do this.
var x = 10;

function plusTen(y) {
	x = x + y;
	return x;
}

console.log(plusTen(3)); // 13
console.log(plusTen(3)); // 16
```

In the above example, the value of `x` is changed each time the function is called. This side effect could easily be missed if the function is only called once, as the result would be 13, as expected, but over time this will definitely cause problems.

A **Pure Function** is a function which doesn't produce any side effects. Every time the function is called with the same argument, the result is always the same.

We can rewrite the above to make it a Pure Function.

```javascript
function plusTen(y) {
	var x = 10;
	return x + y;
}

console.log(plusTen(3)); // 13
console.log(plusTen(3)); // 13
```

By scoping the variable `x` within our function, we have put all the responsibility on the function itself meaning our side effect is gone and we end up with cleaner code.

Win.
