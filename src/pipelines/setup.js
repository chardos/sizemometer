const getPaths = require('../utils/getPaths');

module.exports = (scopePath) => {
  const paths = getPaths(scopePath);
  const config = require(paths.config);
  const { trackedFiles } = config;
  if (!trackedFiles) {
    throw new Error('Please add a "trackedFiles" property to your config.')
  }

  const files = trackedFiles.map((path) => ({
    shortPath: path,
    fullPath: `${paths.root}/${path}`
  }));

  return Promise.resolve({
    paths,
    files
  })
}