const fs = require('fs-extra');
const { log } = require('../wrappers');

module.exports = async () => {
  const config = require(`${process.cwd()}/sizemometer.config.js`);
  const { files } = config;
  const jsonPath = `${process.cwd()}/sizes.json`;

  const filePaths = files.map((path) => `${process.cwd()}/${path}`)

  const statsPromises = filePaths.map((path) => {
    return fs.stat(path);
  })

  const stats = await Promise.all(statsPromises);
  console.log('stats', stats);

  const { size } = stats;

  const commits = await log();
  const [latestCommit, ...otherCommits] = commits;
  const [commitHash, commitMessage, timeAgo, author] = latestCommit;

  const jsonExists = await fs.exists(jsonPath);
  
  // use sizes.json. Easier to check and append.
  // Check if the filename exists in the json
  // For each, check if the latest commit is same as current
  // add to filenames array

  if (!jsonExists) {
    console.log('sizes.json not found. Writing new file.')
    await fs.writeFile(jsonPath, {});
  }

  const existingFile = await fs.readFile(jsonPath);
  const storedCommits = jsonExists && JSON.parse(existingFile.toString());
  const lastStoredHash = jsonExists && storedCommits[0].commitHash;
  const hashIsNew = lastStoredHash !== commitHash;

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
