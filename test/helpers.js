const fs = require('fs-extra');
const { TEST_DIRECTORY, getPaths } = require('./constants');
const makeDir = require('make-dir');
// helpers for:

// adding the config file
exports.addConfigFile = async ({ 
  files,
  scopePath = null
}) => {
  const filesConcatenated = files.reduce((acc, curr) => {
    return `${acc}"${curr}",`
  }, '');

  const configString = `
    module.exports = {
      files: [${filesConcatenated}]
    }
  `

  await makeDir(
    getPaths(scopePath).dotDirectory
  );
  await fs.writeFile(
    getPaths(scopePath).config, 
    configString
  );
}

exports.writeFile = async ({scopePath, path, body}) => {
  const dir = path.split('/').slice(0, -1).join('/');
  await makeDir(`${TEST_DIRECTORY}/${scopePath}/${dir}`);
  await fs.writeFile(`${TEST_DIRECTORY}/${scopePath}/${path}`, body);
}