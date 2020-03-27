const webpack = require("webpack");
const config = require("./webpack.base");
const merge = require("webpack-merge");
const path = require("path");
const entry = require("./module/entry");
const output = require("./module/output");

const FriendlyErrorsWebpackPlugin = require("friendly-errors-webpack-plugin");

const devConfig = {
  mode: "development",
  entry,
  output: output("development"),
  devtool: "source-map",
  devServer: {
    contentBase: path.resolve(process.cwd(), "dist"),
    hot: true,
    quiet: true,
    inline:true,
    overlay: {
      errors: true,
      warnings: false
    },
    proxy: {
      "/apis": {
        target: "http://47.106.230.157:8080/apis",
        pathRewrite: { "^/apis": "" },
        changeOrigin: true
      }
    }
  },
  plugins: [
    new webpack.DefinePlugin(require("./env/env.dev")),
    // 清空命令行信息
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [
          `Your application is running here:  http://localhost:${8080}`
        ]
      },
      clearConsole: true
    }),
    // new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};
module.exports = merge(config, devConfig);
