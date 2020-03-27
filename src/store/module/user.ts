import { StoreOptions, MutationPayload } from "vuex";
import { addRouter } from "@/router/permissions";
import { router } from "@/router";
export const user: StoreOptions<{ token: string | number }> = {
  state: {
    token: 0
  },
  getters: {
    isLogin(state): boolean {
      return !!state.token;
    }
  },
  mutations: {
    login(state, payload): void {
      state.token = payload.token;
    }
  },
  actions: {
    login({ commit }): void {
      // 1、修改登陆状态
      commit("login", { token: 1 });
      // 2、添加路由
      addRouter();
      router.push("/");
    }
  }
};
