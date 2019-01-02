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
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          "presets": [
             "@babel/react"
           ]
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
}