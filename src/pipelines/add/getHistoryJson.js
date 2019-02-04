const fs = require('fs-extra');
const { HISTORY_PATH } = require('../../constants');

module.exports = async (paths) => {
  const historyExists = await fs.exists(paths.history);

  if (!historyExists) {
    // eslint-disable-next-line
    console.log(`${HISTORY_PATH} not found. Writing new file.`);
    await fs.writeFile(paths.history, '{}');
  }

  let historyJson = await fs.readFile(paths.history);
  historyJson = JSON.parse(historyJson.toString());
  return historyJson;
};
