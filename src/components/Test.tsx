import  vue, {ComponentOptions,CreateElement, VueConstructor} from 'vue'
export const Test: VueConstructor<any> = vue.extend({
  render(h: any): any{
    return(<div onClick={this.handlerClick}>{this.name}</div>)
  },
  methods:{
    handlerClick(e: MouseEvent): void{
      e.stopPropagation()
      console.log(2)
    }
  },
  props:{
    name: {
      type: String
    }
  }
})