import { component }from 'vue-tsx-support';
import { Test } from '@/components/Center.component/Test.component';
import {mapGetters} from 'vuex'

const Home = component({

  computed: {
    ...mapGetters(['isLogin'])
  },

  data () {
    return { xx: 1 };
  },

  name: 'Home',

  render () {
    return   (<div>
      <el-button onClick={(): any => this.handlerTemplate()}>123</el-button>
      <Test  dataTitle='测试2'> <div>测试 slot</div> </Test>
    </div>)
  },

  
  methods: {
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
