const segments = [];
const NAME_SEPARATOR = ' › ';
const INDENDATION_PER_LEVEL = 2;
const resultsMap = {
  true: '✔',
  false: '✖',
};

function printIndentedLog(level, message) {
  console.log(`${Array(level * INDENDATION_PER_LEVEL).fill(' ').join('')}${message}`);
}

function describe(blockName, blockFn) {
  printIndentedLog(segments.length, blockName);
  segments.push(blockName);
  blockFn();
  segments.pop();
}

function test(testName, testFn) {
  segments.push(testName);
  let passed = false;
  let errorMessage = '';
  const start = Date.now();
  try {
    testFn();
    passed = true;
  } catch (err) {
    errorMessage = err;
  }
  const end = Date.now();
  printIndentedLog(segments.length - 1, `${resultsMap[passed]} ${testName} (${end - start}ms)`);
  if (!passed && errorMessage) {
    printIndentedLog(segments.length + 1, errorMessage);
  }
  segments.pop();
}

module.exports.describe = describe;
module.exports.test = test;
module.exports.it = test;
