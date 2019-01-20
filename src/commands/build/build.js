const webpack = require('webpack');
const config = require('../../../template/webpack.config');
const fs = require('fs-extra');
const { copyHistoryIn, copyIndexOver } = require('./helpers');
const makeDir = require('make-dir');
const findUp = require('find-up');

const build = async () => {
  const sizemometerDir = await findUp('sizemometer', {cwd: __dirname});
  await makeDir(
    sizemometerDir + '/dist'
  );
  console.log('fs.existsSync(sizemometerDir', fs.existsSync(sizemometerDir));
  // await copyHistoryIn();
  await copyIndexOver().then(async () => {
    const compiler = webpack(config);
    await compiler.run((err, stats) => {
      const compileErrors = stats.compilation.errors;
      console.log('compileErrors', compileErrors);
    });
  });
}

build();