const webpack = require('webpack');
const config = require('../../template/webpack.config');
const fs = require('fs-extra');
console.log('config', config);

module.exports = async () => {
  console.log('building');

  // copy history.json
  const historyOriginPath = `${process.cwd()}/.sizemometer/history.json`;
  const historyDestinationPath = `${__dirname}/../../template/history.json`;

  await fs.copyFile(historyOriginPath, historyDestinationPath, (err) => {
    if (err) throw err;
    console.log('source.txt was copied to destination.txt');
  });

  const compiler = webpack(config);
  await compiler.run((err, stats) => {
    const compileErrors = stats.compilation.errors;
    console.log('compileErrors', compileErrors);
  });
}