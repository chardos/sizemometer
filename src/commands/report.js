const opn = require('opn');
const getPaths = require('../utils/getPaths');
const buildHistoryJsonP = require('../pipelines/add/buildHistoryJsonP');
const buildConfigJsonP = require('../pipelines/add/buildConfigJsonP');

module.exports = async () => {
  const paths = getPaths();
  await buildHistoryJsonP(paths);
  await buildConfigJsonP(paths);

  const reportPath = `${__dirname}/../../dist/index.html`;
  opn(reportPath);
  process.exit(0);
};
