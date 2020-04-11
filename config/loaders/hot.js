const hash = require('hash-sum');
const yargs = require('yargs');
const { development: isDev } = yargs.argv;
module.exports = function (source) {
  // 对 tsx 资源应用一些转换……
  let { request, resourcePath } = this;
  if (/\.tsx$/.test(resourcePath) && isDev) {
    const id = hash(request);

    let path = resourcePath.split(/\\/);
    path = path.join('/');
    // path = `./${path[path.length - 1]}`;

    /* 添加导入文件和导入文件 */
    source = `
      import * as scripts from '${path}'; \n
      export * from '${path}'; \n
      ${source} \n
      /* 热更新处理 */
      ;const M_HOT = module.hot;
      if ( M_HOT ) {

        const HOT_API = require('vue-hot-reload-api');
        const Vue = require('vue');

        HOT_API.install(Vue);
        M_HOT.accept();

        /* 批量处理 */
        function handler(method = 'createRecord'){
          const scriptKeys = Object.keys(scripts);
          scriptKeys.forEach( (item, i) => {
            HOT_API[method]('${id}', scripts[item])
          })
        }

        handler(M_HOT.data ? 'reload' : 'createRecord' )
    }`;
  }
  return source;
};
