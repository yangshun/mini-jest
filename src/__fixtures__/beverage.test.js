import { describe, expect, run, test } from '../index.js';

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

run();
