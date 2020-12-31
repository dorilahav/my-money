/* eslint-disable @typescript-eslint/no-var-requires */
const {merge} = require('webpack-merge');
const base = require('./webpack.config.base');

const {CleanWebpackPlugin: CleanPlugin} = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(base, {
  mode: 'production',
  performance: {
    hints: 'warning'
  },
  plugins: [
    new CleanPlugin()
  ],
  optimization: {
    mangleExports: true,
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          format: {
            comments: false,
          },
        },
        extractComments: false,
      })
    ],
    splitChunks: {
      minSize: 20000,
      maxSize: 100000
    }
  }
});