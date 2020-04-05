const prefixSelector = require("postcss-prefix-selector");
const autoprefixer = require("autoprefixer");
module.exports = {
  plugins: [
    prefixSelector({
      prefix: "[data-front-end-system]",
      transform(prefix, selector, prefixedSelector){
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
