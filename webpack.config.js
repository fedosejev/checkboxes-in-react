const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './source/js/index.js',
  output: {
    path: './build/',
    filename: 'js/app.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['latest', 'stage-0', 'react'],
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './source/index.ejs',
    }),
  ],
};
