const User: { [prop: string]: any} = {
  render(h: any){
    // 测试指令
    return (<el-input v-model={this.x} v-foucs/>)
  },
  directives:{
    foucs(el: any): void{
      const input: HTMLElement = [...el.children].find((item: HTMLElement) => item.nodeName === 'INPUT')
      if(input){
        setTimeout(() => {
          input.focus()
        },);
      }
    }
  },
  data(){
    return {
      x:'黄'
    }
  }
}
export default User