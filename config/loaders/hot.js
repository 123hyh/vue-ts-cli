
const hash = require('hash-sum');

module.exports = function(source) {
  // 对资源应用一些转换……
  let { request, resourcePath } = this;
  if(/\.tsx$/.test(resourcePath)){
    const id = hash(request);
    let path = resourcePath.split(/\\/);
    path = `./${path[path.length - 1]}`;
    /* 添加导入文件和导入文件 */
    source = `
      import * as scripts from '${path}'; \n
      export * from '${path}'; \n
      ${source} \n
      /* 热更新处理 */   
      ;if ( module.hot ) {

        const api = require('vue-hot-reload-api');
        const Vue = require('vue')

        api.install(Vue);
        module.hot.accept();

        /* 批量处理 */
        const scriptKeys = Object.keys(scripts);
        if(module.hot.data){
          scriptKeys.forEach( (item, i) => {
            api.rerender('${id}', scripts[item])
          })
        }else{
          scriptKeys.forEach( (item, i) => {
            api.createRecord('${id}', scripts[item])
          })
        }
    }`;
  }
  return source;
};
