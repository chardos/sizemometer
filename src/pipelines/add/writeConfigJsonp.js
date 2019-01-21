const fs = require('fs-extra');

/**
 * Creates a config.jsonp to be consumed by <script> tag in index.html
 */

module.exports = async (data) => {
  const { paths } = data;
  const config = require(paths.config);
  const outputStr = `const config = ${JSON.stringify(config, null , 2)}`
  await fs.writeFile(paths.configJsonp, outputStr);
  return data;
}