require('babel-polyfill');
const fs = require('fs-extra');
const validateConfig = require('../pipelines/add/validateConfig');
const addFileSizes = require('../pipelines/add/addFileSizes');
const addGitData = require('../pipelines/add/addGitData');
const getHistoryJson = require('../pipelines/add/getHistoryJson');
const updateHistoryJson = require('../pipelines/add/updateHistoryJson');
const buildAndWriteHistoryJsonP = require('../pipelines/add/buildAndWriteHistoryJsonP');
const buildConfigJsonP = require('../pipelines/add/buildConfigJsonP');
const getTrackedFiles = require('../pipelines/add/getTrackedFiles');
const getPaths = require('../utils/getPaths');

module.exports = async (
  injectedAddGitData = addGitData,
  scopedPath, // path scoping for tests
) => {
  const paths = getPaths(scopedPath);
  const config = require(paths.config);
  validateConfig(paths);
  const trackedFiles = await getTrackedFiles(paths, scopedPath);
  const filesWithSizes = await addFileSizes(trackedFiles);
  const filesWithGitData = await injectedAddGitData(filesWithSizes);
  const historyJson = await getHistoryJson(paths);
  const updatedHistory = await updateHistoryJson(historyJson, filesWithGitData, config.commitIgnorePattern);
  await fs.writeFile(paths.history, JSON.stringify(updatedHistory, null, 2));
  await buildAndWriteHistoryJsonP(paths);
  await buildConfigJsonP(paths);
};
