# 1.  组件规范化
- 
###    1.1 目录结构：

    	|- components
    	|  |- User.component
    	|  |- User.component.html
    	|  |- User.component.ts
    	|  |- User.component.scss
------------

- 
### 	1.2 创建组件
使用 Vue.extend 方法 保证正常使用typescript 对 vue 提示功能：
template 必须使用 require函数导入html模板；
或者使用 tsx脚本的render方法创建模板（ 建议使用html模板 ）
例子：
    	Vue.extend({
    	  data: () =>({
          test: 1
        }),
    	  template: require('./User.componenthtml.html'), 
    	  methods: {},
    	  props: {},
    	  computed: {}
    	})

------------
# 2.项目目录


