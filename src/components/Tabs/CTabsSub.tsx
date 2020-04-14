import component from 'vue-class-component';
import * as tsx from 'vue-tsx-support';
@component({
  name: 'CTabsSub'
})
export class CTabsSub extends tsx.Component<any> {
  /**
   * name
   */
  public mounted (): void {
    console.log('孙组件挂在了')
  }
  /**
   * name
   */
  public render (): JSX.Element {
    return <div>123</div>
  }
}