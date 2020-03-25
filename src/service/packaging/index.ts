import axios from "axios";
import { beforeRequest, afterResponse } from "./interceptors";

// 区分（测试 | 生产）环境的 api；变量来自于 /config/env/evn.xxx.js
const baseURL: string = process.env.baseUrl ?? "";

const axiosInstance = axios.create({
  baseURL
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
