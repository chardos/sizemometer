const fs = require('fs-extra');
const makeDir = require('make-dir');
const getPaths = require('../../src/utils/getPaths');

// Copy the index.html and bundle.js from sizemometer-report package over to /dist
exports.copyFilesFromSizemometerReport = async () => {
  const paths = getPaths();
  const indexOriginPath = `${paths.root}/node_modules/sizemometer-report/index.html`;
  const indexDestinationPath = `${paths.dist}/index.html`;
  const bundleOriginPath = `${paths.root}/node_modules/sizemometer-report/dist/bundle.js`;
  const bundleDestinationPath = `${paths.dist}/assets/bundle.js`;

  await fs.copyFile(indexOriginPath, indexDestinationPath, (err) => {
    if (err) throw err;
    console.log(`${indexOriginPath} was copied to ${indexDestinationPath}`);
  });

  await fs.copyFile(bundleOriginPath, bundleDestinationPath, (err) => {
    if (err) throw err;
    console.log(`${bundleOriginPath} was copied to ${bundleDestinationPath}`);
  });
}