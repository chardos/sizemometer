const fs = require('fs-extra');
const addFileSizes = require('../pipelines/addFileSizes');
const addGitData = require('../pipelines/addGitData');
const getSizesJson = require('../pipelines/getSizesJson');
const updateSizesJson = require('../pipelines/updateSizesJson');
const rewriteSizesJson = require('../pipelines/rewriteSizesJson');
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
    .then(getSizesJson)
    .then(updateSizesJson)
    .then(rewriteSizesJson)
    .catch((err) => {
      console.log(err)
      console.log('STACK', err.stack)
    })
};
