const fs = require('fs-extra');

module.exports = async (obj) => {
  const jsonPath = `${process.cwd()}/sizes.json`;
  const jsonExists = await fs.exists(jsonPath);

  if (!jsonExists) {
    console.log('sizes.json not found. Writing new file.')
    await fs.writeFile(jsonPath, '{}');
  }

  let sizesJson = await fs.readFile(jsonPath);
  sizesJson = JSON.parse(sizesJson.toString());

  return {
    ...obj,
    inputJson: sizesJson
  }
}