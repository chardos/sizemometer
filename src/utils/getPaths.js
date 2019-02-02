function getPaths(scopePath) {
  let appRoot = process.cwd();
  const sizemometerRoot = `${__dirname}/../..`;

  if (process.env.ENV === 'test') {
    appRoot = `${appRoot}/tmp/${scopePath}`;
  }

  return {
    root: appRoot,
    sizemometerRoot, // delete this dont use
    dotDirectory: `${appRoot}/.sizemometer`,
    config: `${appRoot}/.sizemometer/config.js`,
    configJsonp: `${sizemometerRoot}/dist/config.jsonp`,
    history: `${appRoot}/.sizemometer/history.json`,
    historyJsonp: `${sizemometerRoot}/dist/history.jsonp`,
  };
}

module.exports = getPaths;
