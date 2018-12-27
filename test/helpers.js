const fs = require('fs-extra');
const { CONFIG_PATH } = require('./constants');
// helpers for:

// adding the config file
exports.addConfigFile = async (...files) => {
  const filesConcatenated = files.reduce((acc, curr) => {
    return `${acc}"${curr}",`
  }, '');

  const configString = `
    module.exports = {
      files: [${filesConcatenated}]
    }
  `

  await fs.writeFile(CONFIG_PATH, configString);
}