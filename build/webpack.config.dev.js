'use strict'
const webpack = require('webpack')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin  = require('mini-css-extract-plugin')
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

module.exports = {
  mode: 'development',

  devServer: {
    hot: true,
    watchOptions: {
      poll: true
    }
  },  module: {
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
          "style-loader",
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
      from: resolve('assets/images'),
      to: resolve('dist/images'),
      toType: 'dir'
    }]),
    new CopyWebpackPlugin([{
      from: resolve('assets/svg'),
      to: resolve('dist/svg'),
      toType: 'dir'
    }]),
    new MiniCssExtractPlugin({
      filename: 'styles.css'
    })
  ],
  resolve: {
    extensions: ['*', '.js', '.vue', '.json']
  }
}
