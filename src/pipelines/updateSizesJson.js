const fs = require('fs-extra');

module.exports = async (obj) => {
  const { stats } = obj;
  console.log('objs', obj);
  const jsonPath = `${process.cwd()}/sizes.json`;

  let sizesJson = await fs.readFile(jsonPath);
  sizesJson = JSON.parse(sizesJson.toString());
  console.log('sizesJson', sizesJson);

  stats.forEach((file) => {
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

  console.log('sizesJson', sizesJson);
}