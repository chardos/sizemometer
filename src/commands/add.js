const addFileSizes = require('../pipelines/add/addFileSizes');
const addGitData = require('../pipelines/add/addGitData');
const getHistoryJson = require('../pipelines/add/getHistoryJson');
const updateHistoryJson = require('../pipelines/add/updateHistoryJson');
const rewriteHistoryJson = require('../pipelines/add/rewriteHistoryJson');
const buildHistoryJsonP = require('../pipelines/add/buildHistoryJsonP');
const buildConfigJsonP = require('../pipelines/add/buildConfigJsonP');
const setup = require('../pipelines/add/setup');

module.exports = async (
  injectedAddGitData = addGitData,
  scopedPath,
) => {
  await setup(scopedPath)
    .then(addFileSizes)
    .then(injectedAddGitData)
    .then(getHistoryJson)
    .then(updateHistoryJson)
    .then(rewriteHistoryJson)
    .then(buildHistoryJsonP)
    .then(buildConfigJsonP)
    .catch((err) => {
      throw new Error(err);
    });
};
