import Vue from "vue";
import VueRouter from "vue-router";
import { routerHooks } from "@/router/hooks";
Vue.use(VueRouter);
export const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: (): any =>
        import(/* webpackChunkName: "Home" */ "@/view/Home/Home")
    },
    {
      path: '/login',
      component: ()=> import(/* webpackChunkName: "Home" */'@/view/Login/Login')
    }
  ]
});

// 注册路由钩子
routerHooks(router);
