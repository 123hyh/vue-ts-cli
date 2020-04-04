# 1. 组件规范化

### 1.1、 目录结构：

                        |- components
                        |  |- User.component
                        |  |- User.component.html
                        |  |- User.component.ts
                        |  |- User.component.scss

---

### 1.2、 创建组件

使用 vue.extend 方法 保证正常使用 ts 的提示功能：
template 必须使用 require 函数导入 html 模板；
或者使用 tsx 脚本的 render 方法创建模板（ 建议使用 html 模板 ）
  
 vue.extend({
data: () =>({}),
template: require('./User.componenthtml.html'),
methods: {},
props: {},
computed: {}
})

---

# 2.目录结构
