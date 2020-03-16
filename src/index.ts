import Vue,{ CreateElement, VNode } from "vue";

import {store} from '@/store'
import {router} from '@/router'
import {App} from '@/App'

import ElementUi  from 'element-ui'
Vue.use(ElementUi)
import 'element-ui/lib/theme-chalk/index.css';


new Vue({
  el: "#app",
  store,
  router,
  render: (h: CreateElement): VNode  =>  h(App) 
});
