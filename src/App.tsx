import vue from "vue";

export const App = vue.extend({
  name: "App",
  render: (h: any) => (
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  )
});

