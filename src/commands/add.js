const addFileSizes = require('../pipelines/add/addFileSizes');
const addGitData = require('../pipelines/add/addGitData');
const getHistoryJson = require('../pipelines/add/getHistoryJson');
const updateHistoryJson = require('../pipelines/add/updateHistoryJson');
const buildHistoryJsonP = require('../pipelines/add/buildHistoryJsonP');
const buildConfigJsonP = require('../pipelines/add/buildConfigJsonP');
const getTrackedFiles = require('../pipelines/add/getTrackedFiles');
// const setup = require('../pipelines/add/setup');
const getPaths = require('../utils/getPaths');

module.exports = async (
  injectedAddGitData = addGitData,
  scopedPath, // path scoping for tests
) => {
  const paths = getPaths(scopedPath);
  const trackedFiles = await getTrackedFiles(paths, scopedPath);
  const filesWithSizes = await addFileSizes(trackedFiles);
  const filesWithGitData = await injectedAddGitData(filesWithSizes);
  const historyJson = await getHistoryJson(paths);
  await updateHistoryJson(paths, historyJson, filesWithGitData)
  await buildHistoryJsonP(paths)
  await buildConfigJsonP(paths)
};
