/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

const HtmlPlugin = require('html-webpack-plugin');
const EslintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[fullhash].js'
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        loader: 'babel-loader',
        exclude: [
          path.resolve(__dirname, 'node_modules')
        ]
      },
      {
        test: /\.s[ca]ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 2,
            },
          },
          {loader: 'scoped-css-loader'},
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 2,
            },
          },
          {loader: 'scoped-css-loader'}
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
    alias: {
      '@components': path.resolve(__dirname, 'src', 'components'),
      '@hooks': path.resolve(__dirname, 'src', 'hooks'),
      '@services': path.resolve(__dirname, 'src', 'services'),
      '@common': path.resolve(__dirname, '..', 'common')
    }
  },
  target: 'web',
  stats: {
    chunks: true
  },
  plugins: [
    new HtmlPlugin({
      template: path.resolve(__dirname, 'src', 'index.html')
    }),
    new EslintPlugin({
      extensions: ['ts', '.tsx'],
      fix: true
    })
  ]
}