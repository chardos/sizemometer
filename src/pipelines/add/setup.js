const fs = require('fs-extra');
const getPaths = require('../../utils/getPaths');
require('babel-polyfill');

const setup = (scopePath) => {
  const paths = getPaths(scopePath);
  // check config is set up correctly

  const configExists = fs.existsSync(paths.config);
  if (!configExists) {
    throw new Error('Please add a config file at .sizemometer/config.js');
  }

  const config = require(paths.config);
  const { trackedFiles } = config;

  if (!trackedFiles) {
    throw new Error('Please add a "trackedFiles" property to your config.');
  }

  // map short and long paths

  const files = trackedFiles.map(path => ({
    shortPath: path,
    fullPath: `${paths.root}/${path}`,
  }));

  return Promise.resolve({
    paths,
    files,
  });
};

module.exports = setup;
