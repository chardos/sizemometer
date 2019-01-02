const webpack = require('webpack');
const config = require('../../template/webpack.config');

console.log('config', config);

module.exports = async () => {
  // call webpack
  // console.log('', );
  console.log('building');
  const compiler = webpack(config);
  await compiler.run((err, stats) => {
    console.log('err', err);
    // console.log('stats', stats);
  });
  // console.log('run', run);
}