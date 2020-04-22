import {Fetch} from './index'
/**
 * 发送带凭据的请求
 */
type TCredentials = 'include' | 'same-origin'
/**
 * 请求方法
 */
type TMethod  = 'GET'| 'POST'| 'PUT'| 'DELETE'
/**
 *  缓存方式 
 */
type TCatch = 'default'| 'no-cache'| 'reload'| 'force-cache'| 'only-if-cached'

type TReferrer = 'client'| 'no-referrer'
/**
 * 请求参数类型
 */
export type SendParams = {
  url: string;
  method: TMethod;
  body?: any;
  credentials?: TCredentials;
  headers?: Headers;
  cache?: TCatch;
  referrer?: TReferrer;
}

/**
 * 最终出口方法
 */
const request =  new class Request {
  send (params: SendParams): Promise<Response> {
    let {url} = params
    const { 
      method, 
      body, 
      credentials = 'include',
      referrer = 'no-referrer',
      headers = {
        'x-auth-token': '4e6fa02d-d35e-4198-8441-8301f5b6d4de'
      }, 
      cache = 'default'} = params;

    /* 处理GET参数 */
    if(method === 'GET' && typeof body === 'object') url = this.handlerGetParams(url, body);
    
    const requestParams = { 
      url,
      method,
      body,
      credentials,
      referrer,
      headers: new Headers(headers),
      cache
    }
    /* get 请求删除 body */
    method === 'GET'  && delete requestParams.body
    return fetch(
      url, 
      this.beforeHooks(
        requestParams
      ))
      .then(this.afterHooks)
  }

  /**
   * 前置钩子
   * @param requestData 
   */
  beforeHooks (requestData: SendParams): SendParams {
    return requestData
  }

  /**
   * 后置钩子
   * @param responseData 
   */
  afterHooks (responseData: Response): any {
    return /^(1|2|3)/.test(
      String(responseData.status)
    ) ?
      responseData.json() : 
      this.onError(responseData)
  }

  /**
   * 错误钩子
   * @param error 
   */
  onError (error: Response): Promise<Response> {
    return Promise.reject(error)
  }

  /**
   * 处理get请求参数
   */
  handlerGetParams (url: string, params: any): string {

    if(/String]$/.test(Object.prototype.toString.call(params))) {
      url = `${url}/${params}`
    } else if(/Object]$/.test(Object.prototype.toString.call(params))) {
      url = Object.keys(params).reduce((prev, cur, i) => {
        prev += `${i === 0 ? '?' : '&'}${cur}=${params[cur]}`
        return prev
      }, url)
    }
    return url
  }
}

/**
 * 简化出口
 * @param params 
 */
export function acquire (params: SendParams): Promise<Response> {
  return request.send(params)
}

interface TPropertyDescriptor extends PropertyDescriptor{
  path?: string;
}

function handlerSend<T, U> (
  target: T,
  propertyKey: U, 
  descriptor: TPropertyDescriptor,
  method: TMethod
): void {
  const result = descriptor.value;
  descriptor.value = function (this: any, ...args: any[]): Promise<Response> {
    /* 提取url */
    const url = `${this.prefix ?? ''}${this.path ?? ''}${descriptor.path}`
    /* 提取请求body参数 */
    const data = result(...args)
    if(data) {
      /* 发送请求 */
      return acquire({
        url: url,
        body: result(...args),
        method
      })
    } else {
      return Promise.reject('不发送请求···')
    }
  }
}



interface TPath extends Fetch, Function{}
/**
 * 设置url 装饰器
 * @param path 
 */

export function Path<T extends TPath> (path: string): any {
  return function (target: T, propertyKey: keyof T, descriptor: TPropertyDescriptor): void{
    const object = target.prototype ? target.prototype : descriptor
    Reflect.set(object, 'path', path)
  }
}
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function Get<T> () {
  type U = keyof T
  return function (target: T, propertyKey: U, descriptor: TPropertyDescriptor): void {
    handlerSend<T, U>(target, propertyKey, descriptor, 'GET')
  }
}
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function Post<T> () {
  type U = keyof T
  return function (target: T, propertyKey: U, descriptor: TPropertyDescriptor): void {
    handlerSend<T, U>(target, propertyKey, descriptor, 'POST')
  }
}