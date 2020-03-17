import  vue from 'vue'
import '@/styles/index.less'
export const Test = vue.extend({ 
  render(h: any): any{
    return(<div class='active' onClick={this.handlerClick}>{this.name}</div>)
  },
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