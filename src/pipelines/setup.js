module.exports = () => {
  const isTestEnvironment = (process.env.ENV === 'test');
  const basePath = isTestEnvironment
    ? `${process.cwd()}/tmp`
    : `${process.cwd()}`;

  const config = require(`${basePath}/sizemometer.config.js`);
  const { files } = config;
  const sizesJsonPath = `${basePath}/sizes.json`;

  const filePaths = files.map((path) => ({
    shortPath: path,
    fullPath: `${process.cwd()}/${path}`
  }));

  return {
    paths: {
      basePath,
      sizesJsonPath,
    },
    files: filePaths
  }
}