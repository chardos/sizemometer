const fs = require('fs-extra');
const gzipSize = require('gzip-size');
const getPathFromGlob = require('../../utils/getPathFromGlob');

module.exports = async (trackedFiles) => {
  const filePromises = trackedFiles.map(async (file) => {
    const path = await getPathFromGlob(file);

    const fileBuffer = await fs.readFile(path);
    const fileStats = await fs.stat(path);
    const { size } = fileStats;
    const gzippedSize = await gzipSize(fileBuffer);

    return {
      size,
      gzippedSize,
      ...file,
    };
  });

  return Promise.all(filePromises);
};
