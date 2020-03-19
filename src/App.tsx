import vue from 'vue'
export const App = vue.extend({
  render: (h: any) => (
    <keep-alive> 
      <router-view></router-view>
    </keep-alive>
  )
})