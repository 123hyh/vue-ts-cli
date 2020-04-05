const prefixSelector = require("postcss-prefix-selector");
const autoprefixer = require("autoprefixer");
module.exports = {
  plugins: [
    /* 所有 class 添加 前缀 */
    prefixSelector({
      prefix: "[data-front-end-system]",
      transform(prefix, selector, prefixedSelector){
        /* body 作为节点 */
        if (selector === 'body') {
          return  `body${prefix}` ;
        } else {
          return prefixedSelector;
        }
      }
    }),
    autoprefixer
  ],
};
