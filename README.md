# 开始
# 1. CLI 命令
-   开发环境：

	`npm run  dev`

-  测试环境：

	`npm run build:test`
-  测试环境（visual）

	`npm run build:visual` 打包后可查看体积详情
-  生产环境：

	`npm run  build:prodution`


-  如果您想设置  **测试环境和生产环境**    的 API 地址 可以通过环境变量文件做出修改  [config/env/env.prod.js][config/env/env.prod.js]；


------------



# 2.  组件规范化
- 
###    2.1 目录结构：

    	| - components
    	|  | - User.component
    	|	 |  | - User.component.tsx
    	|  |  | - User.component.scss
------------

- 
### 	2.2 创建组件
使用 Vue.extend 方法 保证正常使用typescript 对 vue 提示功能：


      Vue.extend({
    	  data: () =>({
          test: 1
        }),
    	  render(h){
					return <div>Test</div>
				}, 
    	  methods: {},
    	  props: {},
    	  computed: {}
    	})

------------




[config/env/env.prod.js]: https://github.com/123hyh/vue-ts-cli/blob/master/config/env/env.prod.js