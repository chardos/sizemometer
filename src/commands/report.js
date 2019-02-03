const fs = require('fs-extra');
const opn = require('opn');
// const buildHistoryJsonP = require('../pipelines/add/buildHistoryJsonP');
// const buildConfigJsonP = require('../pipelines/add/buildConfigJsonP');

module.exports = async () => {
  const reportPath = `${__dirname}/../../dist/index.html`;
  const reportExists = await fs.exists(reportPath);
  if (!reportExists) { throw new Error('No report exists. Please run "sizemometer build"'); }
  opn(reportPath);
  process.exit(0);
};
