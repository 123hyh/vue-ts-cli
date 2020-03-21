/**
 * 定义 对象 property 任意属性
 */
interface TChoosable {
  [propName: string]: any;
}

/**
 * 响应类型
 * @property status   状态码
 * @property data     响应body
 * @property headers  响应头
 */
export declare interface TResponse {
  status: number;
  data: TChoosable;
  headers: TChoosable;
}

/**
 *  继承 Controller 类
 */
export interface TController extends Controller, Function, TChoosable {}

/**
 * 声明 descriptor 的 method属性
 */
interface TPath extends PropertyDescriptor {
  value: (...arg: any[]) => Promise<TResponse>;
  path: string;
}

/**
 *
 * @param path 注入 path
 */
export function Path<T extends TController>(path: string): any {
  return function(target: T, propertyKey: string, descriptor: TPath): any {
    // 判断 如果是类的话 直接加入 path； 否则 加在 descriptor 对象中
    const objective = target.prototype ? target.prototype : descriptor;
    Reflect.set(objective, 'path', path);
  };
}

/**
 * POST 装饰器
 * @param { Object } args 请求参数
 */
export function Post<T extends TController>(args: TChoosable): Function {
  return function(target: T, propertyKey: string, descriptor: TPath): void {
    const REQUEST_PARAMS_CB = target[propertyKey];
    descriptor.value = function(data: any): Promise<TResponse> {
      const REQUEST_PARAMS = REQUEST_PARAMS_CB(data);
      return target.handlerOutput({
        ...args,
        url: this.path + descriptor.path,
        method: 'POST',
        data: REQUEST_PARAMS
      });
    };
  };
}
export class Controller {
  public handlerOutput(params: any): Promise<TResponse> {
    console.log(params);
    return Promise.resolve(params);
  }
}
