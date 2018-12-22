const fs = require('fs-extra');
const newJsonTemplate = require('./templates/newJson');
const git = require('git-rev')
const { log } = require('./wrappers');

module.exports = async () => {
  console.log('Success! Running file-size-graph.');
  const jsonPath = `${process.cwd()}/sizes.json`;
  const fileName = `${process.cwd()}/README.md`;

  const stats = await fs.stat(fileName);
  const { size } = stats;

  const commits = await log();
  const [latestCommit, ...otherCommits] = commits;
  const [commitHash, commitMessage, timeAgo, author] = latestCommit;

  // look for the JSON (sizes.json)
  const jsonExists = await fs.exists(jsonPath);
  console.log('jsonExists', jsonExists);
  
  fs.writeFile(jsonPath, newJsonTemplate({
    author,
    commitHash,
    commitMessage,
    size
  }))
};
