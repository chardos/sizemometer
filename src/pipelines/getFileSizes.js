const fs = require('fs-extra');

module.exports = async (filePaths) => {
  const filePromises = filePaths.map(async (path) => {
    const fileStats = await fs.stat(path.fullPath);
    return {
      size: fileStats.size,
      ...path
    }
  })

  return {
    files: await Promise.all(filePromises)
  }
}