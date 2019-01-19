const fs = require('fs-extra');

module.exports = async (data) => {
  const { paths, outputJson } = data;
  await fs.writeFile(paths.history, JSON.stringify(outputJson, null, 2));
  return data;
}