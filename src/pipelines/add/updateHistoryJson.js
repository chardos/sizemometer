const cloneDeep = require('lodash.clonedeep');
const fs = require('fs-extra');

module.exports = async (historyJson, trackedFiles) => {
  const outputJson = cloneDeep(historyJson);

  trackedFiles.forEach((file) => {
    const {
      commitHash, commitMessage, timestamp, author, size, shortPath,
    } = file;

    const keyExists = Boolean(outputJson[shortPath]);

    if (!keyExists) {
      outputJson[shortPath] = [];
    }

    const currentHistory = historyJson[shortPath];
    const lastHistoryEntry = currentHistory && currentHistory[currentHistory.length - 1];
    const lastCommitHash = lastHistoryEntry && lastHistoryEntry.commitHash;
    const isNewHash = (commitHash !== lastCommitHash);

    if (isNewHash) {
      outputJson[shortPath].push({
        author,
        commitHash,
        commitMessage,
        size,
        timestamp,
      });
      // eslint-disable-next-line
      console.log(`${shortPath}: New entry added.`);
    } else {
      // eslint-disable-next-line
      console.log(`${shortPath}: No new commits found.`);
    }
  });

  return outputJson
};
