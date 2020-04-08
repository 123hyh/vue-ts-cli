import { component } from 'vue-tsx-support';

import './Test.component.scss';

export const Test = component({
  
  name: 'Test',

  render () {

    const { default: defaultSlot } = this.$slots;

    return <div class="active" onClick = {
      (e: MouseEvent): any => this.handlerClick(e)}>
      <h2>{this.dataTitle}</h2>
      <ul>
        {
          [1, 2, 3, 4].map(item => (
            <li onClick = {(e: MouseEvent): any=> this.handlerClick(e)} >
              { item }
            </li>)
          )
        }
      </ul>
      {
        defaultSlot
      }
    </div>
    
  },
  methods: {
    handlerClick (e: MouseEvent): void {
      console.log(e)
      e.stopPropagation();
      this.$emit('handlerClick');
    }
  },
  data () {
    return { x: 2 };
  },
  computed: {
    calc (): number {
      return 123;
    }
  },
  props: {
    dataTitle: {
      type: String,
      required: true
    }
  }
})
