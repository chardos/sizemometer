const webpack = require('webpack');
const { copyIndexOver } = require('./helpers');
const makeDir = require('make-dir');
const findUp = require('find-up');

const build = async () => {
  const sizemometerDir = await findUp('sizemometer', {cwd: __dirname});
  await makeDir(
    sizemometerDir + '/dist'
  );
  
  await copyIndexOver()

  const config = require('../../website/webpack.config');
  const compiler = webpack(config);
  
  await compiler.run((err, stats) => {
    const compileErrors = stats.compilation.errors;
    console.log('compileErrors', compileErrors);
  });
}

build();