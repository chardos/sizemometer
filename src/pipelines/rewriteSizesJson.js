const fs = require('fs-extra');

module.exports = async (data) => {
  const { paths: {basePath} } = data;
  console.log('REWRITE');
  const jsonPath = `${basePath}/sizes.json`;
  const { outputJson } = data;
  await fs.writeFile(jsonPath, JSON.stringify(outputJson, null, 2));
}