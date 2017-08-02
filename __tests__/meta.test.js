const { describe, expect, it, test } = require('../src');

describe('expect tests', () => {
  test('toBe works correctly', () => {
    expect(1).toBe(1);
    expect('2').toBe('2');
    const arr = [];
    expect(arr).toBe(arr);
  });

  test('toBeFalsy works correctly', () => {
    expect('').toBeFalsy();
    expect(0).toBeFalsy();
    expect(NaN).toBeFalsy();
    expect(null).toBeFalsy();
    expect(undefined).toBeFalsy();
    expect(false).toBeFalsy();
    expect(true).not.toBeFalsy();
  });

  describe('toBeGreaterThan works correctly', () => {
    test('with positive numbers', () => {
      expect(10).toBeGreaterThan(2);
      expect(20).toBeGreaterThan(10);
    });

    test('with negative numbers', () => {
      expect(-2).toBeGreaterThan(-3);
      expect(-10).toBeGreaterThan(-20);
    });

    test('with mixed numbers', () => {
      expect(3).toBeGreaterThan(-3);
      expect(-30).not.toBeGreaterThan(-10);
    });
  });

  describe('toBeGreaterThanOrEqual works correctly', () => {
    test('with positive numbers', () => {
      expect(10).toBeGreaterThanOrEqual(2);
      expect(10).toBeGreaterThanOrEqual(10);
    });

    test('with negative numbers', () => {
      expect(-2).toBeGreaterThanOrEqual(-3);
      expect(-10).toBeGreaterThanOrEqual(-10);
    });

    test('with mixed numbers', () => {
      expect(3).toBeGreaterThanOrEqual(-3);
    });
  });

  describe('toBeLessThan works correctly', () => {
    test('with positive numbers', () => {
      expect(1).toBeLessThan(2);
      expect(10).toBeLessThan(20);
    });

    test('with negative numbers', () => {
      expect(-3).toBeLessThan(-2);
      expect(-20).toBeLessThan(-10);
    });

    test('with mixed numbers', () => {
      expect(-5).toBeLessThan(5);
      expect(-20).not.toBeLessThan(-30);
    });
  });

  describe('toBeLessThanOrEqual works correctly', () => {
    test('with positive numbers', () => {
      expect(1).toBeLessThanOrEqual(2);
      expect(20).toBeLessThanOrEqual(20);
    });

    test('with negative numbers', () => {
      expect(-3).toBeLessThanOrEqual(-2);
      expect(-10).toBeLessThanOrEqual(-10);
    });

    test('with mixed numbers', () => {
      expect(-5).toBeLessThanOrEqual(5);
    });
  });

  test('toBeNull works correctly', () => {
    expect(null).toBeNull();
    expect(undefined).not.toBeNull();
  });

  test('toBeTruthy works correctly', () => {
    expect(true).toBeTruthy();
    expect([]).toBeTruthy();
    expect({}).toBeTruthy();
    expect('false').toBeTruthy();
    expect('').not.toBeTruthy();
    expect(0).not.toBeTruthy();
    expect(NaN).not.toBeTruthy();
    expect(null).not.toBeTruthy();
    expect(undefined).not.toBeTruthy();
    expect(false).not.toBeTruthy();
  });

  test('toBeUndefined works correctly', () => {
    expect(undefined).toBeUndefined();
    expect(null).not.toBeUndefined();
  });

  test('toContain works correctly', () => {
    expect([1, 2, 3]).toContain(1);
    expect([1, 2, 3]).not.toContain(4);
  });

  test('toHaveLength works correctly', () => {
    expect([1, 2, 3]).toHaveLength(3);
    expect('abc').toHaveLength(3);
    expect('').not.toHaveLength(5);
  });
});
