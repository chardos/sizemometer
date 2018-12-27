const fs = require('fs-extra');
const { TEST_DIRECTORY, CONFIG_PATH } = require('./constants');
const makeDir = require('make-dir');
// helpers for:

// adding the config file
exports.addConfigFile = async ({ files }) => {
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

exports.writeFile = async ({path, body}) => {
  console.log('path', path);
  const dir = path.split('/').slice(0, -1).join('/');
  await makeDir(`${TEST_DIRECTORY}/${dir}`);
  await fs.writeFile(`${TEST_DIRECTORY}/${path}`, body);
}