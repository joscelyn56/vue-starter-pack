'use strict'
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin  = require('mini-css-extract-plugin')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  entry: "./src/index.js",
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      }, {
        test: /\.js$/,
        use: 'babel-loader'
      }, {
        test: /\.styl(us)?$/,
        use: [ 'vue-style-loader', 'css-loader', 'stylus-loader' ]
      }, {
        test: /\.css$/,
        use: ['vue-style-loader','css-loader']
      }, {
        test: /\.(js|vue)$/,
        use: 'eslint-loader',
        enforce: 'pre'
      }, {
        test: /\.styl(us)?$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'stylus-loader'
        ]
      }, {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new CopyWebpackPlugin([{
      from: resolve('assets/service_worker.js'),
      to: resolve('dist/assets/service_worker.js'),
      toType: 'file'
    }]),
    new CopyWebpackPlugin([{
      from: resolve('assets/svg'),
      to: resolve('dist/assets/svg'),
      toType: 'dir'
    }]),
    new CopyWebpackPlugin([{
      from: resolve('assets/images'),
      to: resolve('dist/assets/images'),
      toType: 'dir'
    }]),
    new CopyWebpackPlugin([{
      from: resolve('assets/css'),
      to: resolve('dist/assets/css'),
      toType: 'dir'
    }]),
    new CopyWebpackPlugin([{
      from: resolve('assets/fonts'),
      to: resolve('dist/assets/fonts'),
      toType: 'dir'
    }]),
    new CopyWebpackPlugin([{
      from: resolve('assets/fontAwesome'),
      to: resolve('dist/assets/fontAwesome'),
      toType: 'dir'
    }]),
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    })
  ],
  resolve: {
    extensions: ['*', '.js', '.vue', '.json']
  },
  output: {
    path: resolve('dist'),
    filename: 'app.js'
  }
}
