import { router } from "@/router";
import { RouteConfig } from "vue-router";

const routes: RouteConfig[] = [
  {
    path: "/",
    component: (): any =>
      import(/* webpackChunkName: "Home" */ "@/view/Home/Home"),
    children: [
      {
        path: "/user",
        component: (): any =>
          import(/* webpackChunkName: "User" */ "@/view/User/User")
      }
    ]
  }
];
export const addRouter = (): void => {
  router.addRoutes(routes);
};
