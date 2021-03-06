const findUp = require('find-up');
const trimPath = require('../utils/trimPath');

function getPaths(scopePath) {
  const packageJsonPath = findUp.sync('package.json');
  let appRoot = trimPath(packageJsonPath);
  const sizemometerRoot = findUp.sync('sizemometer', { cwd: __dirname });

  if (process.env.ENV === 'test') {
    appRoot = `${appRoot}/tmp/${scopePath}`;
  }

  return {
    root: appRoot,
    sizemometerRoot,
    dist: `${appRoot}/dist`,
    dotDirectory: `${appRoot}/.sizemometer`,
    config: `${appRoot}/.sizemometer/config.js`,
    bundle: `${sizemometerRoot}/dist/bundle.js`,
    index: `${sizemometerRoot}/dist/index.html`,
    configJsonp: `${sizemometerRoot}/dist/assets/config.jsonp`,
    history: `${appRoot}/.sizemometer/history.json`,
    historyJsonp: `${sizemometerRoot}/dist/assets/history.jsonp`,
  };
}

module.exports = getPaths;
