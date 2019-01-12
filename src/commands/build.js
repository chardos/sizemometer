const webpack = require('webpack');
const config = require('../../template/webpack.config');
const fs = require('fs-extra');

module.exports = async () => {
  // copy history.json into node_modules for the build
  const historyOriginPath = `${process.cwd()}/.sizemometer/history.json`;
  const historyDestinationPath = `${__dirname}/../../template/history.json`;

  await fs.copyFile(historyOriginPath, historyDestinationPath, (err) => {
    if (err) throw err;
    console.log(`${historyOriginPath} was copied to ${historyDestinationPath}`);
  });

  // copy index.html over to report
  const indexOriginPath = `${__dirname}/../../template/index.html`;
  const indexDestinationPath = `${process.cwd()}/.sizemometer/report/index.html`;

  await fs.copyFile(indexOriginPath, indexDestinationPath, (err) => {
    if (err) throw err;
    console.log(`${indexOriginPath} was copied to ${indexDestinationPath}`);
  });

  const compiler = webpack(config);
  await compiler.run((err, stats) => {
    const compileErrors = stats.compilation.errors;
    console.log('compileErrors', compileErrors);
  });
}