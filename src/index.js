const fs = require('fs-extra');
const { log } = require('./wrappers');

module.exports = async () => {
  const jsonPath = `${process.cwd()}/sizes.json`;
  const fileName = `${process.cwd()}/README.md`;

  const stats = await fs.stat(fileName);
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
  } else if (!jsonExists) {
    const newArr = [{
      author,
      commitHash,
      commitMessage,
      size
    }]
    const formattedArr = JSON.stringify(newArr, null, 2);
    fs.writeFile(jsonPath, formattedArr)
  }
};
