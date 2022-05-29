const INDENDATION_PER_LEVEL = 2;
const resultsMap = {
  true: '✔',
  false: '✖',
};

function printIndentedLog(level, message) {
  console.log(
    `${Array(level * INDENDATION_PER_LEVEL)
      .fill(' ')
      .join('')}${message}`,
  );
}

function reporter(results) {
  console.log(JSON.stringify(results, null, 2));
}

module.exports = reporter;
