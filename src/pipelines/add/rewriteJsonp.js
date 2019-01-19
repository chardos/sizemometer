const fs = require('fs-extra');
const makeDir = require('make-dir');

/**
 * Creates a history.jsonp file based on the history.json file to be consumed
 * by a <script> tag in index.html
 */

module.exports = async (data) => {
  const { paths, outputJson } = data;
  const outputStr = `const history = ${JSON.stringify(outputJson, null, 2)}`;

  await makeDir(
    paths.sizemometerRoot + '/dist'
  );
  await fs.writeFile(paths.historyJsonp, outputStr);
  return data;
}