const prefixSelector = require('postcss-prefix-selector');
const autoprefixer = require('autoprefixer');
module.exports = {
  plugins: [
    /* 所有 class 添加 前缀 */
    prefixSelector({
      prefix: '[data-front-end-system]',
      transform(prefix, selector, prefixedSelector) {
        /* body 作为节点 */
        if (selector === 'body') {
          return `body${prefix}`;
        } else if(selector === 'html'){
          return selector
        }else {
          return prefixedSelector;
        }
      },
    }),
    /* 样式自动添加前缀 */
    autoprefixer,
  ],
};
