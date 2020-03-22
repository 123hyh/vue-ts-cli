import vue from "vue";
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

  data() {
    return {
      name: "2"
    };
  }
});

export default User;
