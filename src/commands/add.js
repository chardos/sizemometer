const fs = require('fs-extra');
const { log } = require('../wrappers');

module.exports = async () => {
  const config = require(`${process.cwd()}/sizemometer.config.js`);
  const { files } = config;
  const jsonPath = `${process.cwd()}/sizes.json`;

  const filePaths = files.map((path) => `${process.cwd()}/${path}`)

  console.log('filePaths', filePaths);

  const statsPromises = filePaths.map((path) => {
    return fs.stat(path);
  })
  console.log('statsPromises', statsPromises);

  const stats = await Promise.all(statsPromises);

  console.log('stats', stats);

  const { size } = stats;

  const commits = await log();
  const [latestCommit, ...otherCommits] = commits;
  const [commitHash, commitMessage, timeAgo, author] = latestCommit;

  const jsonExists = await fs.exists(jsonPath);
  const existingFile = jsonExists && await fs.readFile(jsonPath);
  const storedCommits = jsonExists && JSON.parse(existingFile.toString());
  const lastStoredHash = jsonExists && storedCommits[0].commitHash;
  const hashIsNew = lastStoredHash !== commitHash;

  if (jsonExists && hashIsNew) {
    const newArr = [
      {
        author,
        commitHash,
        commitMessage,
        size
      },
      ...storedCommits
    ]
    const formattedArr = JSON.stringify(newArr, null, 2);
    fs.writeFile(jsonPath, formattedArr);
    console.log('Added new data point to sizes.json')
  } else if (!jsonExists) {
    const newArr = [{
      author,
      commitHash,
      commitMessage,
      size
    }]
    const formattedArr = JSON.stringify(newArr, null, 2);
    fs.writeFile(jsonPath, formattedArr)
    console.log('sizes.json not found. Writing new file.')
  } else {
    console.log('No new commits to add to sizes.json')
  }
};
