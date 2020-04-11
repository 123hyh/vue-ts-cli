const webpack = require('webpack');
const config = require('./webpack.base');
const merge = require('webpack-merge');
const entry = require('./webpack.options/entry');

const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const devConfig = (PORT) => ({
  mode: 'development',
  entry,
  devtool: 'source-map',

  plugins: [
    new webpack.DefinePlugin(require('./env/env.dev')),
    // 清空命令行信息
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [`您的应用程序正在这里运行:  http://localhost:${PORT}`],
      },
      clearConsole: true,
    }),
    // new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
});

module.exports = (PORT) => merge(config, devConfig(PORT));
