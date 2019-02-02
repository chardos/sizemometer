/* eslint-disable no-console */
const pkg = require('../../package.json');

module.exports = async () => {
  console.log(`sizemometer v${pkg.version}`);
};
