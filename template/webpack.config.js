console.log('Reached webpack config');
const path = require('path');

console.log('__dirname', __dirname);
console.log('process.cwd()',process.cwd());

const entry = `${__dirname}/index.js`;
const outputPath = `${process.cwd()}/dist`;

module.exports = {
  entry,
  output: {
    path: outputPath,
    publicPath: "/assets/", // string
    filename: 'bundle.js',
    // the url to the output directory resolved relative to the HTML page
    library: "MyLibrary", // string,
    // the name of the exported library
    libraryTarget: "umd", // universal mo
  }
}