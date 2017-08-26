'use strict';

const assert = require('assert');

const _chars = '0123456789abcdefghigklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

const random = (chars = _chars) => (radix = 62) => (len = 10) => {

  assert(typeof chars === 'string' && chars.length > 0,
    'Chars set should be a string with a positive length');
  assert(typeof radix === 'number' && radix >= 1 && radix <= chars.length,
    'radix should be in range [1, chars.length]');
  assert(typeof len === 'number' && len >= 0,
    'the length of random chars should be a natural number');

  let temp = '';
  for (let i = 0; i < len; ++i) {
    temp += chars[Math.floor(radix * Math.random())];
  }
  return temp;

};

exports.random10 = random()(10);
exports.random36 = random()(36);
exports.random62 = random()();
exports.randomFrom = (chars = _chars, len = 10) => random(chars)(chars.length)(len);
