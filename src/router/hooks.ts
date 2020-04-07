// 页面顶部进度条
import QProgress from 'qier-progress';
const progressBar = new QProgress();
import VueRouter from 'vue-router';
import { store } from '@/store';
const WHITE_LIST = ['/login', '/'];
export function routerHooks (router: VueRouter): void {
  router.beforeEach((to: any, from, next) => {
    const hasCurrent = WHITE_LIST.some(item => item === to.path);
    if (!store.getters.isLogin && !hasCurrent) {
      router.push({ path: '/login', query: { redirect: to.path } });
    }
    progressBar.start();
    next();
  });

  router.afterEach(() => {
    progressBar.finish();
  });
  router.onError ((x)=>{
    console.log(x)
  })
}
