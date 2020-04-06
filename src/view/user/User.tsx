import vue from "vue";
import { Test } from "@/components/Center.component/Test.component";

const User = vue.extend({
  name: "User",
  render(h){
    return <div>
      <el-input v-model={this.name} name="" v-foucs />
      <Test />
    </div>
  
  },
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
  
  data() {
    return {
      name: "2"
    };
  }
});

export default User;
