const fs = require('fs-extra');

module.exports = async (obj) => {
  const { files, sizesJson } = obj;
  console.log('objs', obj);
  const jsonPath = `${process.cwd()}/sizes.json`;


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

  console.log('obj', JSON.stringify(obj,null,2));

}