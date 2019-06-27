const webpack = require('webpack');
const { copyFilesFromSizemometerReport } = require('./helpers');
const makeDir = require('make-dir');
const findUp = require('find-up');

const build = async () => {
  const sizemometerDir = await findUp('sizemometer', {cwd: __dirname});
  await makeDir(
    sizemometerDir + '/dist/assets'
  );
  
  await copyFilesFromSizemometerReport()

  // const config = require('../../website/webpack.config');
  // const compiler = webpack(config);
  
  // await compiler.run((err, stats) => {
  //   const compileErrors = stats.compilation.errors;
  //   console.log('compileErrors', compileErrors);
  // });
}

build();