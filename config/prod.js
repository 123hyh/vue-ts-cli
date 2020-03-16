const merge = require("webpack-merge");

const entry = require("./module/entry");
const output = require("./module/output");

const config = require("./webpack.config");
const PROD_CONFIG = {
  entry,
  output: output("production"),
  mode: "production"
};

module.exports = merge(config, PROD_CONFIG);
