
import  {VueConstructor} from 'vue'
import{ Test } from '@/components/Test'
const Home: {[prop: string]: any}  = {
  components:{
    Test
  },
  render (h: any): JSX.Element  {  
    return (<div on-click={(): void=> this.handlerTemplate()}>
      <el-button>123</el-button>
      <Test name='huang'/>
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
