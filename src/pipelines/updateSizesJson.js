const fs = require('fs-extra');
const cloneDeep = require('lodash.clonedeep');

module.exports = async (data) => {
  const { files, inputJson } = data;
  const outputJson = cloneDeep(inputJson);

  files.forEach((file) => {
    const keyExists = Boolean(outputJson[file.shortPath]);

    if (!keyExists) {
      outputJson[file.shortPath] = [];
    }

    const { commitHash, commitMessage, author, size } = file;

    outputJson[file.shortPath].push({
      author,
      commitHash,
      commitMessage,
      size
    })
  })

  return {
    ...data,
    outputJson
  };
}