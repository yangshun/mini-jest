const defaultReporter = require('./reporter');

const blocks = [
  {
    name: 'Root suite',
    type: 'suite',
    children: [],
  },
];
let currentSuite = blocks[0];

function describe(name, fn) {
  const suite = {
    name,
    type: 'suite',
    fn,
    children: [],
  };
  const prevSuite = currentSuite;
  currentSuite.children.push(suite);
  currentSuite = suite;
  fn();
  currentSuite = prevSuite;
}

function test(name, fn) {
  currentSuite.children.push({
    name,
    type: 'spec',
    fn,
    status: 'not_started',
  });
}

function runSpec(spec) {
  let passed = false;

  let errorMessage = null;
  spec.status = 'pending';
  const testFn = spec.fn;

  const start = Date.now();
  try {
    testFn();
    passed = true;
  } catch (err) {
    errorMessage = err;
  }

  const end = Date.now();
  spec.status = 'complete';
  spec.duration = end - start;
  spec.passed = passed;
  spec.errorMessage = errorMessage;
}

function runSuite(suite) {
  suite.forEach((item) => {
    if (item.type === 'suite') {
      runSuite(item.children);
      return;
    }

    runSpec(item);
  });
}

function run(print = true, reporter = defaultReporter) {
  runSuite(blocks[0].children);

  if (print) {
    reporter(blocks[0].children);
  }

  return blocks[0].children;
}

module.exports.run = run;
module.exports.describe = describe;
module.exports.test = test;
module.exports.it = test;
