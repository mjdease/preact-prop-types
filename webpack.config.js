var path = require("path");

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'output.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: 'babel-loader',
      }
    ]
  }
};