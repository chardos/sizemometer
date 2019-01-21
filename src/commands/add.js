const addFileSizes = require('../pipelines/add/addFileSizes');
const addGitData = require('../pipelines/add/addGitData');
const getHistoryJson = require('../pipelines/add/getHistoryJson');
const updateHistoryJson = require('../pipelines/add/updateHistoryJson');
const rewriteHistoryJson = require('../pipelines/add/rewriteHistoryJson');
const rewriteJsonp = require('../pipelines/add/rewriteJsonp');
const writeConfigJsonp = require('../pipelines/add/writeConfigJsonp');
const setup = require('../pipelines/add/setup');

module.exports = async (
  injectedAddGitData = addGitData, 
  scopedPath
) => {
  function log(x){console.log('LOG:', x); return x}

  await setup(scopedPath)
    .then(addFileSizes)
    .then(injectedAddGitData)
    .then(getHistoryJson)
    // .then(log)
    .then(updateHistoryJson)
    .then(rewriteHistoryJson)
    .then(rewriteJsonp)
    .then(writeConfigJsonp)
    .catch((err) => {
      throw new Error(err)
    })
};
