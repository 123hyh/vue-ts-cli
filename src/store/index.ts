import Vue from 'vue';
import Vuex, { Store } from 'vuex';
import { beforeRefreshStoreEvent, afterRefreshStoreEvent } from './resetStore';
Vue.use(Vuex);

import { user } from '@/store/module/user';
export const store: Store<any> = new Vuex.Store({
  modules: {
    user
  }
});
beforeRefreshStoreEvent();
afterRefreshStoreEvent();
