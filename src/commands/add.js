const addFileSizes = require('../pipelines/add/addFileSizes');
const addGitData = require('../pipelines/add/addGitData');
const getHistoryJson = require('../pipelines/add/getHistoryJson');
const updateHistoryJson = require('../pipelines/add/updateHistoryJson');
const rewriteHistoryJson = require('../pipelines/add/rewriteHistoryJson');
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
    .catch((err) => {
      throw new Error(err)
    })
};
