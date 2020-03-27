import { router } from '@/router';
import { RouteConfig } from 'vue-router';

const routes: RouteConfig[] = [
  {
    path: '/user',
    component: (): any =>
      import(/* webpackChunkName: "User" */ '@/view/User/User')
  },
  {
    path: '/*',
    component: (): any =>
      import(/* webpackChunkName: "NotFound" */ '@/view/NotFound/NotFound')
  }
];
export const addRouter = (): any => {
  return router.addRoutes(routes);
};

// 页面加载时判断 登录状态，是就动态添加 routes
const isLogin = !!JSON.parse(
  sessionStorage.getItem('store') ?? '{user:{token: 0}}'
).user.token;
isLogin && addRouter();
