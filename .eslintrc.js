module.exports = {
  root: true, // 作用的目录是根目录
  parser: '@typescript-eslint/parser',
  plugins: ["@typescript-eslint"],
  parserOptions: {
    "project": "./tsconfig.json", 
    ecmaVersion: 2015,
    sourceType: "module", // 按照模块的方式解析
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true, // 开发环境配置表示可以使用浏览器的方法
    node: true //
  },
  rules: {
    // 自定义的规则
    "linebreak-style": [0, "error", "windows"],
    indent: ["error", 2],
    "@typescript-eslint/restrict-plus-operands": "warn",
    '@typescript-eslint/no-explicit-any': 'off',
    // 变量
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    // 驼峰
    '@typescript-eslint/camelcase': ['off', {properties: 'always'}]
  },
  "extends": ["plugin:@typescript-eslint/recommended"]
};
