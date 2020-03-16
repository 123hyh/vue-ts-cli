import Vue,{ CreateElement, VNode } from "vue";
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
