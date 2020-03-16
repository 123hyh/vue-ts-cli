
import  {VueConstructor} from 'vue'
const Home: VueConstructor  = {
  render (h: any): JSX.Element  {  
    return (<div on-click={(): void=> this.handlerTemplate()}>home</div>)
  },
  methods: {
    handlerTemplate: async (): Promise<any>  => {
      const x = new Promise((resolve,reject) => {
        resolve(2)
      })
      console.log(await x)
    }
  }
}
export default Home;
