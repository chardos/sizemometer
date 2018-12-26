const fs = require('fs-extra');

module.exports = async (obj) => {
  const jsonPath = `${process.cwd()}/sizes.json`;

  let sizesJson = await fs.readFile(jsonPath);
  sizesJson = JSON.parse(sizesJson.toString());
  console.log('sizesJson', sizesJson);
  console.log('objzz', obj);
}