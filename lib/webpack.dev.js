const merge = require('webpack-merge');
const webpack = require('webpack');
const baseConfig = require('./webpack.base');// 合并基础配置


const devConfig = {
  mode: 'production',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    contentBase: './dist',
    hot: true,
    stats: 'errors-only',
  },
  devtool: 'cheap-source-map',

};

module.exports = merge(baseConfig, devConfig);
