/*
 * @Author: huangyuhui
 * @since: 2020-04-07 09:34:02
 * @LastAuthor: huangyuhui
 * @lastTime: 2020-07-06 18:04:55
 * @message: 
 * @文件相对于项目的路径: \vue-ts-cli\src\router\permissions.ts
 */ 
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
        path: '*',
        component: (): any =>
      import(/* webpackChunkName: "NotFound" */ '@/view/NotFound/NotFound')
      }
    ]
  },
  
  
];


