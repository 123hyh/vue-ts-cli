import Vue from 'vue';
import VueRouter from 'vue-router';
import { routerHooks } from '@/router/hooks';
Vue.use(VueRouter);
type RouteComponent = Promise<any>;
export const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: (): RouteComponent =>
        import(/* webpackChunkName: "Home" */ '@/view/Home/Home')
    },
    {
      path: '/login',
      component: (): RouteComponent =>
        import(/* webpackChunkName: "Home" */ '@/view/Login/Login')
    }
  ]
});
// 注册路由钩子
routerHooks(router);
