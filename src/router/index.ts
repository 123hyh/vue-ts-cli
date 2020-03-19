
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export const router = new VueRouter({
  routes: [
    { path: '/', component: (): any => import('@/view/Home') },
    { path: '/user', component: (): any => import('@/view/User/User') }
  ]
});
