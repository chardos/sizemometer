const fs = require('fs-extra');

/**
 * Creates a config.jsonp to be consumed by <script> tag in index.html
 */

module.exports = async (paths) => {
  const config = require(paths.config);
  const outputStr = `window.config = ${JSON.stringify(config, null, 2)}`;
  await fs.writeFile(paths.configJsonp, outputStr);
};
