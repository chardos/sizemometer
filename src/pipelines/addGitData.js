const { log } = require('../wrappers');

module.exports = async (data) => {
  const { files } = data;
  const commits = await log();
  const latestCommit = commits[0];
  const [commitHash, commitMessage, timeAgo, author] = latestCommit;

  const newFiles = files.map(file => ({
    ...file,
    commitHash,
    commitMessage,
    author
  }))

  return {
    ...data,
    files: newFiles
  }
}