const fs = require('fs-extra');

module.exports = async (filePaths) => {
  const statsPromises = filePaths.map(async (path) => {
    const fileStats = await fs.stat(path.full);
    return {
      ...fileStats,
      path: path.short
    }
  })

  return await Promise.all(statsPromises);
}