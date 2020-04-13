import * as tsx from 'vue-tsx-support';
import components from 'vue-class-component'
import { Action } from 'vuex-class';
import $styles from  './Login.scss'

@components({name: 'Login'})
export default class Login extends tsx.Component<any> {
  /**
   * vuex 登录时间
   */
  @Action('login') readonly login !: () => void

  /**
   * 调用登录
   */
  public  handleLogin (): void {
    this.login();
  }
  
  public render (): JSX.Element {
    return <div >
      <el-button class={$styles.elButton} onClick={this.handleLogin} >login</el-button>
    </div>
  }
}
