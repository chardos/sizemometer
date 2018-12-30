const fs = require('fs-extra');
const addFileSizes = require('../pipelines/addFileSizes');
const addGitData = require('../pipelines/addGitData');
const getHistoryJson = require('../pipelines/getHistoryJson');
const updateHistoryJson = require('../pipelines/updateHistoryJson');
const rewriteHistoryJson = require('../pipelines/rewriteHistoryJson');
const setup = require('../pipelines/setup');

module.exports = async (
  injectedAddGitData = addGitData, 
  scopedPath
) => {
  function log(x){console.log('LOG:', x); return x}

  // get stats
  await setup(scopedPath)
    .then(addFileSizes)
    .then(injectedAddGitData)
    // .then(log)
    .then(getHistoryJson)
    .then(updateHistoryJson)
    .then(rewriteHistoryJson)
    .catch((err) => {
      throw new Error(err)
    })
};
