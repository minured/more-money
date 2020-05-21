import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';

//如果是引入目录，那么默认是引入该目录下的index，
//这里就是 ./router/index.ts
import router from './router';
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';

Vue.config.productionTip = false;


//一个组件在多个组件使用，把它注册为全局组件
Vue.component('Nav', Nav);
Vue.component('Layout', Layout)

new Vue({
  //初始化router，router:router
  router,
  store,
  render: h => h(App)
}).$mount('#app');
