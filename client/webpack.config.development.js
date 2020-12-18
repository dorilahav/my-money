const {merge} = require('webpack-merge');
const base = require('./webpack.config.base');

const SERVER_URL = 'http://localhost:3000';

module.exports = merge(base, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
    hot: true,
    proxy: {
      '/api': SERVER_URL
    }
  }
});