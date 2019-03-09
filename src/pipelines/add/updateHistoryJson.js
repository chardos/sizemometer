const cloneDeep = require('lodash.clonedeep');
const checkCommitIsIgnored = require('./checkCommitIsIgnored.js')

module.exports = async (historyJson, trackedFiles, commitIgnorePattern) => {
  const outputJson = cloneDeep(historyJson);

  trackedFiles.forEach((file) => {
    const {
      commitHash, commitMessage, timestamp, author, size, gzippedSize, shortPath,
    } = file;

    const keyExists = Boolean(outputJson[shortPath]);

    if (!keyExists) {
      outputJson[shortPath] = [];
    }

    const currentHistory = historyJson[shortPath];
    const lastHistoryEntry = currentHistory && currentHistory[currentHistory.length - 1];
    const lastCommitHash = lastHistoryEntry && lastHistoryEntry.commitHash;
    const isNewHash = (commitHash !== lastCommitHash);
    const isCommitIgnored = checkCommitIsIgnored(commitMessage, commitIgnorePattern);

    if (isCommitIgnored) {
      throw new Error(`The current commit is ignored due to config.commitIgnorePattern: ${commitIgnorePattern}`)
    }

    if (isNewHash) {
      outputJson[shortPath].push({
        author,
        commitHash,
        commitMessage,
        size,
        gzippedSize,
        timestamp,
      });
      // eslint-disable-next-line
      console.log(`${shortPath}: New entry added.`);
    } else {
      // eslint-disable-next-line
      console.log(`${shortPath}: No new commits found.`);
    }
  });

  return outputJson;
};
