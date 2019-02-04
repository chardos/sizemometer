const fs = require('fs-extra');
const getPathFromGlob = require('../../utils/getPathFromGlob');

module.exports = async (trackedFiles) => {
  const filePromises = trackedFiles.map(async (file) => {
    const path = await getPathFromGlob(file);

    const fileStats = await fs.stat(path);
    return {
      size: fileStats.size,
      ...file,
    };
  });

  return Promise.all(filePromises);
};
