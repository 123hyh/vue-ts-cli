const merge = require('webpack-merge');
const webpack = require('webpack');
const env = require('./env/env.prod');
const entry = require('./webpack.options/entry');
const config = require('./webpack.base');
const PROD_CONFIG = {
  entry,
  mode: 'production',
  plugins: [new webpack.DefinePlugin(env)],
};
module.exports = merge(config, PROD_CONFIG);
