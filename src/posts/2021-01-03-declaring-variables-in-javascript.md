---
layout: post
title: 'Declaring variables in JavaScript'
date: '2021-01-03'
permalink: 'blog/{{ title | slug }}/index.html'
categories:
    - code
tags:
    - javascript
---

Since the introduction of ES6, we now have three ways of declaring variables in JavaScript — `var`, `let` and `const`.

## var

The `var` declaration has been part of the language since the beginning. It creates a mutable variable which could have unwanted side effects.

```javascript
var myNumber = 10;
console.log(myNumber); // 10

myNumber = 20;
console.log(myNumber); // 20
```

The scope of `var` is always global unless it is declared within a function.

A function-scoped variable is only available within the body of the function. A block-scoped variable is available in the global scope because of hoisting.

```javascript
var myNumber = 10; // Global variable

function secretVar() {
	var secretNumber = 100; // Function scoped variable
}

if (myNumber > 5) {
	var foo = "I'm block scoped"; // Block scoped variable
}

console.log(myNumber); // 10
console.log(secretNumber); // ReferenceError: secretNumber is not defined
console.log(foo); // I'm block scoped
```

## let

The `let` declaration is similar to `var` and is the preferred way of declaring mutable variables in ES6.

Unlike `var`, the `let` declaration is also block-scoped, meaning it is not available in the global scope when declared within a block.

If we update our earlier example to use `let` we can see that the `foo` variable is now not defined on the gloabl scope.

```javascript
let myNumber = 10; // Global variable

function secretVar() {
	let secretNumber = 100; // Function scoped variable
}

if (myNumber > 5) {
	let foo = "I'm block scoped"; // Block scoped variable
}

console.log(myNumber); // 10
console.log(secretNumber); // ReferenceError: secretNumber is not defined
console.log(foo); // ReferenceError: foo is not defined
```

## const

The `const` declaration, as the name implies, is used to define a constant variable; or an immutable variable which cannot be redeclared. Like `let`, the `const` declaration is also block-scoped.

```javascript
const hero = 'Iron Man';
hero = 'Captain America'; //error : Assignment to constant variable.
```

## Which should you use?

Personally I would try and declare all variables with `const` which is the least likely option to run into problems. If a variable absolutely needs to be mutable, I would then use `let` which has more robust scoping than `var`.
