import vue from "vue";
import { Test } from "@/components/Center.component/Test.component";
import { UserInstance } from "@/service/";
import { strongbox } from "utils";
import {mapGetters} from 'vuex'
const Home = vue.extend({
  computed:{
    ...mapGetters(['isLogin'])
  },
  data() {
    return { xx: 1 };
  },
  name: "Home",
  template: require("./Home.html"),
  async mounted(): Promise<any> {
    const d = await strongbox(() => UserInstance.getExchangerate());
  },
  components: {
    Test: Test()
  },
  methods: {
    handlerClick(): void {
      console.log(123);
    },
    async handlerTemplate(): Promise<any> {
      const x = new Promise((resolve, reject) => {
        resolve(1);
        this.$router.push("/user");
      });
      console.log(await x);
    }
  }
});
const m: any = module;

if (m.hot) {
  m.hot.accept();
  console.log(`更新了···`);
}
export default Home;
