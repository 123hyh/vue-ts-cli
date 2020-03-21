import { AxiosRequestConfig, AxiosResponse } from "axios";
/**
 * 请求前置拦截器
 * @param config
 */
export function beforeRequest(config: AxiosRequestConfig): AxiosRequestConfig {
  return config;
}
/**
 * 响应后置拦截器
 * @param response
 */
export function afterResponse(response: AxiosResponse): AxiosResponse {
  return response;
}
