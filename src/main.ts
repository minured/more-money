import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'

//如果是引入目录，那么默认是引入该目录下的index，
//这里就是 ./router/index.ts
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  //初始化router，router:router
  router,
  store,
  render: h => h(App)
}).$mount('#app')
