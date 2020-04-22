import axios from 'axios';
import { beforeRequest, afterResponse } from './interceptors';

// 区分（测试 | 生产）环境的 api；变量来自于 /config/env/evn.xxx.js;
const isProd = process.env.NODE_ENV === 'production';

const baseURL: string = isProd ?   
  process.env.baseUrl ?? '' : 
  '/apis';

const axiosInstance = axios.create({
  baseURL
});
// 请求拦截器
axiosInstance.interceptors.request.use(beforeRequest, function (error) {
  return Promise.reject(error);
});

// 响应拦截器
axiosInstance.interceptors.response.use(afterResponse, function (error) {
  return Promise.reject(error);
});
export const send = axiosInstance;
