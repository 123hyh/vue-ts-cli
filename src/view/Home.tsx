
import  {VueConstructor} from 'vue'
const Home: {[prop: string]: any}  = {
  render (h: any): JSX.Element  {  
    return (<div on-click={(): void=> this.handlerTemplate()}>
      <el-button>123</el-button>
    </div>)
  },
  methods: {
    async handlerTemplate  (): Promise<any> {
      const x = new Promise((resolve,reject) => {
        resolve(1)
      })
      console.log(await x)
    }
  }
}
export default Home;
