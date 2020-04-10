const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const fs = require("fs");
/* 打包体积可视化插件 */
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;
/* 压缩 */
const CompressionPlugin = require("compression-webpack-plugin");

const { moduleRules } = require("./module/module");

const conf = {
  externals: {},
  module: {
    rules: moduleRules,
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
    alias: {
      "@": path.resolve(process.cwd(), "src"),
      vue$: "vue/dist/vue.js",
      utils: path.resolve(process.cwd(), "src/utils/index.ts"),
    },
  },
  plugins: [
    new CleanWebpackPlugin(),

    ...generatorPages(),

    new CompressionPlugin({
      test: /\.(js|css|html|svg|webp|png)$/,
      threshold: 10240,
      minRatio: 0.8,
    }),
  ],
};

// 可视化打包文件插件
if (process.env.buildvisual) {
  conf.plugins.push(new BundleAnalyzerPlugin());
}
module.exports = conf;

/* 生成多页面应用 */
function generatorPages() {
  const pages = [
    new HtmlWebpackPlugin({
      template: path.resolve(process.cwd(), "public/index.html"),
    }),
  ];

  const pagesPath = process.cwd() + "/src/pages";

  /* 读取 pages目录 */
  const pageDir = fs.readdirSync(pagesPath);

  if (pageDir) {
    for (let item of pageDir) {
      const filePath = path.resolve(pagesPath, item);
      /* 判断是否存在子目录 */
      if (fs.statSync(filePath).isDirectory()) {
        /* 进入目录 */
        const files = fs.readdirSync(filePath);
        console.log(filePath);
        /* 查找 html文件 */
        const htmlName = files.find((item) => /.html$/.test(item));
        console.log(item);
        if (htmlName) {
          pages.push(
            new HtmlWebpackPlugin({
              filename: `${item}.html`,
              template: path.resolve(filePath, htmlName),
            })
          );
        }
      }
    }
  }
  return pages;
}
