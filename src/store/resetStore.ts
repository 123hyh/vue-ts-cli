import { store } from './index';

// 页面卸载时保存vuex 的 store 数据
export function beforeRefreshStoreEvent (): void {
  window.onbeforeunload = (): void => {
    sessionStorage.setItem('store', JSON.stringify(store.state));
  };
}

// 页面刷新后重置 state
export function afterRefreshStoreEvent (): void {
  let state: any = sessionStorage.getItem('store');
  state = JSON.parse(state ?? '""');
  state && store.replaceState(state);
}
