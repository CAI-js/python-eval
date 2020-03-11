# @caijs/python-eval

[![Build Status](https://travis-ci.com/CAI-js/python-eval.svg?branch=master)](https://travis-ci.com/CAI-js/python-eval)
[![NPM version](https://img.shields.io/npm/v/@caijs/python-eval.svg?style=flat)](https://www.npmjs.com/package/@caijs/python-eval)
[![NPM downloads](https://img.shields.io/npm/dm/@caijs/python-eval.svg?style=flat)](https://www.npmjs.com/package/@caijs/python-eval)

@caijs/eval includes a python transpiler and evaluator.
It is intended for use in build scripts and code transformations, doing some evaluation at build time—it is NOT suitable for handling arbitrary untrusted user input. Malicious user input can execute arbitrary code.

## Installation

In your project folder run:

```bash
$ npm install @caijs/python-eval
```

## Examples of use

You can evaluate expressions

```javascript
const { evaluate } = require('@caijs/python-eval');
const script = `
if n > 3:
  n += 1
n + 2
`;
const context = { n: 5 };
const actual = evaluate(script, context);
console.log(actual); // 8
console.log(context); // { n: 6 }
```
