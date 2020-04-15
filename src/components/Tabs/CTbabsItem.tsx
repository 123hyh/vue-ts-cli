import components from 'vue-class-component'
import {Component} from 'vue-tsx-support'
@components({
  name: 'CTabItem',
  props: {
    name: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    }
  },
})
export class CTabItem extends Component<{name: string; label: string}> {
  public name!: string;
  public label!: string;
  public xx = 1
  public created (): void {
    console.log(123)
    return
  }
  public render (): JSX.Element {
    return <div onClick={(): any=> this.xx += 1}>
      {this.$slots.default}
    </div>
  }
  
}