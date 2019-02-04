const addFileSizes = require('../pipelines/add/addFileSizes');
const addGitData = require('../pipelines/add/addGitData');
const getHistoryJson = require('../pipelines/add/getHistoryJson');
const updateHistoryJson = require('../pipelines/add/updateHistoryJson');
const buildHistoryJsonP = require('../pipelines/add/buildHistoryJsonP');
const buildConfigJsonP = require('../pipelines/add/buildConfigJsonP');
const setup = require('../pipelines/add/setup');
const getPaths = require('../utils/getPaths');

module.exports = async (
  injectedAddGitData = addGitData,
  scopedPath,
) => {
  const paths = getPaths(scopedPath);

  await setup(scopedPath)
    .then(addFileSizes)
    .then(injectedAddGitData)
    .then(getHistoryJson)
    .then(updateHistoryJson)
    .then(async () => {
      await buildHistoryJsonP(paths)
      await buildConfigJsonP(paths)
    })
    // .catch((err) => {
    //   throw new Error(err);
    // });
};
