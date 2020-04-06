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
  plugins: [new webpack.DefinePlugin(env)]
};
module.exports = merge(config, PROD_CONFIG);
