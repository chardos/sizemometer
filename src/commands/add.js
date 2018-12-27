const fs = require('fs-extra');
const addFileSizes = require('../pipelines/addFileSizes');
const addGitData = require('../pipelines/addGitData');
const getSizesJson = require('../pipelines/getSizesJson');
const updateSizesJson = require('../pipelines/updateSizesJson');
const rewriteSizesJson = require('../pipelines/rewriteSizesJson');
const setup = require('../pipelines/setup');

module.exports = async () => {
  const bro = setup();
  console.log('bro', bro);

  function log(x){console.log(x); return x}

  // // get stats
  await setup()
    .then(addFileSizes)
    .then(addGitData)
    .then(getSizesJson)
    .then(updateSizesJson)
    .then(log)
    .then(rewriteSizesJson)
    .catch(console.log)
};
