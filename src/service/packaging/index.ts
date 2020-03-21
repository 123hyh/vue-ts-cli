import axios from "axios";
import { beforeRequest, afterResponse } from "./interceptors";
const axiosInstance = axios.create({
  baseURL: "/apis"
});
// 添加请求拦截器
axiosInstance.interceptors.request.use(beforeRequest, function(error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axiosInstance.interceptors.response.use(afterResponse, function(error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});
export const send = axiosInstance;
