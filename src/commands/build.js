const webpack = require('webpack');
const config = require('../../template/webpack.config');
const fs = require('fs-extra');
console.log('config', config);

module.exports = async () => {
  // copy history.json
  const historyOriginPath = `${process.cwd()}/.sizemometer/history.json`;
  const historyDestinationPath = `${__dirname}/../../template/history.json`;

  await fs.copyFile(historyOriginPath, historyDestinationPath, (err) => {
    if (err) throw err;
    console.log(`${historyOriginPath} was copied to ${historyDestinationPath}`);
  });

  const compiler = webpack(config);
  await compiler.run((err, stats) => {
    const compileErrors = stats.compilation.errors;
    console.log('compileErrors', compileErrors);
  });
}