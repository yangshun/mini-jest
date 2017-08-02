const matchers = {};
const negatedMatchers = {};

function expect(actual) {
  function run(isNot, evaluate, expected, assertionName) {
    const pass = evaluate(actual, expected);
    if ((isNot && pass) || (!isNot && !pass)) {
      throw `${assertionName} failed. Expected ${expected} but received ${actual}`;
    }
  }

  this.matchers = matchers;
  this.negatedMatchers = negatedMatchers;

  this.matchers.not = this.negatedMatchers;
  this.negatedMatchers.not = this.matchers;

  this.matchers.run = run;
  this.negatedMatchers.run = run;

  return this.matchers;
}

expect.extend = (extensions) => {
  Object.keys(extensions).forEach(assertionName => {
    const method = extensions[assertionName];
    function execute(negated, expected) {
      this.run(negated, method, expected, assertionName);
      return this;
    };
    matchers[assertionName] = execute.bind(matchers, false);
    negatedMatchers[assertionName] = execute.bind(negatedMatchers, true);
  });
};

expect.extend({
  toBe: (actual, expected) => {
    return actual === expected;
  },
  toBeFalsy: (actual) => {
    return !actual;
  },
  toBeGreaterThan: (actual, expected) => {
    return actual > expected;
  },
  toBeGreaterThanOrEqual: (actual, expected) => {
    return actual >= expected;
  },
  toBeLessThan: (actual, expected) => {
    return actual < expected;
  },
  toBeLessThanOrEqual: (actual, expected) => {
    return actual <= expected;
  },
  toBeNull: (actual) => {
    return actual === null;
  },
  toBeTruthy: (actual) => {
    return !!actual;
  },
  toBeUndefined: (actual) => {
    return actual === undefined;
  },
  toContain: (actual, expected) => {
    return actual.indexOf(expected) > -1;
  },
  toHaveLength: (actual, expected) => {
    return actual.length === expected;
  },
});

module.exports = expect;
