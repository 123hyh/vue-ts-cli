const merge = require('webpack-merge');
const webpack = require('webpack');
const env = require('./env/env.prod');
const entry = require('./webpack.options/entry');
const config = require('./webpack.base');
/* 压缩 */
const CompressionPlugin = require('compression-webpack-plugin');
const PROD_CONFIG = {
  entry,
  mode: 'production',
  plugins: [
    /* 启用gizp压缩 */
    new CompressionPlugin({
      test: /\.(js|css|html|svg|webp|png|jpg)$/,
      threshold: 50,
      minRatio: 0.8,
    }),
    new webpack.DefinePlugin(env),
  ],
};
module.exports = merge(config, PROD_CONFIG);
