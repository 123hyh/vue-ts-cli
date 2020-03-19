import vue from 'vue'
const User = vue.extend({
  template: require('./User.html'),
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
      name: '黄'
    }
  }
})

export default User
