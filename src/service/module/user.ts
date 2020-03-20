import {Controller} from '../Controller'
/**
 * 
 * @param path 注入 path
 */
function Path< T extends Function >(path: string): any{
  console.log(path)
  return (target: T): void => {
    debugger
    if(target.prototype){
      target.prototype.path = path
    }else{
    }
  }
}

@Path('/user')
class User extends Controller{

  @Path('/userInfo')
  getUserInfo(): void{
    console.log(this)
  }
}
export const UserInstance = new User