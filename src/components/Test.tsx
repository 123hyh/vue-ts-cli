import   {ComponentOptions,CreateElement} from 'vue'

export const Test: any = {
  render(h: any): any{
    return(<div>{this.name}</div>)
  },
  props:{
    name: {
      type: String
    }
  }
}