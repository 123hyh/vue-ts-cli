import { component }from 'vue-tsx-support';
import { Test } from '@/components/Center.component/Test.component';
import {CTabs} from '@/components/Tabs/CTabs.tsx'
import {CTabItem} from '@/components/Tabs/CTbabsItem'
import {mapGetters} from 'vuex'

const Home = component({

  computed: {
    ...mapGetters(['isLogin'])
  },

  data () {
    return { xx: 2, bind: '123' };
  },

  name: 'Home',

  render () {
    return (<div>
      <el-button onClick={(): any => this.handlerTemplate()}>123</el-button>
      <Test
        onHandlerClick={ this.handlerClick }
        dataTitle='测试2'
        scopedSlots={{ 
          default: (x): JSX.Element => (<div onClick={this.handlerSlotClick}>测试 slots{x}</div>)
        }}
      > 
      </Test>
      <hr/>
      <CTabs v-model={this.bind}>
        <CTabItem name='h'></CTabItem>
        <CTabItem name='y'></CTabItem>
        <CTabItem name='m'></CTabItem>
      </CTabs>
    </div>)
  },

  
  methods: {
    handlerSlotClick (e: Event): void {
      e.stopPropagation()
      console.log('testSlot')
    },
    handlerClick (): void {
      console.log(123);
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
