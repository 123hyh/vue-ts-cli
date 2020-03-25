import vue from "vue";
import "./Test.component.less";
export function Test<T extends { userName: string }>(): any {
  return vue.extend({
    name: "Test",
    template: require("./Test.component.html"),
    methods: {
      handlerClick(e: MouseEvent): void {
        e.stopPropagation();
        this.$emit("handlerClick");
      }
    },
    data() {
      return { x: 2 };
    },
    computed: {
      calc(): number {
        return 123;
      }
    },
    props: {
      name: {
        type: String
      }
    }
  });
}
