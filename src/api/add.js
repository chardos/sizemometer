require('babel-polyfill');
const validateConfig = require('../pipelines/add/validateConfig');
const addFileSizes = require('../pipelines/add/addFileSizes');
const addGitData = require('../pipelines/add/addGitData');
const updateHistoryJson = require('../pipelines/add/updateHistoryJson');
const buildHistoryJsonP = require('../pipelines/add/buildHistoryJsonP');
const getTrackedFiles = require('../pipelines/add/getTrackedFiles');
const getPaths = require('../utils/getPaths');

module.exports = async ({
  injectedAddGitData = addGitData,
  scopedPath, // path scoping for tests
  currentHistory,
}) => {
  const safeHistory = currentHistory || {};

  try {
    const paths = getPaths(scopedPath);
    validateConfig(paths);
    const config = require(paths.config);
    const trackedFiles = await getTrackedFiles(paths, scopedPath);
    const filesWithSizes = await addFileSizes(trackedFiles);
    const filesWithGitData = await injectedAddGitData(filesWithSizes);
    const updatedHistory = await updateHistoryJson(
      safeHistory,
      filesWithGitData,
      config.commitIgnorePattern,
    );
    const historyJsonP = buildHistoryJsonP(updatedHistory);

    return historyJsonP;
  } catch (e) {
    // eslint-disable-next-line
    console.log(e);
  }
};
