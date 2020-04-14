import components from 'vue-class-component'
import {Component} from 'vue-tsx-support'
@components({
  name: 'CTabs',
  props: {
    value: {
      type: String,
      required: true
    }
  },
  provide (this: CTabs) {
    return {addItem: this.addItem}
  }
})
export class CTabs extends Component<{'v-model': string}> {
  readonly value!: string
  public tabItem: Array<string> = [];
  public render (): JSX.Element {
    const {default: defaults} = this.$slots
    return <div>
      <ul>
        {
          this.tabItem.map(item=> <li>{item}</li>)
        }
      </ul>
      {defaults}
    </div>
  }
  /**
   * addItem 卡片子项目push到list
   */
  public addItem (name: string): void{
    this.tabItem.push(name)
  }
}
