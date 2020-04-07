import { send } from './packaging';
/**
 * 定义 对象 property 任意属性
 */
type TChoosable = {
  [propName: string]: any;
};

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
export function Path<T extends TController> (path: string): any {
  return function (target: T, propertyKey: string, descriptor: TPath): any {
    // 判断 如果是类的话 直接加入 path； 否则 加在 descriptor 对象中
    const objective = target.prototype ? target.prototype : descriptor;
    Reflect.set(objective, 'path', path);
  };
}

/**
 * 处理请求方法
 * @param target
 * @param propertyKey
 * @param descriptor
 * @param args 请求的其他参数
 * @param method 请求方法
 */

function handlerMehtod<T extends TController> (
  target: T,
  propertyKey: string,
  descriptor: TPath,
  args: TChoosable,
  method: string
): any {
  const REQUEST_PARAMS_CB = target[propertyKey];
  descriptor.value = function (data: any): Promise<TResponse> {
    const REQUEST_PARAMS = REQUEST_PARAMS_CB(data);
    return target.fetch({
      url: (this.path ?? '') + descriptor.path,
      method,
      data: REQUEST_PARAMS,
      ...args
    });
  };
}

/**
 * POST 装饰器
 * @param { Object } args 请求参数
 */
export function POST<T extends TController> (args = {}): Function {
  return function (target: T, propertyKey: string, descriptor: TPath): void {
    handlerMehtod(target, propertyKey, descriptor, args, 'POST');
  };
}

/**
 * PUT 装饰器
 * @param { Object } args 请求参数
 */
export function PUT<T extends TController> (args = {}): Function {
  return function (target: T, propertyKey: string, descriptor: TPath): void {
    handlerMehtod(target, propertyKey, descriptor, args, 'POST');
  };
}

/**
 * GET 装饰器
 */
export function GET<T extends TController> (args = {}): Function {
  return function (target: T, propertyKey: string, descriptor: TPath): void {
    handlerMehtod(target, propertyKey, descriptor, args, 'GET');
  };
}

/**
 * DELETE 装饰器
 */
export function DELETE<T extends TController> (args = {}): Function {
  return function (target: T, propertyKey: string, descriptor: TPath): void {
    handlerMehtod(target, propertyKey, descriptor, args, 'DELETE');
  };
}

/**
 * @class api控制层 (所有接口模块都必须继承它)
 * @private   headers       请求头集合
 * @method    clearHeaders  删除请求头
 * @method    addHeaders    追加请求头
 */

export class Controller {
  private static headers: TChoosable = {
    'x-auth-token': '2c8b473c-8d7b-4fc2-a7df-443f504650a6'
  };
  /**
   *
   * @param arg 需要删除的参数
   */
  static clearHeaders (arg?: string[]): void {
    if (arg) {
      for (const key of arg) {
        delete Controller.headers[key];
      }
    } else {
      Controller.headers = {};
    }
  }

  /**
   *
   * @param args 追加请求头
   */
  static addHeaders (args: { [propName: string]: string }): boolean {
    const headers = Controller.headers;
    for (const key in args) {
      if (args.hasOwnProperty(key)) {
        if (key in headers && process.env.NODE_ENV === 'development') {
          console.warn(
            `请求头参数 【 ${key} 】 被覆盖; ${headers[key]} -> ${args[key]}`
          );
        }
        headers[key] = args[key];
      }
    }
    return true;
  }

  public fetch (params: TChoosable): Promise<TResponse> {
    return send({ ...params, headers: Controller.headers });
  }
}
