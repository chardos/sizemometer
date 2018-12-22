const fs = require('fs-extra');
const newJsonTemplate = require('./templates/newJson');
const git = require('git-rev')
const { log } = require('./wrappers');
const prettier = require('prettier');

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

  console.log('jsonExists', jsonExists);
  console.log('hashIsNew', hashIsNew);

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
    fs.writeFile(jsonPath, newJsonTemplate({
      author,
      commitHash,
      commitMessage,
      size
    }))
  }
  
};
