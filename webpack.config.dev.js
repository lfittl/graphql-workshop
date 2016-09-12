const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    './client/index',
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['', '.js'],
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      include: [
        path.join(__dirname, 'client'),
      ],
    }, {
      test: /\.css$/,
      loader: 'style!css!postcss',
      include: [
        path.join(__dirname, 'client'),
      ],
    }],
  },
};
