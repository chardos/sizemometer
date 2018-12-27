const fs = require('fs-extra');

module.exports = async (data) => {
  console.log('ADD FILE SIZES');
  const { files } = data;
  const filePromises = files.map(async (file) => {

    console.log('file.fullPath', file.fullPath);
    const fileStats = await fs.stat(file.fullPath);
    return {
      size: fileStats.size,
      ...file
    }
  })

  return {
    ...data,
    files: await Promise.all(filePromises)
  }
}