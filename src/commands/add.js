const fs = require('fs-extra');
const { log } = require('../wrappers');
const getFileSizes = require('../pipelines/getFileSizes');
const addGitData = require('../pipelines/addGitData');
const getSizesJson = require('../pipelines/getSizesJson');
const updateSizesJson = require('../pipelines/updateSizesJson');

module.exports = async () => {
  const config = require(`${process.cwd()}/sizemometer.config.js`);
  const { files } = config;
  const jsonPath = `${process.cwd()}/sizes.json`;

  const filePaths = files.map((path) => ({
    short: path,
    full: `${process.cwd()}/${path}`
  }));

  // get stats
  await getFileSizes(filePaths)
    .then(addGitData)
    .then(getSizesJson)
    .then(updateSizesJson)
    // .then(combineIntoSizesJson)
    .catch(console.log)
  
  // Check if the filename exists in the json
  // const lastStoredHash = jsonExists && storedCommits[0].commitHash;
  // const hashIsNew = lastStoredHash !== commitHash;

  // if (hashIsNew) {

  //   console.log('Added new data point to sizes.json')
  // } else {
  //   console.log('No new commits to add to sizes.json')
  // }

  // if (jsonExists && hashIsNew) {
  //   const newArr = [
  //     {
  //       author,
  //       commitHash,
  //       commitMessage,
  //       size
  //     },
  //     ...storedCommits
  //   ]
  //   const formattedArr = JSON.stringify(newArr, null, 2);
  //   fs.writeFile(jsonPath, formattedArr);
  //   console.log('Added new data point to sizes.json')
  // } else if (!jsonExists) {
  //   const newArr = [{
  //     author,
  //     commitHash,
  //     commitMessage,
  //     size
  //   }]
  //   const formattedArr = JSON.stringify(newArr, null, 2);
  //   fs.writeFile(jsonPath, formattedArr)
  //   
  // } else {
  //   console.log('No new commits to add to sizes.json')
  // }
};
