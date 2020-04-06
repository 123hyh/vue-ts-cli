import vue from "vue";
import "./Test.component.scss";

export const Test = vue.extend({
  name: "Test",

  render(h){
    
    const { default: defaults } = this.$slots;

    return <div class="active" onclick = {
      (e: MouseEvent): any => this.handlerClick(e)}>
      <ul>
        {
          [1,2,3,4].map(item => (<li onClick = {(e: MouseEvent): any=> this.handlerClick(e)} >{ item }</li>))
        }
      </ul>
      {
        defaults
      }
    </div>
    
  },
  methods: {
    handlerClick(e: MouseEvent): void {
      console.log(e)
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
