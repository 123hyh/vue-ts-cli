import Vue from "vue";
import ElementUi from "element-ui";

import { router } from "@/router";
import { store } from "@/store";

import { App } from "@/App";
import { directives } from "@/directives";

Vue.use(ElementUi);
Vue.use(directives);

/* 全局样式 */
import './styles/global.scss'
/* ui 样式 */
import "element-ui/lib/theme-chalk/index.css";


// if (module.hot) {
//   module.hot.accept()
//   /* module.hot.accept(
//     ["./App.tsx", "@/router", "@/store", "@/directives"],
//     function() {
//       init()
//     }
//   ); */
// }
new Vue({
  el: "#app",
  store,
  router,
  render: (h) => h(App)
});
