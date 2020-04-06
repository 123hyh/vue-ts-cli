import * as tsx from "vue-tsx-support";

import "./Test.component.scss";

export const Test = tsx.component({
  
  name: "Test",

  render(){

    const { default: defaults } = this.$slots;

    return <div class="active" onClick = {
      (e: MouseEvent): any => this.handlerClick(e)}>
      <h2>{this.dataTitle}</h2>
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
    dataTitle: {
      type: String,
      required: true
    }
  }
  /* snip */
})
