const git = require('get-git-data');

module.exports = async (data) => {
  const { files } = data;
  const commits = await git.log();

  const latestCommit = commits[0];
  const {commitHash, commitMessage, timestamp, authorName: author} = latestCommit;

  const newFiles = files.map(file => ({
    ...file,
    commitHash,
    commitMessage,
    timestamp,
    author
  }))

  return {
    ...data,
    files: newFiles
  }
}