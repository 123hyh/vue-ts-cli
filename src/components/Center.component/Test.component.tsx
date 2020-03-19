import  vue from 'vue'
import './Test.component.less'
export const Test = vue.extend({ 
  template: require('./Test.component.html'),
  methods:{
    handlerClick(e: MouseEvent): void{
      e.stopPropagation();
      this.$emit('handlerClick')
    }
  }, 
  data(){
    return { x: 1 }
  },
  computed:{
    calc(): number {
      return 1
    }
  },
  props:{
    name: {
      type: String
    }
  }
})