import {Fetch} from './index'
import {Post, Path} from './util'
@Path('/tody')
class Home extends Fetch {
  @Post<Home>()
  @Path('/search')
  getData (data: any): any {
    return data
  }
}
export const home = new Home