require('babel-polyfill');
const fs = require('fs-extra');
const validateConfig = require('../pipelines/add/validateConfig');
const addGitData = require('../pipelines/add/addGitData');
const getHistoryJson = require('../pipelines/add/getHistoryJson');
const buildAndWriteHistoryJsonP = require('../pipelines/add/buildAndWriteHistoryJsonP');
const buildConfigJsonP = require('../pipelines/add/buildConfigJsonP');
const getPaths = require('../utils/getPaths');
const add = require('../api/add');

module.exports = async (
  injectedAddGitData = addGitData,
  scopedPath, // path scoping for tests
) => {
  const paths = getPaths(scopedPath);
  validateConfig(paths);
  const currentHistory = await getHistoryJson(paths);
  const updatedHistoryJsonP = await add({
    injectedAddGitData,
    scopedPath,
    currentHistory,
  });

  const updatedHistoryJson = updatedHistoryJsonP.replace('window.snapshot = ', '');

  await fs.writeFile(paths.history, updatedHistoryJson);
  await buildAndWriteHistoryJsonP(paths);
  await buildConfigJsonP(paths);
};
