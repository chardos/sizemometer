const fs = require('fs-extra');
const { HISTORY_PATH, CONFIG_PATH } = require('../constants');

module.exports = async (data) => {
  const { paths: {basePath} } = data;
  const jsonPath = `${basePath}/${HISTORY_PATH}`;
  const { outputJson } = data;
  await fs.writeFile(jsonPath, JSON.stringify(outputJson, null, 2));
}