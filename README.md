# 🗓⏱ seiko [![NPM version](https://img.shields.io/npm/v/seiko.svg?style=flat)](https://www.npmjs.com/package/seiko) [![NPM monthly downloads](https://img.shields.io/npm/dm/seiko.svg?style=flat)](https://npmjs.org/package/seiko) [![NPM total downloads](https://img.shields.io/npm/dt/seiko.svg?style=flat)](https://npmjs.org/package/seiko)

#

> A collection of [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) and time related tools.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save seiko
```

## Usage

##### DateDelta

#

```js
const seiko = require('seiko');

const date1 = new Date('07/16/1998.12:00:01');
const date2 = new Date('07/16/1998.12:00:00');

const delta = seiko.dateDelta(date1, date2, { timeFormat: 'milliseconds' });
console.log(delta); //=> 1000
```

#####

#

```js
const seiko = require('seiko');

console.log(seiko.convertTime(1000, 'seconds')); //=> 1
```
