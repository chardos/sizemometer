const { HISTORY_PATH, CONFIG_PATH } = require('../constants');

module.exports = () => {
  const isTestEnvironment = (process.env.ENV === 'test');
  const basePath = isTestEnvironment
    ? `${process.cwd()}/tmp`
    : `${process.cwd()}`;

  const config = require(`${basePath}/${CONFIG_PATH}`);
  const { files } = config;
  const sizesJsonPath = `${basePath}/${HISTORY_PATH}`;

  const filePaths = files.map((path) => ({
    shortPath: path,
    fullPath: `${basePath}/${path}`
  }));

  return Promise.resolve({
    paths: {
      basePath,
      sizesJsonPath,
    },
    files: filePaths
  })
}