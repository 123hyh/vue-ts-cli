import { AxiosResponse } from "axios";

/**
 * 防止异步函数报错方法
 * @param handlerCb 请求方法
 */
export async function strongbox(handlerCb: () => any): Promise<any> {
  try {
    const data = await handlerCb();
    return data;
  } catch (error) {
    console.log(error);
    return false;
  }
}
