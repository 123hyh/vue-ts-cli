import VueRouter, { RouteConfig } from 'vue-router';

export const ROUTES: RouteConfig[] = [
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


