const fs = require('fs-extra');
const { log } = require('../wrappers');
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

  // get stats
  await getFileSizes(filePaths)
    .then(addGitData)
    .then(getSizesJson)
    .then(updateSizesJson)
    .then(rewriteSizesJson)
    .catch(console.log)
  

  // if (hashIsNew) {
  //   console.log('Added new data point to sizes.json')
  // } else {
  //   console.log('No new commits to add to sizes.json')
  // }

  //   const formattedArr = JSON.stringify(newArr, null, 2);
  //   fs.writeFile(jsonPath, formattedArr)
  //   
  // } else {
  //   console.log('No new commits to add to sizes.json')
  // }
};
