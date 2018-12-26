const fs = require('fs-extra');

module.exports = async (data) => {
  const jsonPath = `${process.cwd()}/sizes.json`;
  const { sizesJson } = data;
  console.log('sizesJson', sizesJson);
  await fs.writeFile(jsonPath, JSON.stringify(sizesJson, null, 2));
}