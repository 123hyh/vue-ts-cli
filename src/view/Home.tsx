
import  vue from 'vue'
import{ Test } from '@/components/Test'
const Home = vue.extend({
  components:{
    Test
  },
  render (h: any): JSX.Element  {  
    return (<div  on-click={(): Promise<any> => this.handlerTemplate()}>
      <el-button>123</el-button>
      <Test name='huang' on-handlerClick={ (): void => this.handlerClick()}/>
    </div>)
  },
  methods: {
    handlerClick(): void{
      console.log(123)
    },
    async handlerTemplate  (): Promise<any> {
      const x = new Promise((resolve,reject) => {
        resolve(1);
        this.$router.push('/user')
      })
      console.log(await x)
    }
  }
})
export default Home;
