const cloneDeep = require('lodash.clonedeep');

module.exports = async (data) => {
  const { files, inputJson } = data;
  const outputJson = cloneDeep(inputJson);

  files.forEach((file) => {
    const { commitHash, commitMessage, author, size, shortPath } = file;
    const keyExists = Boolean(outputJson[shortPath]);

    if (!keyExists) {
      outputJson[shortPath] = [];
    }

    const currentHistory = inputJson[shortPath];
    const lastHistoryEntry = currentHistory && currentHistory[currentHistory.length - 1];
    const lastCommitHash = lastHistoryEntry && lastHistoryEntry.commitHash;
    const isNewHash = (commitHash !== lastCommitHash);

    if (isNewHash) {
      outputJson[shortPath].push({
        author,
        commitHash,
        commitMessage,
        size
      })
      console.log(`${shortPath}: New entry added.`);
    } else {
      console.log(`${shortPath}: No new commits found.`);
    }
  })

  return {
    ...data,
    outputJson
  };
}