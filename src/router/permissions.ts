import { router } from '@/router';
import { RouteConfig } from 'vue-router'

export const addRouter = (routerList: RouteConfig[]): void => {
  router.addRoutes(routerList)
}