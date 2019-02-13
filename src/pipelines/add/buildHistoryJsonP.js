const fs = require('fs-extra');
const makeDir = require('make-dir');

/**
 * Creates a history.jsonp file based on the history.json file to be consumed
 * by a <script> tag in index.html
 */

module.exports = (history) => {
  // TODO: This is broken.
  const outputStr = `window.snapshot = ${JSON.stringify(history, null, 2)}`;

  return outputStr;
};
