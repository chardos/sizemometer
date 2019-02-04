const git = require('get-git-data');

module.exports = async (trackedFiles) => {
  const commits = await git.log(10);

  const latestCommit = commits[0];
  const {
    commitHash, commitMessage, timestamp, authorName: author,
  } = latestCommit;

  const filesWithGitData = trackedFiles.map(file => ({
    ...file,
    commitHash,
    commitMessage,
    timestamp,
    author,
  }));

  return filesWithGitData;
};
