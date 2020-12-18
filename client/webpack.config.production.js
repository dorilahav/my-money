const {merge} = require('webpack-merge');
const base = require('./webpack.config.base');

const {CleanWebpackPlugin:CleanPlugin} = require('clean-webpack-plugin');

module.exports = merge(base, {
  mode: 'production',
  performance: {
    hints: 'warning'
  },
  plugins: [
    new CleanPlugin()
  ]
});