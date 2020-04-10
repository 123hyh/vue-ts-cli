process.env.NODE_ENV = 'development';

const webpack = require('webpack');
const config = require('./webpack.base');
const merge = require('webpack-merge');
const entry = require('./module/entry');
const output = require('./module/output');

const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');

const devConfig = (PORT) => ({
  mode: 'development',
  entry,
  output: output('development'),
  devtool: 'source-map',

  plugins: [
    new webpack.DefinePlugin(require('./env/env.dev')),
    // 清空命令行信息
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [
          `Your application is running here:  http://localhost:${PORT}`,
        ],
      },
      clearConsole: true,
    }),
    // new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
});

module.exports = (PORT) => merge(config, devConfig(PORT));
