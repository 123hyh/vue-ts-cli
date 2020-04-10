const Webpack = require('webpack');
const webpackConfig = require('../config/prod.js')
const compiler = Webpack(webpackConfig);

compiler.run()