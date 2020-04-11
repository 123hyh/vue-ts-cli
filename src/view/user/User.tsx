import {component} from 'vue-tsx-support'
import { Test } from '@/components/Center.component/Test.component';
import './User.module.scss'
const User = component({
  name: 'User',
  render () {
    return <div>
      <el-input v-model={this.name} name="" v-foucs />
      <Test dataTitle='测试2'/>
    </div>
    
  },
  directives: {
    foucs (el: any): void {
      const input: HTMLElement = [...el.children].find(
        (item: HTMLElement) => item.nodeName === 'INPUT'
      );
      if (input) {
        setTimeout(() => {
          input.focus();
        });
      }
    }
  },
  
  data () {
    return {
      name: '2'
    };
  }
});

export default User;
