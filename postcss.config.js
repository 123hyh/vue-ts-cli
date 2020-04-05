const prefixSelector = require("postcss-prefix-selector");
const autoprefixer = require("autoprefixer");
module.exports = {
  plugins: [
    prefixSelector({
      prefix: ".front-end-system",
    }),
    autoprefixer
  ],
};
