import Vue from "vue";
import { mapActions } from "vuex";
import  './Login.scss'
export default Vue.extend({
  template: require("./Login.html"),
  methods: {
    ...mapActions(["login"]),
    handleLogin(): void {
      this.login();
    }
  }
});
