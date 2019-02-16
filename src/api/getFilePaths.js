const getPaths = require('../utils/getPaths');
const buildConfigJsonP = require('../pipelines/add/buildConfigJsonP');

module.exports = async () => {
  try {
    // create the config.jsonp
    const paths = getPaths();
    const { index, bundle, configJsonp } = paths;
    await buildConfigJsonP(paths);

    return [
      index,
      bundle,
      configJsonp,
    ];
  } catch (e) {
    // eslint-disable-next-line
    console.log(e);
  }
};
