const fs = require('fs-extra');
const makeDir = require('make-dir');

/**
 * Creates a history.jsonp file based on the history.json file to be consumed
 * by a <script> tag in index.html
 */

module.exports = async (paths) => {
  const historyJson = require(paths.history);
  const outputStr = `window.snapshot = ${JSON.stringify(historyJson, null, 2)}`;

  await makeDir(
    `${paths.sizemometerRoot}/dist`,
  );
  await fs.writeFile(paths.historyJsonp, outputStr);
};
