
const Webpack = require('webpack');
const webpackConfig = require('../config/production.js');

const ora = require('ora');

const spinner = ora('Loading unicorns').start();


const compiler = Webpack(webpackConfig);

compiler.run(()=>{
  console.log(2143)
});
