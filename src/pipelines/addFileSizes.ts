import * as fs from 'fs-extra';

module.exports = async (data) => {
  const { files } = data;
  const filePromises = files.map(async (file) => {

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