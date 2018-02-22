const webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: './src/index.jsx',
  output: {
    filename: 'output.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      }
    ]
  }
};
