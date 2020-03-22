import vue from "vue";
import "./Test.component.less";
export const Test = vue.extend({
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
