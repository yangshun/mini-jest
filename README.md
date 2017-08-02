# mini-jest

Attempt at writing my own minimal test runner with an API similar to Jest.

**Note:** This is just an experiment for my own learning and is in no way meant to be used in production.

## API

Similar to Jest. The `describe`, `it`, `test`, `expect` functions are exported.

## Example

```sh
$ npm test

> mini-jest@0.1.0 test /Users/yangshun/Developer/mini-jest
> node ./__tests__/meta.test.js

expect tests
  ✔ toBe works correctly (1ms)
  ✔ toBeFalsy works correctly (0ms)
  toBeGreaterThan works correctly
    ✔ for positive numbers (0ms)
    ✔ for negative numbers (0ms)
    ✔ for mixed numbers (0ms)
  toBeGreaterThanOrEqual works correctly
    ✔ for positive numbers (0ms)
    ✔ for negative numbers (0ms)
    ✔ for mixed numbers (0ms)
  toBeLessThan works correctly
    ✔ for positive numbers (0ms)
    ✔ for negative numbers (0ms)
    ✔ for mixed numbers (0ms)
  toBeLessThanOrEqual works correctly
    ✔ for positive numbers (0ms)
    ✔ for negative numbers (0ms)
    ✔ for mixed numbers (0ms)
  ✔ toBeNull works correctly (1ms)
  ✔ toBeTruthy works correctly (0ms)
```
