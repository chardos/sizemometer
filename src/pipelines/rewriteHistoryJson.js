const fs = require('fs-extra');
const { HISTORY_PATH, CONFIG_PATH } = require('../constants');

module.exports = async (data) => {
  const { paths } = data;
  const { outputJson } = data;
  await fs.writeFile(paths.history, JSON.stringify(outputJson, null, 2));
}