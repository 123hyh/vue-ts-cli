
process.env.NODE_ENV = 'production'
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const merge = require("webpack-merge");
const webpack = require("webpack");
const env = require("./env/env.prod");
const entry = require("./module/entry");
const output = require("./module/output");
const config = require("./webpack.base");
const PROD_CONFIG = {
  entry,
  output: output("production"),
  mode: "production",
  plugins: [
    /* css分离 */
    new MiniCssExtractPlugin({
      filename: 'css/[name].[chunkhash].css',
      chunkFilename: 'css/[name].[chunkhash].css'
    }),
    new webpack.DefinePlugin(env)
  ]
};
module.exports = merge(config, PROD_CONFIG);
