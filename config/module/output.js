const path = require('path');
const yarg = require('yargs');
const { development: isDev } = yarg.argv;
module.exports = (env) => ({
  filename: `js/[name]${isDev ? '' : '.[chunkhash:16]'}.js`,
  path: path.resolve(process.cwd(), 'dist'),
  chunkFilename: 'js/[name].[chunkhash:16].js',
});
