const fs = require('fs-extra');
const getPaths = require('../src/utils/getPaths');
const makeDir = require('make-dir');

// adding the config file
exports.addConfigFile = async ({ 
  files,
  scopePath
}) => {
  const paths = getPaths(scopePath);
  const filesConcatenated = files.reduce((acc, curr) => {
    return `${acc}"${curr}",`
  }, '');

  const configString = `
    module.exports = {
      trackedFiles: [${filesConcatenated}]
    }
  `

  await makeDir(
    paths.dotDirectory
  );
  await fs.writeFile(
    paths.config, 
    configString
  );
}

exports.writeFile = async ({scopePath, path, body}) => {
  const paths = getPaths(scopePath);

  const dir = path.split('/').slice(0, -1).join('/');
  await makeDir(`${paths.root}/${dir}`);
  await fs.writeFile(`${paths.root}/${path}`, body);
}