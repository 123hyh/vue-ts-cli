import { component }from 'vue-tsx-support';
import { Test } from '@/components/Center.component/Test.component';
import {CTabs} from '@/components/Tabs/CTabs.tsx'
import {CTabItem} from '@/components/Tabs/CTbabsItem'
import {CTabsSub} from '@/components/Tabs/CTabsSub'
import {mapGetters} from 'vuex'

const Home = component({

  computed: {
    ...mapGetters(['isLogin'])
  },

  data () {
    return { xx: 2, bind: 'h' };
  },

  name: 'Home',
  mounted () {
    console.log(this)
  },
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
      {/* 测试 tabs */}
      <CTabs v-model={this.bind}>
        <CTabItem name='h'>
          <Test
            onHandlerClick={ this.handlerClick }
            dataTitle='测试1'
            scopedSlots={{ 
              default: (x): JSX.Element => (<div onClick={this.handlerSlotClick}>测试 slots{x}</div>)
            }}
          > 
          </Test>
        </CTabItem>
        <CTabItem name='y'>
          <Test
            onHandlerClick={ this.handlerClick }
            dataTitle='测试2'
            scopedSlots={{ 
              default: (x): JSX.Element => (<div onClick={this.handlerSlotClick}>测试 slots{x}</div>)
            }}
          > 
          </Test>
        </CTabItem>
        <CTabItem name='m'>
          <CTabsSub></CTabsSub>
        </CTabItem>
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
