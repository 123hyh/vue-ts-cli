
import { Controller, TResponse, POST, Path, GET } from '../Controller';

// @Path('')
class User extends Controller {
  @POST({ responseType: 'blob' })
  @Path('/userInfo')
  getUserInfo<T> (data: T): any {
    return data;
  }

  @GET()
  @Path(/* '/todo/search/' */'/system/logininfo')
  getExchangerate (): any {
    return { pageIndex: 1, pageSize: 10, source: 'system' };
  }

  @POST()
  @Path('/login')
  goLogin<T> (data: T): T {
    return data;
  }

  @POST()
  @Path('/logout')
  goLogout (): any {
    return {};
  }
}

export const UserInstance = new User();
