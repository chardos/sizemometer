const fs = require('fs-extra');

function validateConfig(paths) {
  const configExists = fs.existsSync(paths.config);
  if (!configExists) {
    throw new Error('Please add a config file at .sizemometer/config.js');
  }

  const config = require(paths.config);
  const { trackedFiles } = config;

  if (!trackedFiles) {
    throw new Error('Please add a "trackedFiles" property to your config.');
  }
}

module.exports = validateConfig;
