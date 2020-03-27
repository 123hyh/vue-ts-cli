import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import { routerHooks } from '@/router/hooks';
import { ROUTES } from './permissions';
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

// 页面加载时判断 登录状态，是就动态添加 routes
export function addRouter  (): any {
  router.addRoutes(ROUTES);
};
const isLogin = !!JSON.parse(
  sessionStorage.getItem('store') ?? '{user:{token: 0}}'
).user.token;
isLogin && addRouter();

// 注册路由钩子
routerHooks(router);
