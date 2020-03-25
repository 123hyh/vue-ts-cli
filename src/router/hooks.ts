// 页面进度条
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import VueRouter from "vue-router";

export function routerHooks(router: VueRouter): void {
  router.beforeEach((to, from, next) => {
    NProgress.start();
    next();
  });

  router.afterEach(() => {
    NProgress.done();
  });
}
