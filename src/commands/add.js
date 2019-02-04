const addFileSizes = require('../pipelines/add/addFileSizes');
const addGitData = require('../pipelines/add/addGitData');
const getHistoryJson = require('../pipelines/add/getHistoryJson');
const updateHistoryJson = require('../pipelines/add/updateHistoryJson');
const buildHistoryJsonP = require('../pipelines/add/buildHistoryJsonP');
const buildConfigJsonP = require('../pipelines/add/buildConfigJsonP');
const getTrackedFiles = require('../pipelines/add/getTrackedFiles');
const setup = require('../pipelines/add/setup');
const getPaths = require('../utils/getPaths');

module.exports = async (
  injectedAddGitData = addGitData,
  scopedPath, // path scoping for tests
) => {
  const paths = getPaths(scopedPath);
  const trackedFiles = getTrackedFiles(paths, scopedPath);

  await setup(scopedPath)
    .then(addFileSizes)
    .then(async (data) => {
      const filesWithGitData = await injectedAddGitData(data);
      const historyJson = await getHistoryJson(paths);
      await updateHistoryJson(paths, historyJson, filesWithGitData)
      await buildHistoryJsonP(paths)
      await buildConfigJsonP(paths)
    })
    // .catch((err) => {
    //   throw new Error(err);
    // });
};
