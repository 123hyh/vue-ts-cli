const Webpack = require('webpack');
const webpackConfig = require('../config/production.js');
const compiler = Webpack(webpackConfig);

compiler.run();
