const net = require('net');
const path = require('path');
const Webpack = require('webpack');
const webpackConfig = require('../config/development.js');
const WebpackDevServer = require('webpack-dev-server');

class Server {
  constructor() {
    this.options = {
      before(app /* express */) {
        /* 伪造请求头，避免后端校验 */
        app.all('*', function (req, res, next) {
          const headers = {
            referer: 'http://s10001.ztyshop.vip',
            origin: 'http://s10001.ztyshop.vip',
            host: 'api.ztyshop.vip',
            'Origin-Name': 'home-index',
          };
          /* 设置 express 请求头 */
          req.headers = { ...req.headers, ...headers };

          next();
        });
      },
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
      proxy: {
        '/apis': {
          target: 'http://api.ztyshop.vip/api1',
          pathRewrite: { '^/apis': '' },
          changeOrigin: true,
        },
      },
    };
    this.bootstrapDevService();
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
}

new Server();
