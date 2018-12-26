const fs = require('fs-extra');

module.exports = async (obj) => {
  const { files, sizesJson } = obj;
  console.log('objs', obj);
  const jsonPath = `${process.cwd()}/sizes.json`;


  files.forEach((file) => {
    const keyExists = Boolean(sizesJson[file.short]);

    if (!keyExists) {
      sizesJson[file.short] = [];
    }

    const { commitHash, commitMessage, author, size } = file;

    sizesJson[file.short].push({
      author,
      commitHash,
      commitMessage,
      size
    })
  })

  console.log('obj', JSON.stringify(obj,null,2));

}