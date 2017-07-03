# Next Level JavaScript for React / ES6

### Wifi (twguest):

begin hark sauce editor sign
#### Hosted by ThoughtWorks / Presented by @cris7ian

#### `git clone https://github.com/tw-react-dojo/2-next-level-js`

---

> Always leave the campground cleaner than you found it.

![](https://68.media.tumblr.com/tumblr_lriuezGhzw1ql9e9go1_1316018627_cover.jpg)

---

# let + const

---

> Not everything is a variable

---

# Arrows 🎯

---

# Old Way

```js
var that = this
methodWithCallback(function(result) {
  that.result = result
})
```

---

# New Way

```js
methodWithCallback((result) => {
  this.result = result
})
```

---

# Template strings

---

```js
string = "the result is: " + result
```

---

```js
string = `the result is: ${result}`
```

---

# Destructuring

---

```js
const loaded = this.state.loaded;
const error = this.state.error;
const rates = this.state.rates;
const date = this.state.date;
```

---

```js
const {
  loaded, 
  error, 
  rates, 
  date 
} = this.state
```

---

# Spread Operator

---

```js
var newState = that.state;
newState.loaded = true;
newState.rates = data.rates;
```

---

```js
var newState = Object.assign(oldState, {prop: newProp});
```

---

```js
const newState = {...state, loaded: true, rates}
```

---

# Modules

---

```js
var React = require("react");
```

---

```js
import React, { Component } from 'react'
```

---

# Promises 🙏

---

![](https://image.slidesharecdn.com/promisesandchaininginangularjs-141027044455-conversion-gate02/95/promises-and-chaining-in-angularjs-into-callback-hell-and-back-again-17-638.jpg?cb=1414385382)

---

# Promises

```js
aPromise
    .then(result => doSomethingAsyncReturnStuff(result))
    .then(stuff => asyncCall(stuff))
    .then(endMethod)
    .catch(error => console.log(`whoops! ${error}`))
```

---

# Promise Everything

```js
const promiseVersion = (options) => new Promise((resolve, reject) => {
  doAsyncMethod(options, (result, error) => {
    if (error) {
      reject()
    } else {
      resolve(result)
    }
  })
})

promiseVersion()
  .then(result)
  .catch(error => console.log(`whoops! ${error}`))

```

---

# Prettier 💅
#[fit] https://github.com/prettier/prettier

---

 > Prettier is an opinionated code formatter for Javascript.

 ---

# From Zero ❌

```javascript
import {moment} from "moment";

export function theApp(value)
{
  if (!Number.isInteger(Number(value))) {
    return <App title="Simple Title" height={200} onClick={ onClick } onEdit={onEdit}/>;
  }
}
```

 ---

# To Hero ✅

```javascript
import { moment } from 'moment'

export function theApp(value) {
  if (!Number.isInteger(Number(value))) {
    return (
      <App
        title="Simple Title"
        height={200}
        onClick={onClick}
        onEdit={onEdit}
      />
    )
  }
}

```
---

# CLI 🖥

```bash
#!/bin/sh
npm install [-g] prettier
```

```bash
prettier [opts] [filename ...]
```

```bash
prettier --single-quote --no-semi --write "src/*/**.js"
```

---

# Thank you!
