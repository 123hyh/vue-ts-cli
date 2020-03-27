// 页面顶部进度条
import QProgress from 'qier-progress'
const progressBar = new QProgress
import VueRouter from "vue-router";

export function routerHooks(router: VueRouter): void {
  router.beforeEach((to, from, next) => {
    progressBar.start();
    next();
  });

  router.afterEach(() => {
    progressBar.finish();
  });
}
