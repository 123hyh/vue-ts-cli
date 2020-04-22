import { SendParams, acquire } from './util'

/**
 * 所有 api 必须继承这个出口方法
 */
export class Fetch {
  constructor (protected prefix = '/test') {}
  protected fetch (params: SendParams): Promise<Response> {
    return  acquire(params)
  }
}