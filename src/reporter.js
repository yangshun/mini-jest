const INDENDATION_PER_LEVEL = 2;
const RESULT_SYMBOLS = {
  true: '✔',
  false: '✖',
};

function formatIndentedLog(level, message) {
  return `${Array(level * INDENDATION_PER_LEVEL)
    .fill(' ')
    .join('')}${message}`;
}

function visitor(node, level, logs) {
  switch (node.type) {
    case 'suite':
      logs.push(formatIndentedLog(level, node.name));
      node.children.forEach((childNode) => visitor(childNode, level + 1, logs));
      break;

    case 'spec':
      logs.push(
        formatIndentedLog(
          level,
          `${RESULT_SYMBOLS[node.passed]} ${node.name} (${node.duration}ms)`,
        ),
      );
      break;
  }
}

function reporter(results) {
  const logs = [];
  results.forEach((node) => visitor(node, 0, logs));
  console.log(logs.join('\n'));
}

export default reporter;
