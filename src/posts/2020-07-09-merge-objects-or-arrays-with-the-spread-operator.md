---
layout: post
title: 'Merge Objects or Arrays with the `Spread` operator'
permalink: 'blog/{{ title | slug }}/index.html'
date: '2020-07-09'
categories:
    - code
tags:
    - javascript
    - es6+
---

Using the Spread operator (`...`) you can quickly merge multiple Objects or Arrays together.

```javascript
const user = {
	name: 'Ajay Karwal',
	twitter: '@ajaykarwal'
};

const appearance = {
	eyes: 'Brown',
	hair: 'Black',
	glasses: true
};

const profile = { ...user, ...appearance };

console.log(profile);
```

The result is a single merged Object

```javascript
{
  eyes: "Brown",
  glasses: true,
  hair: "Black",
  name: "Ajay Karwal",
  twitter: "@ajaykarwal"
}
```

The same can be applied to Arrays.

```javascript
const fruit = ['apples', 'bananas', 'strawberries'];

const veg = ['potatoes', 'spinach', 'cauliflower'];

const lunch = [...fruit, ...veg];

console.log(lunch);

// ["apples", "bananas", "strawberries", "potatoes", "spinach", "cauliflower"]
```

You can even merge Objects and Arrays, though the results might not be what you're expecting.
