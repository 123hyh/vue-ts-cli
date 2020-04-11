const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const yargs = require('yargs');
const { production: isProd } = yargs.argv;
/* Css基础loader */
const CSS_BASE_LOADER_MIXIN = (loader, setModules = false) => {
  const BASE = [
    /* 生存环境 css */
    isProd ? MiniCssExtractPlugin.loader : 'style-loader',
    `css-loader?modules=${setModules}`,
    'postcss-loader',
  ];
  return {
    use: loader ? [...BASE, loader] : BASE,
  };
};
const moduleRules = [
  {
    test: /\.tsx?$/,
    use: [
      'babel-loader',
      {
        loader: 'ts-loader',
        options: { transpileOnly: true },
      },
      {
        loader: path.resolve(__dirname, '../loaders/hot.js'),
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
    ...CSS_BASE_LOADER_MIXIN(),
  },
  {
    /* 配置 sass模块化时 需要 改写 css-loader&modules */
    test: /\.scss$/,
    ...CSS_BASE_LOADER_MIXIN('sass-loader', true),
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
  // html模板
  {
    test: /.html$/,
    use: {
      loader: 'html-loader',
    },
  },
];
/* 打包 生产环境时 js 进行转换  */
process.env.NODE_ENV === 'production' &&
  moduleRules.unshift({
    test: /\.js$/,
    use: {
      loader: 'babel-loader',
    },
  });
module.exports.moduleRules = moduleRules;
