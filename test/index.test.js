'use strict';

const rchars = require('..');

describe('Test rchars', () => {
  test('random10 to return a default length with range [0-9]', () => {
    expect(rchars.random10()).toMatch(/^\d{10}$/);
  });
  test('random10 to return a custom length with range [0-9]', () => {
    const custom = 20;
    const regexp = `^\\d{${custom}}$`;
    expect(rchars.random10(custom)).toMatch(new RegExp(regexp));
  });

  test('random36 to return a default length with range [0-9a-z]', () => {
    expect(rchars.random36()).toMatch(/^[0-9a-z]{10}$/);
  });
  test('random36 to return a custom length with range [0-9a-z]', () => {
    const custom = 20;
    const regexp = `^[0-9a-z]{${custom}}$`;
    expect(rchars.random36(custom)).toMatch(new RegExp(regexp));
  });

  test('random62 to return a default length with range [0-9a-zA-Z]', () => {
    expect(rchars.random62()).toMatch(/^[0-9a-zA-Z]{10}$/);
  });
  test('random62 to return a custom length with range [0-9a-zA-Z]', () => {
    const custom = 20;
    const regexp = `^[0-9a-zA-Z]{${custom}}$`;
    expect(rchars.random62(custom)).toMatch(new RegExp(regexp));
  });

  test('randomFrom to return a default length with default range [0-9a-zA-Z]', () => {
    expect(rchars.randomFrom()).toMatch(/^[0-9a-zA-Z]{10}$/);
  });
  test('randomFrom(chars, len) to return a custom length with range [_*.?]', () => {
    const custom = 20;
    const regexp = `^[_*.?]{${custom}}$`;
    expect(rchars.randomFrom('_*.?', custom)).toMatch(new RegExp(regexp));
  });

});
