import { component } from 'vue-tsx-support';

export const App = component({
  name: 'App',
  render (): JSX.Element {
    return (
      <div id="app">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    );
  },
});
