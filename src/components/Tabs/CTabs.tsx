import components from 'vue-class-component'
import {Component} from 'vue-tsx-support'
import $style from './CTabs.scss'
import  { VNode } from 'vue'
@components({
  name: 'CTabs',
  props: {
    value: {
      type: String,
      required: true
    },
    lazy: {
      type: Boolean,
      default: false
    }
  },
})
export class CTabs extends Component<{}> {
  readonly value!: string
  /* 当前激活组件 */
  public tabItem: {[prop: string]: any}  = {};
  /**
   * name
   */
  public beforeCreate (this: CTabs): void {
    const {default: defualts = []} = this.$slots;
    /* this.tabItem =  */defualts.reduce((pre: {[prop: string]: VNode}, cur: VNode)=>{
      const props: any = cur.componentOptions?.propsData;
      pre[props?.name] = cur
      return pre
    }, {})
  }
  /**
   * name
   */
  public mounted (): void{
    const {default: defualts = []} = this.$slots;
    this.tabItem = defualts.reduce((pre: {[prop: string]: VNode}, cur: VNode)=>{
      const props: any = cur.componentOptions?.propsData
      pre[props?.name] = cur
      return pre
    }, {})
  }
  public cache: {[propname: string]: VNode} = {};
  public render (): JSX.Element {
    
    return <div>
      <ul class={$style.titleList}>
        {
          Object.keys(this.tabItem).map(item=> <li onClick={(): any => {
            this.cache[this.value] = this.tabItem[this.value];
            this.$emit('input', item)
          }} key={item}>{item}</li>)
        }
      </ul>
      <keep-alive> 
        {this.cache[this.value] ? this.cache[this.value] : this.tabItem[this.value]}
      </keep-alive>
    </div>
    
  }
}
