import components from 'vue-class-component'
import {Component} from 'vue-tsx-support'
@components({
  name: 'CTabItem',
  props: {
    name: {
      type: String,
      required: true
    }
  },
  inject: ['addItem']
})
export class CTabItem extends Component<{name: string}> {
  public addItem!: (name: string) => void
  public name!: string;
  public created (): void {
    this.addItem(this.name)
  }
  public tabItem: Array<string> = [];
  public render (): JSX.Element {
    return <div>
      {this.name}
    </div>
  }
  
}