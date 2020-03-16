import Vue,{ CreateElement, VNode } from "vue";

import ElementUi  from 'element-ui'
Vue.use(ElementUi)
import 'element-ui/lib/theme-chalk/index.css';

import Home from '@/view/Home'
const App = {
  template: "<div><Home /></div>",
  components:{
    Home
  }
};
new Vue({
  el: "#app",
  render: (h: CreateElement): VNode  =>  h(App) 
});
