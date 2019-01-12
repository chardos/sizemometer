const fs = require('fs-extra');

module.exports = async (data) => {
  const { paths } = data;
  const { outputJson } = data;
  await fs.writeFile(paths.history, JSON.stringify(outputJson, null, 2));
}