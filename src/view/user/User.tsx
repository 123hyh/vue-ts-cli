import vue from "vue";
import { Test } from "@/components/Center.component/Test.component";

const User = vue.extend({
  name: "User",
  template: require("./User.html"),
  directives: {
    foucs(el: any): void {
      const input: HTMLElement = [...el.children].find(
        (item: HTMLElement) => item.nodeName === "INPUT"
      );
      if (input) {
        setTimeout(() => {
          input.focus();
        });
      }
    }
  },
  components: {
    TestComponent: Test()
  },
  data() {
    return {
      name: "2"
    };
  }
});

export default User;
