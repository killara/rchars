# rchars

[![npm](https://img.shields.io/npm/v/rchars.svg)](https://www.npmjs.com/package/rchars)
[![Travis branch](https://img.shields.io/travis/killara/rchars/master.svg)](https://travis-ci.org/killara/rchars)
[![Codecov branch](https://img.shields.io/codecov/c/github/killara/rchars/master.svg)](https://codecov.io/github/killara/rchars?branch=master)

Get your random chars handily

## Usage

* Example

```javascript
const rchars = require('rchars');

const randomString rchars.random10(20);
console.log(randdomString); // 87256238656099047101
```

* API

  * random10 to return a default/custom length string with char range [0-9]
    * `#random10(length = 10)`
  * random36 to return a default/custom length with range char [0-9a-z]
    * `#random36(length = 10)`
  * random62 to return a default/custom length with range char [0-9a-zA-Z]
    * `#random62(length = 10)`
  * randomFrom to return a default/custom length with custom range chars
    * `#randomFrom(chars ,length = 10)`

## LICENSE

MIT License

Copyright (c) 2017 killara

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
