# 开始
脚手架使用 [vue-tsx-support](https://www.npmjs.com/package/vue-tsx-support "vue-tsx-support") 对 VUE TSX [语法](https://github.com/vuejs/jsx "语法")

    // vue-tsx-support 需要在 tsconfig.json 添加配置 
    {
    	"compilerOptions":{...},
    	"include": [
    		"node_modules/vue-tsx-support/enable-check.d.ts", 
    		"src/**/*.ts",
    		"src/**/*.tsx",
    	]
    }
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
    	| - | - User.component
    	| - | - | - User.component.tsx
    	| - | - | - User.component.scss
------------

- 
### 2.2 创建组件 


    import * as tsx from "vue-tsx-support"; // 必须使用 这个插件创建组件
	
    export const Test = tsx.component({
      
      name: "Test",
    
      render(){
    
        const { default: defaults } = this.$slots;
    
        return <div class="active" onClick = {
          (e: MouseEvent): any => this.handlerClick(e)}>
          <h2>{this.dataTitle}</h2>
          <ul>
            {
              [1,2,3,4].map(item => (<li onClick = {(e: MouseEvent): any=> this.handlerClick(e)} >{ item }</li>))
            }
          </ul>
          {
            defaults
          }
        </div>
        
      },
      methods: {
        handlerClick(e: MouseEvent): void {
          console.log(e)
          e.stopPropagation();
          this.$emit("handlerClick");
        }
      },
      data() {
        return { x: 2 };
      },
      computed: {
        calc(): number {
          return 123;
        }
      },
      props: {
        dataTitle: {
          type: String,
          required: true
        }
      }
    })





[config/env/env.prod.js]: https://github.com/123hyh/vue-ts-cli/blob/master/config/env/env.prod.js
[参考]:  https://github.com/vuejs/jsx