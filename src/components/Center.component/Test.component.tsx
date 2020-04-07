import { component } from 'vue-tsx-support';
import './Test.component.scss';
export const Test = component({
  
  name: 'Test',

  render () {

    const { default: defaultSlot } = this.$slots;

    return <div class="active" onClick = {
      (e: MouseEvent): any => this.handlerClick(e)}> 
      <h2>{this.dataTitle}</h2>
      <ul>
        {
          [1, 2, 3, 4, 5].map(item => (
            <li onClick = {(e: MouseEvent): any=> this.handlerClick(e)} >
              { item }
            </li>)
          )
        }
      </ul>
      {
        defaultSlot
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

  computed: {
    calc (): number {
      return 12311;
    }
  },
  props: {
    dataTitle: {
      type: String,
      required: true
    }
  },
})

const m: any = module; 
const id = require('hash-sum')(JSON.stringify(Test));
if (m.hot) {
  const api = require('vue-hot-reload-api');
  const vue  = require('vue')
  api.install(vue);
  m.hot.accept()
  if(!m.hot.data) {
    // api.createRecord('CID', scripts.Test)
  }else{
    // api.reload('CID', scripts.Test)
    // api.reload(CIDscripts
  }

  /*  m.hot.accept();
  console.log('更新了Test'); */
}