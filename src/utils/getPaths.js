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
    dotDirectory: `${appRoot}/.sizemometer`,
    config: `${appRoot}/.sizemometer/config.js`,
    configJsonp: `${sizemometerRoot}/dist/config.jsonp`,
    history: `${appRoot}/.sizemometer/history.json`,
    historyJsonp: `${sizemometerRoot}/dist/history.jsonp`,
  };
}

module.exports = getPaths;
