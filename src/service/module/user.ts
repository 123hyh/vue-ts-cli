import { Controller } from '../Controller'
/**
 * 
 * @param path 注入 path
 */
function Path< T extends {[prop: string]: any}>(path: string): any{
  console.log(path)
  return (target: T, propertyKey: string, descriptor: PropertyDecorator): any => {
    if(target.prototype){
      target.prototype.path = path
    }else {
      debugger
      // target[propertyKey] =
    }
  }
}

@Path('/user')
class User extends Controller{
  @Path('/userInfo')
  getUserInfo(): any{
    return 1 
  }
}
export const UserInstance = new User