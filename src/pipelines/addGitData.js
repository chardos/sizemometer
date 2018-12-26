const { log } = require('../wrappers');

module.exports = async (obj) => {
  const { stats } = obj;
  const commits = await log();
  const latestCommit = commits[0];
  const [commitHash, commitMessage, timeAgo, author] = latestCommit;

  const newStats = stats.map(stats => ({
    ...stats,
    commitHash,
    commitMessage,
    author
  }))

  return {
    stats: newStats
  }
}