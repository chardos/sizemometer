const fs = require('fs-extra');

module.exports = async (data) => {
  const jsonPath = `${process.cwd()}/sizes.json`;
  const { outputJson } = data;
  await fs.writeFile(jsonPath, JSON.stringify(outputJson, null, 2));
}