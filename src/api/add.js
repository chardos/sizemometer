require('babel-polyfill');
const validateConfig = require('../pipelines/add/validateConfig');
const addFileSizes = require('../pipelines/add/addFileSizes');
const addGitData = require('../pipelines/add/addGitData');
const updateHistoryJson = require('../pipelines/add/updateHistoryJson');
const buildHistoryJsonP = require('../pipelines/add/buildHistoryJsonP');
const buildConfigJsonP = require('../pipelines/add/buildConfigJsonP');
const getTrackedFiles = require('../pipelines/add/getTrackedFiles');
const getPaths = require('../utils/getPaths');

module.exports = async ({
  injectedAddGitData = addGitData,
  scopedPath, // path scoping for tests
  currentHistory,
}) => {
  try {
    const paths = getPaths(scopedPath);
    validateConfig(paths);
    const trackedFiles = await getTrackedFiles(paths, scopedPath);
    const filesWithSizes = await addFileSizes(trackedFiles);
    const filesWithGitData = await injectedAddGitData(filesWithSizes);
    const updatedHistory = await updateHistoryJson(currentHistory, filesWithGitData);
    
    return updatedHistory;
  } catch (e) {
    console.log(e);
  }
};
