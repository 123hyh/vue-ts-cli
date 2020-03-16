const webpack = require("webpack");
const config = require("./webpack.config");
const merge = require("webpack-merge");
const path = require('path')
const entry = require("./module/entry");
const output = require("./module/output");
const devConfig = {
  mode: "development",
  entry,
  output: output("development"),
  devtool: "inline-source-map",
  devServer: {
    contentBase: path.resolve(process.cwd(),'dist'),
    hot: true,
    overlay: {
      errors: true,
      warnings: true
    }
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};
module.exports = merge(config, devConfig);
