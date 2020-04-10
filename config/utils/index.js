const fs = require('fs');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

/* 生成多页面应用 */
module.exports.generatorPages = function generatorPages(type = 'html') {
  const pagesPlugins = [];
  const pagesEntrys = {};
  const pagesPath = process.cwd() + '/src/pages';

  /* 读取 pages目录 */
  const pageDir = fs.readdirSync(pagesPath);

  if (pageDir) {
    for (let item of pageDir) {
      const filePath = path.resolve(pagesPath, item);

      /* 判断是否存在子目录 */
      if (fs.statSync(filePath).isDirectory()) {
        /* 进入目录 */
        const files = fs.readdirSync(filePath);

        /* 查找 文件 */
        const htmlName = files.find((item) => /.html$/.test(item));
        const jsName = files.find((item) => /.(tsx|js|ts)$/.test(item));

        /* 生成 js */
        if (type === 'js' && jsName) {
          pagesEntrys[item] = path.resolve(filePath, jsName);
        }
        /* 生成html */
        if (type === 'html' && htmlName) {
          pagesPlugins.push(
            new HtmlWebpackPlugin({
              chunks: [item],
              filename: `${item}.html`,
              template: path.resolve(filePath, htmlName),
            })
          );
        }
      }
    }
  }
  return { pagesPlugins, pagesEntrys };
};
