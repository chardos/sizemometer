const path = require('path');
const entry = `${__dirname}/index.js`;
const outputPath = `${process.cwd()}/.sizemometer/report`;

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