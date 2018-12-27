const fs = require('fs-extra');
const getFileSizes = require('../pipelines/getFileSizes');
const addGitData = require('../pipelines/addGitData');
const getSizesJson = require('../pipelines/getSizesJson');
const updateSizesJson = require('../pipelines/updateSizesJson');
const rewriteSizesJson = require('../pipelines/rewriteSizesJson');

module.exports = async () => {
  const config = require(`${process.cwd()}/sizemometer.config.js`);
  const { files } = config;
  const jsonPath = `${process.cwd()}/sizes.json`;

  const filePaths = files.map((path) => ({
    shortPath: path,
    fullPath: `${process.cwd()}/${path}`
  }));

  function log(x){console.log(x); return x}

  // get stats
  await getFileSizes(filePaths)
    .then(addGitData)
    // .then(log)
    .then(getSizesJson)
    .then(updateSizesJson)
    .then(rewriteSizesJson)
    .catch(console.log)
};
