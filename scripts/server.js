const net = require('net');
const path = require('path');
const fs = require('fs');
const Webpack = require('webpack');
const webpackConfig = require('../config/development.js');
const WebpackDevServer = require('webpack-dev-server');

class Server {
  constructor() {
    this.options = {
      contentBase: path.resolve(process.cwd(), 'dist'),
      hot: true,
      quiet: true,
      host: '0.0.0.0',
      progress: true,
      clientLogLevel: 'none',
      inline: true,
      overlay: {
        errors: true,
        warnings: false,
      },
    };
    this.handlerHttp().then((res) => {
      this.bootstrapDevService();
    });
  }
  /* 启动程序 */
  bootstrapDevService() {
    this.handlerPort().then((port) => {
      const compile = Webpack(webpackConfig(port));

      const devService = new WebpackDevServer(compile, {
        ...(compile.devServer || {}),
        ...this.options,
      });

      /* 启用 WebpackDevServer */
      devService.listen(port, (e) => {
        console.log(e);
      });
    });
  }

  /* 处理 启动端口占用 */
  handlerPort() {
    return new Promise((resolve) => {
      this.selectorStartPort(resolve);
    });
  }
  /* 挑选端口 */
  selectorStartPort(cb, port = 8080) {
    var server = net.createServer().listen(port);

    server.on('listening', () => {
      // 执行这块代码说明端口未被占用
      server.close(); // 关闭服务
      cb(port);
    });

    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        // 端口已经被使用
        this.selectorStartPort((port += 1));
      }
    });
  }
  /* 处理 http 请求选项 */
  handlerHttp() {
    return new Promise((resolve) => {
      const url = path.resolve(process.cwd(), 'http.config.js');
      fs.stat(url, (err, stats) => {
        if (!err && stats.isFile()) {
          const { proxy = {}, requestBefore = () => {} } = require(url);
          this.options.proxy = proxy;
          this.options.before = requestBefore;
        }
        return resolve(true);
      });
    });
  }
}

new Server();
