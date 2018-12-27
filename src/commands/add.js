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
  
  const config = require(`${process.cwd()}/sizemometer.config.js`);
  const { files } = config;

  const filePaths = files.map((path) => ({
    shortPath: path,
    fullPath: `${process.cwd()}/${path}`
  }));

  function log(x){console.log(x); return x}

  // // get stats
  await getFileSizes(filePaths)
    .then(addGitData)
    .then(getSizesJson)
    .then(updateSizesJson)
    .then(log)
    .then(rewriteSizesJson)
    .catch(console.log)
};
