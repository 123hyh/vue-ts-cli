const schema = {
  type: "object",
  properties: {
    test: {
      type: "string"
    }
  }
};
const hash = require('hash-sum')
module.exports = function(source) {
  const { request ,resourcePath} = this;
  const id = hash(request);
  if(/\.tsx$/g.test(request)){
    const transSrc = request;
    transSrc.replace(/\\/g,'/')
    console.log(transSrc)
    // console.log(`${transSrc}--------------`)
    const content = `
    import * as scripts from  '${transSrc}';
    console.log(scripts)
    if (module.hot) {
      module.hot.accept();
      console.log('${id}');
    }`
    // 对资源应用一些转换……
    // request.replace(/.\../g, '/')
    return `${source} \n ${content}`;
  }else{
    return source
  }
};
