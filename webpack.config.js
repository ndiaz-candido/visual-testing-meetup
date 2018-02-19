const path = require('path');
const postCssPlugins = require('./postcss.plugins');
const express = require('express');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './public/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js',
  },
  devServer: {
    setup(app) {
      app.use('public/', express.static('/public/'))
    }
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              localIdentName: '[name]__[local]__[hash:base64:5]',
              camelCase: true,
              module: true
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => postCssPlugins
            }
          }
        ]
      }
    ]
  },
  plugins: [HtmlWebpackPluginConfig]
}
