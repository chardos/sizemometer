const path = require('path');
const entry = `${__dirname}/index.js`;
const findUp = require('find-up');
const outputPath = findUp.sync('dist', {cwd: __dirname});

module.exports = {
  mode: 'development',
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