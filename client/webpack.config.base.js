const path = require('path');

const HtmlPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

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
      '@components': path.resolve(__dirname, 'src', 'app', 'components'),
      '@hooks': path.resolve(__dirname, 'src', 'app', 'hooks'),
      '@theme': path.resolve(__dirname, 'src', 'app', 'theme')
    }
  },
  target: 'web',
  stats: {
    chunks: true
  },
  plugins: [
    new HtmlPlugin({
      template: path.resolve(__dirname, 'src', 'index.html')
    })
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
  },
}