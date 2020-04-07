import {component} from 'vue-tsx-support'

export const App = component({
  name: 'App',
  render () { return (
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  )}
});

