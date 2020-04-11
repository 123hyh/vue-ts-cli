module.exports = {
  root: true, // 作用的目录是根目录
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  parserOptions: {
    project:[ "./tsconfig.json"],
    ecmaVersion: 2015,
    sourceType: "module", // 按照模块的方式解析
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true, // 开发环境配置表示可以使用浏览器的方法
    node: true, //
  },
  rules: {
    // 自定义的规则
    "linebreak-style": [0, "error", "windows"],
    indent: ["error", 2],
    // 禁止 function 定义中出现重名参数
    "no-dupe-args": 2,
    // 禁止对象字面量中出现重复的 key
    "no-dupe-keys": 2,
    // 强制使用一致的反勾号、双引号或单引号
    quotes: [2, "single", "avoid-escape"],
    // 强制在块之前使用一致的空格
    "space-before-blocks": [2, "always"],
    // 强制在 function的左括号之前使用一致的空格
    "space-before-function-paren": [2, "always"],
    // 强制在圆括号内使用一致的空格
    "space-in-parens": [2, "never"],
    // 要求操作符周围有空格
    "space-infix-ops": 2,
    // 强制在一元操作符前后使用一致的空格
    "space-unary-ops": [
      2,
      {
        words: true,
        nonwords: false,
      },
    ],
    // 要求使用 let 或 const 而不是 var
    "no-var": 0,
    // 指定数组的元素之间要以空格隔开(, 后面)， never参数：[ 之前和 ] 之后不能带空格，always参数：[ 之前和 ] 之后必须带空格
    "array-bracket-spacing": [2, "never"],
    // 强制在对象字面量的属性中键和值之间使用一致的间距
    "key-spacing": [
      2,
      {
        beforeColon: false,
        afterColon: true,
      },
    ],
    // 强制在花括号中使用一致的空格
    "object-curly-spacing": 0,
    // 控制逗号前后的空格
    "comma-spacing": [
      2,
      {
        before: false,
        after: true,
      },
    ],
    // 以方括号取对象属性时，[ 后面和 ] 前面是否需要空格, 可选参数 never, always
    "computed-property-spacing": [2, "never"],
    "@typescript-eslint/restrict-plus-operands": "warn",
    "@typescript-eslint/no-explicit-any": "off",
    // 变量
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-empty-interface": "off",
    "@typescript-eslint/no-var-requires": "off",
    // 驼峰
    "@typescript-eslint/camelcase": [
      "off",
      {
        properties: "always",
      },
    ],
  },
  extends: ["plugin:@typescript-eslint/recommended"],
};
