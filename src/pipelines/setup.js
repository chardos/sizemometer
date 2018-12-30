const getPaths = require('../utils/getPaths');

module.exports = (scopePath) => {
  const paths = getPaths(scopePath);

  console.log('paths', paths);
  const isTestEnvironment = (process.env.ENV === 'test');
  const basePath = isTestEnvironment
    ? `${process.cwd()}/tmp`
    : `${process.cwd()}`;

  const config = require(paths.config);
  const { files } = config;

  const filePaths = files.map((path) => ({
    shortPath: path,
    fullPath: `${paths.root}/${path}`
  }));

  return Promise.resolve({
    paths: {
      basePath: paths.root,
      sizesJsonPath: paths.history,
    },
    files: filePaths
  })
}