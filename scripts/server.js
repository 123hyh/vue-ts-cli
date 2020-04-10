
const path = require('path')
const Webpack = require('webpack');
const webpackConfig = require('../config/dev.js')
const WebpackDevServer = require('webpack-dev-server')
const compiler = Webpack(webpackConfig);

const devServerOptions =  {
    ...(webpackConfig.devServer || {}),  
    ...{
      contentBase: path.resolve(process.cwd(), "dist"),
      hot: true,
      quiet: true,
      inline:true,
      overlay: {
        errors: true,
        warnings: false
      },
      proxy: {
        "/apis": {
          target: "http://47.106.230.157:8080/apis",
          pathRewrite: { "^/apis": "" },
          changeOrigin: true
        }
      }
  }
}

const server = new WebpackDevServer(compiler, devServerOptions);

server.listen(8080, '127.0.0.1', () => {
  console.log('our application is running here： http://localhost:8080');
});