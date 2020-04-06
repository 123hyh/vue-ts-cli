import Vue from "vue";
import { mapActions } from "vuex";
import  './Login.scss'
export default Vue.extend({
  render(h){
    return <div class="login">
      <el-button onClick={this.handleLogin} >login</el-button>
    </div>
  },
  methods: {
    ...mapActions(["login"]),
    handleLogin(): void {
      this.login();
    }
  }
});
