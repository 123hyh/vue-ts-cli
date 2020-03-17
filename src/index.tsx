import Vue,{ CreateElement } from "vue";
import ElementUi  from 'element-ui'

import { store } from '@/store'
import { router } from '@/router'
import { App } from '@/App'
import { directives } from '@/directives'

Vue.use(ElementUi)
Vue.use(directives)

import 'element-ui/lib/theme-chalk/index.css';


new Vue({
  el: "#app",
  store,
  router,
  render: (h: CreateElement): JSX.Element  =>  <App />
});
