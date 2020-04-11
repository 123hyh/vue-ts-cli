const { generatorPages } = require('../utils');

module.exports = {
  index: './src/index.tsx',
  ...generatorPages('js').pagesEntrys,
};
