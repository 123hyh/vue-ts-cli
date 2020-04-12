module.exports = {
  proxy: {
    '/apis': {
      target: 'http://api.ztyshop.vip/api1',
      pathRewrite: { '^/apis': '' },
      changeOrigin: true,
    },
  },
  /* 请求前的钩子 */
  requestBefore(app /* expressInstance */) {
    app.all('*', function (req, res, next) {
      const headers = {
        /* referer: 'http://s10001.ztyshop.vip',
        origin: 'http://s10001.ztyshop.vip',
        host: 'api.ztyshop.vip',
        'Origin-Name': 'home-index', */
      };
      /* 设置 express 请求头 */
      req.headers = { ...req.headers, ...headers };

      next();
    });
  },
};
