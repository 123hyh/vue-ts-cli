import Vue from "vue";
import VueRouter from "vue-router";
import { routerHooks } from "@/router/hooks";
Vue.use(VueRouter);
export const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: (): any => import(/* webpackChunkName: "Home" */ "@/view/Home")
    },
    {
      path: "/user",
      component: (): any =>
        import(/* webpackChunkName: "User" */ "@/view/User/User")
    }
  ]
});

// 注册路由钩子
routerHooks(router);
