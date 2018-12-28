const fs = require('fs-extra');
const { HISTORY_PATH, CONFIG_PATH } = require('../constants');

module.exports = async (data) => {
  console.log('GETTIN SIZES JSON');
  const { paths: {basePath} } = data;
  const jsonPath = `${basePath}/${HISTORY_PATH}`;
  const jsonExists = await fs.exists(jsonPath);

  if (!jsonExists) {
    console.log(`${HISTORY_PATH} not found. Writing new file.`)
    await fs.writeFile(jsonPath, '{}');
  }

  let sizesJson = await fs.readFile(jsonPath);
  sizesJson = JSON.parse(sizesJson.toString());

  return {
    ...data,
    inputJson: sizesJson
  }
}