const fs = require('fs-extra');

module.exports = async (filePaths) => {
  const statsPromises = filePaths.map(async (path) => {
    const fileStats = await fs.stat(path.full);
    return {
      size: fileStats.size,
      ...path
    }
  })

  return {
    stats: await Promise.all(statsPromises)
  }
}