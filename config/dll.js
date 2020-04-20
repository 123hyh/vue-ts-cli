const path = require("path");
const webpack = require("webpack");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { library } = require("../dll.config.js");

// dll文件存放的目录
const dllPath = "public/dll";
module.exports = {
  mode: 'production',
  entry: {
    ...library
  },
  output: {
    path: path.resolve(process.cwd(),dllPath),
    filename: "[name]-[chunkhash:7].dll.js",
    library: "[name]_[chunkhash]"
  },
  plugins: [
    new CleanWebpackPlugin(),
    new webpack.DllPlugin({
      path: path.join(process.cwd(), dllPath, "[name]_manifest.json"),
      name: "[name]_[chunkhash]"
    })
  ]
};