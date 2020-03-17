import Vue from 'vue';
import Vuex, {Store} from 'vuex';
Vue.use(Vuex); 

export const store: Store< {test: { name: string } } > = new Vuex.Store({
  state: {
    test: {
      name: '黄'
    },
  },
  getters: { 
    userInfoData(state): any{
      return state.test
    }
  }
})
