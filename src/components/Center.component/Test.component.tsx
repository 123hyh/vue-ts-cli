import { componentFactoryOf } from 'vue-tsx-support';

import $style from './Test.module.scss'

interface Events{
  /* 点击事件 */
  onHandlerClick: () => any;
}
interface ScopedSlots{
  default: number; 
}
export const Test = componentFactoryOf<Events, ScopedSlots>().create({
  
  name: 'Test',

  render () {

    const { default: defaultSlot = (): any => null } = this.$scopedSlots;

    return <div class={$style.active} onClick = {
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
        defaultSlot(this.x)
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
    return { x: 3 };
  },
  computed: {
    calc (): number {
      return 123;
    }
  },
  props: {
    /* 自定义属性 */
    dataTitle: {
      type: String,
      required: true
    },
  }
})
