const webpack = require('webpack');
const config = require('../../../template/webpack.config');
const fs = require('fs-extra');
const { copyHistoryIn, copyIndexOver } = require('./helpers');

module.exports = async () => {
  await copyHistoryIn();
  await copyIndexOver();

  const compiler = webpack(config);
  await compiler.run((err, stats) => {
    const compileErrors = stats.compilation.errors;
    console.log('compileErrors', compileErrors);
  });
}