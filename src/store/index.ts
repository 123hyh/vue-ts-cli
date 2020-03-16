import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
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
