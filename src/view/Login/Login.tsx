import {component }from 'vue-tsx-support';
import { mapActions } from 'vuex';
import $styles from  './Login.scss'
export default component({
  
  render () {
    return <div >
      <el-button class={$styles.elButton} onClick={this.handleLogin} >login</el-button>
    </div>
  },
  methods: {
    ...mapActions(['login']),
    handleLogin (): void {
      this.login();
    }
  }
});
