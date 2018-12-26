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

  const commits = await log();
  const [latestCommit, ...otherCommits] = commits;
  const [commitHash, commitMessage, timeAgo, author] = latestCommit;

  const jsonExists = await fs.exists(jsonPath);
  
  // For each, check if the latest commit is same as current
  // add to filenames array

  if (!jsonExists) {
    console.log('sizes.json not found. Writing new file.')
    await fs.writeFile(jsonPath, '{}');
  }

  let sizesJson = await fs.readFile(jsonPath);
  sizesJson = JSON.parse(sizesJson.toString());

  filePaths.forEach((path) => {
    const keyExists = Boolean(sizesJson[path.short]);

    if (!keyExists) {
      sizesJson[path.short] = [];
    }

    sizesJson[path.short].push({
      author,
      commitHash,
      commitMessage,
      size
    })

    // console.log('path.short', path.short);
  })

  console.log('sizesJson', sizesJson);

  
  // Check if the filename exists in the json

  console.log('storedCommits', storedCommits);
  // const lastStoredHash = jsonExists && storedCommits[0].commitHash;
  // const hashIsNew = lastStoredHash !== commitHash;

  if (hashIsNew) {

    console.log('Added new data point to sizes.json')
  } else {
    console.log('No new commits to add to sizes.json')
  }

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
