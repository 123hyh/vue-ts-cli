import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

import Home from '@/view/Home'
import User from '@/view/User'

export const router = new VueRouter({
  routes:[
    {path: '/',component: Home},
    {path: '/user',component: User}
  ]
});
