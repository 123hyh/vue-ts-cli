import { component }from 'vue-tsx-support';
import {mapGetters} from 'vuex'
import{home} from '@/service/fetch/home'
import {TestSlot} from '@/components/Test/TestSlot'

const Home = component({

  computed: {
    ...mapGetters(['isLogin'])
  },

  data () {
    return { xx: 2, bind: 'h' };
  },

  name: 'Home',
  async mounted () {
    const d = await home.getData({})
    debugger
  },
  render () {
    return (<div>
      <el-button onClick={(): any => this.handlerTemplate()}>123</el-button>
      <hr/>
      <TestSlot
        currentNumber={2}
        onHandleTestSlotClick={
          (): void => {
            debugger
          }
        }
        scopedSlots={
          {
            footer (): JSX.Element {
              return <div>测试TestSlot组件</div>
            },
            default (): JSX.Element {
              return <div>slot-default</div>
            }
          }
        }>
      </TestSlot>
      <router-view></router-view>
    </div>)
  },

  
  methods: {
    handlerSlotClick (e: Event): void {
      e.stopPropagation()
      console.log('testSlot')
    },
    async handlerTemplate (): Promise<any> {
      const x = new Promise((resolve, reject) => {
        resolve(1);
        this.$router.push('/user');
      });
      console.log(await x);
    }
  }
});

export default Home;
