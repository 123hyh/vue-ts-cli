import VueRouter, { RouteConfig } from 'vue-router';
import Home from '@/view/Home/Home'
export const ROUTES: RouteConfig[] = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: 'user',
        component: (): any =>
          import(/* webpackChunkName: "User" */ '@/view/User/User')
      }, 
      {
        path: 'ctabs',
        component: (): any=> import(/* webpackChunkName: "CTabs" */'@/view/CTabs/Ctabs')
      },
      {
        path: '*',
        component: (): any =>
      import(/* webpackChunkName: "NotFound" */ '@/view/NotFound/NotFound')
      }
    ]
  },
  
  
];


