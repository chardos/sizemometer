const fs = require('fs-extra');
const findUp = require('find-up');

// Copy the index file over to /dist
exports.copyIndexOver = async () => {
  const distDir = await findUp('dist', {cwd: __dirname});
  const indexOriginPath = `${__dirname}/../../website/index.html`;
  const indexDestinationPath = `${distDir}/index.html`;

  await fs.copyFile(indexOriginPath, indexDestinationPath, (err) => {
    if (err) throw err;
    console.log(`${indexOriginPath} was copied to ${indexDestinationPath}`);
  });
}