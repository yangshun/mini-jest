# mini-jest

Attempt at writing my own minimal test runner that implements a subset of the features of Jest.

**Note:** This is just an experiment for my own learning and is in no way meant to be used in production.

## API

Similar to Jest. The `describe`, `it`, `test`, `expect` functions are exported.

## Usage

It works for an example taken off [Jest homepage](http://facebook.github.io/jest/docs/en/api.html#describename-fn):

```js
const { describe, expect, it, test } = require('mini-jest');

const myBeverage = {
  delicious: true,
  sour: false,
};

describe('test that', () => {
  describe('my beverage', () => {
    test('is delicious', () => {
      expect(myBeverage.delicious).toBeTruthy();
    });

    test('is not sour', () => {
      expect(myBeverage.sour).toBeFalsy();
    });
  });
});
```

## Example

```sh
$ npm test

> mini-jest@0.1.0 test /Users/yangshun/Developer/mini-jest
> node ./__tests__/meta.test.js

expect tests
  ✔ toBe works correctly (0ms)
  ✔ toBeFalsy works correctly (0ms)
  toBeGreaterThan works correctly
    ✔ with positive numbers (0ms)
    ✔ with negative numbers (0ms)
    ✔ with mixed numbers (0ms)
  toBeGreaterThanOrEqual works correctly
    ✔ with positive numbers (0ms)
    ✔ with negative numbers (0ms)
    ✔ with mixed numbers (0ms)
  toBeLessThan works correctly
    ✔ with positive numbers (0ms)
    ✔ with negative numbers (0ms)
    ✔ with mixed numbers (0ms)
  toBeLessThanOrEqual works correctly
    ✔ with positive numbers (0ms)
    ✔ with negative numbers (0ms)
    ✔ with mixed numbers (0ms)
  ✔ toBeNull works correctly (0ms)
  ✔ toBeTruthy works correctly (1ms)
  ✔ toBeUndefined works correctly (0ms)
  ✔ toContain works correctly (0ms)
  ✔ toHaveLength works correctly (0ms)
```
