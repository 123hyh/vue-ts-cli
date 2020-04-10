const net = require('net');
const path = require('path');
const Webpack = require('webpack');
const webpackConfig = require('../config/dev.js');
const WebpackDevServer = require('webpack-dev-server');

const devServerOptions = {
  contentBase: path.resolve(process.cwd(), 'dist'),
  hot: true,
  quiet: true,
  inline: true,
  overlay: {
    errors: true,
    warnings: false,
  },
  proxy: {
    '/apis': {
      target: 'http://47.106.230.157:8080/apis',
      pathRewrite: { '^/apis': '' },
      changeOrigin: true,
    },
  },
};

function startService(port = 8080) {
  var server = net.createServer().listen(port);

  server.on('listening', function () {
    // 执行这块代码说明端口未被占用
    server.close(); // 关闭服务

    /* 启用 WebpackDevServer */
    const compile = Webpack(webpackConfig(port));
    const devService = new WebpackDevServer(compile, {
      ...(compile.devServer || {}),
      ...devServerOptions,
    });
    devService.listen(port, (e) => {
      console.log(e);
    });
  });

  server.on('error', function (err) {
    if (err.code === 'EADDRINUSE') {
      // 端口已经被使用
      startService((port += 1));
    }
  });
}

startService();
