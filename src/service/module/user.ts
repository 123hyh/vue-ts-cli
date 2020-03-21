import { Controller, TResponse, Post, Path } from '../Controller';
@Path('/user')
class User extends Controller {
  @Post({ responseType: 'blob' })
  @Path('/userInfo')
  getUserInfo<T extends {}>(data: T): any {
    return data;
  }
}
export const UserInstance = new User();
