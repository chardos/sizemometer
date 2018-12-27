const fs = require('fs-extra');
const getFileSizes = require('../pipelines/getFileSizes');
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
    .then(getFileSizes)
    .then(addGitData)
    .then(getSizesJson)
    .then(updateSizesJson)
    .then(log)
    .then(rewriteSizesJson)
    .catch(console.log)
};
