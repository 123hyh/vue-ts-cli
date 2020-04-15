
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
  /**
   * 当前激活的组件
   */
  readonly value!: string
  /**
   * slot组件集合
   */
  public tabItem: {[prop: string]: any}  = {};

  /**
   * 标题列表
   */
  public titleList: Array<{[prop: string]: any}> = []

  /**
   * 缓存组件
   */
  public cache: {[propname: string]: VNode} = {};


  public  created (): void{
    const {default: defualts = []} = this.$slots;
    this.tabItem = defualts.reduce((pre: {[prop: string]: VNode}, cur: VNode)=>{
      const props: any = cur.componentOptions?.propsData
      pre[props?.name] = cur;
      this.titleList.push({label: props.label, name: props.name})
      return pre
    }, {})
  }

  public render (): JSX.Element {
    return (<div>
      <ul class={$style.titleList}>
        {
          this.titleList.map(item => 
            <li class={item.name === this.value ? $style.activeTile : ''} onClick={ 
              (): any => {
                this.cache[this.value] = this.tabItem[this.value];
                this.$emit('input', item.name)
              }
            } key={item.name}>{item.label}</li>
          )
        }
      </ul>
      <keep-alive> 
        {this.cache[this.value] ? this.cache[this.value] : this.tabItem[this.value]}
      </keep-alive>
    </div>)
  }
}
