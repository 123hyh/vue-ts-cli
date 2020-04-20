import  components from 'vue-class-component';
import {Component} from 'vue-tsx-support'

import {CTabs as CTab} from '@/components/Tabs/CTabs.tsx'
import {CTabItem} from '@/components/Tabs/CTbabsItem'
import {CTabsSub} from '@/components/Tabs/CTabsSub'
import { Test } from '@/components/Center.component/Test.component';

@components
export default class CTabs extends Component<any> {
  public active = 'h'
  public mounted (): void {
    console.log(123)
  }

  public render (): JSX.Element {
    return <div>
      <CTab v-model={this.active}>
        <CTabItem name='h' label='用户管理'>
          <Test dataTitle='测试'></Test>
        </CTabItem>
        <CTabItem name='y' label='配置管理'>
          <CTabsSub></CTabsSub>
        </CTabItem>
        <CTabItem name='m' label='角色管理'>
          <CTabsSub></CTabsSub>
        </CTabItem>
      </CTab>
    </div>
  }
}