const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const yargs = require('yargs');
const { production: isProd } = yargs.argv;

class Rules {
  constructor() {
    this.rules = [
      {
        test: /\.tsx?$/,
        use: [
          'babel-loader',
          {
            loader: 'ts-loader',
            options: { transpileOnly: true },
          },
          {
            loader: path.resolve(process.cwd(), 'config/loaders/hot.js'),
          },
          {
            loader: 'eslint-loader',
            /*  options: {
              formatter: require("eslint-friendly-formatter")
            } */
          },
        ],
        // include: [path.resolve(process.cwd(), "src")], // 指定检查的目录
        /* options: {
          // 这里的配置项参数将会被传递到 eslint 的 CLIEngine
          formatter: require("eslint-friendly-formatter") // 指定错误报告的格式规范
        } */
      },
      {
        test: /\.css$/,
        ...this.handlerCssLoader(),
      },
      {
        /* 配置 sass模块化时 需要 改写 css-loader&modules */
        test: /\.scss$/,
        ...this.handlerCssLoader('sass-loader', true),
      },
      // 图片
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: isProd
              ? {
                  outputPath: 'images',
                }
              : {},
          },
        ],
      },
      // 字体
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: isProd
              ? {
                  outputPath: 'fonts',
                }
              : {},
          },
        ],
      },
    ];
    /* 生产环境对js babel转换 */
    isProd &&
      this.rules.unshift({
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
        },
      });
  }

  /**
   * 处理 Css loader
   * @param { String | Object} loader
   * @param { Boolean } setModules  启用 css模块
   */
  handlerCssLoader(loader, setModules = false) {
    const BASE_LOADER = [
      /* 生存环境 css */
      isProd ? MiniCssExtractPlugin.loader : 'style-loader',
      `css-loader?modules=${setModules}`,
      'postcss-loader',
    ];
    return {
      use: loader ? [...BASE_LOADER, loader] : BASE_LOADER,
    };
  }
}
/* webpack plugins */
class Plugins {
  constructor() {
    /* css分离 */
    this.plugins = isProd
      ? this.handlerProduction()
      : this.handlerDevelopment();
  }
  /* 处理 生产环境 plugins */
  handlerProduction() {
    return [
      new MiniCssExtractPlugin({
        filename: 'css/[name].[chunkhash].css',
        chunkFilename: 'css/[name].[chunkhash].css',
      }),
    ];
  }
  /* 开发环境 plugins */
  handlerDevelopment() {
    return [];
  }
}
const { rules } = new Rules();
const { plugins } = new Plugins();
module.exports = { rules, plugins };
