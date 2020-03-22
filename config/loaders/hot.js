const schema = {
  type: "object",
  properties: {
    test: {
      type: "string"
    }
  }
};

module.exports = function(source) {
  // 对资源应用一些转换……
  return source;
};
