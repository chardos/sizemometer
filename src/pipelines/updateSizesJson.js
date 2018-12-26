const fs = require('fs-extra');

module.exports = async (data) => {
  const { files, sizesJson } = data;

  files.forEach((file) => {
    const keyExists = Boolean(sizesJson[file.shortPath]);

    if (!keyExists) {
      sizesJson[file.shortPath] = [];
    }

    const { commitHash, commitMessage, author, size } = file;

    sizesJson[file.shortPath].push({
      author,
      commitHash,
      commitMessage,
      size
    })
  })

  return data;
}