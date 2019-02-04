const fs = require('fs-extra');
const getPaths = require('../../utils/getPaths');
require('babel-polyfill');

const getTrackedFiles = (paths) => {
  const config = require(paths.config);
  const { trackedFiles } = config;

  // map short and long paths
  const files = trackedFiles.map(path => ({
    shortPath: path,
    fullPath: `${paths.root}/${path}`,
  }));

  return Promise.resolve(files);
};

module.exports = getTrackedFiles;
