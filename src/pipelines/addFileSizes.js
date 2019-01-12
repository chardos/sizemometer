const fs = require('fs-extra');
const { promisify } = require("es6-promisify");
const glob = require('glob');
const globPromise = promisify(glob);
const getPathFromGlob = require('../utils/getPathFromGlob');

module.exports = async (data) => {
  const { files } = data;

  const filePromises = files.map(async (file) => {
    const path = await getPathFromGlob(file);

    const fileStats = await fs.stat(path);
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


