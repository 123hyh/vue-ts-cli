/*
 * @Author: huangyuhui
 * @since: 2020-07-06 16:50:40
 * @LastAuthor: huangyuhui
 * @lastTime: 2020-07-06 17:58:14
 * @message: 
 * @FilePath: \vue-ts-cli\src\components\Test\TestSlot.tsx
 */ 
import { Component } from 'vue-tsx-support'
import components from 'vue-class-component'

@components({
  name: 'TestSlot',
  props: {
    currentNumber: {
      type: Number,
      required: true
    }
  }
})
export class TestSlot extends Component<
  {currentNumber: number}, 
  {onHandleTestSlotClick: () => void},
  {footer: void; default: void}> {
  
  readonly currentNumber !: number
  private handlerClick (): void{
    this.$emit('handleTestSlotClick')
  }
  public render (): JSX.Element {
    const { footer: defaultSlots } = this.$scopedSlots
    return (<div>
      <div>
        {
          defaultSlots()
        }
      </div>
      <p onClick={this.handlerClick}>{this.currentNumber}</p>
      <span domPropsInnerHTML={'测试v-html'}></span>
      {
        this.$scopedSlots.default()
      }
    </div>)
  }
}