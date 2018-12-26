const { log } = require('../wrappers');

module.exports = async (fileStats) => {
  const commits = await log();
  const latestCommit = commits[0];
  const [commitHash, commitMessage, timeAgo, author] = latestCommit;

  return fileStats.map(stats => ({
    ...stats,
    commitHash,
    commitMessage,
    author
  }))
}