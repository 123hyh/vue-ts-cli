import {component }from 'vue-tsx-support';
import { mapActions } from 'vuex';
import  './Login.scss'
export default component({
  
  render () {
    return <div class="login">
      <el-button onClick={this.handleLogin} >login</el-button>
    </div>
  },
  methods: {
    ...mapActions(['login']),
    handleLogin (): void {
      this.login();
    }
  }
});
