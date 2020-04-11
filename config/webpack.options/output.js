const path = require('path');
const yarg = require('yargs');
const { production: isProd } = yarg.argv;

class Output {
  constructor() {
    const chunkhash = (isProd ? '.[chunkhash:16]' : '') + '.js';
    this.outputOptions = {
      filename: `js/[name]${chunkhash}`,
      path: path.resolve(process.cwd(), 'dist'),
      chunkFilename: `js/[name]${chunkhash}`,
    };
  }
}
const { outputOptions } = new Output();
module.exports = outputOptions;
