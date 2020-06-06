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
Vue.component('Layout', Layout);

// window.alert("微信测试")

new Vue({
  //初始化router，router:router
  router,
  store,
  render: h => h(App)
}).$mount('#app');


window.onload = function() {
  setTimeout(function(){
    window.scrollTo(0, 200)
  }, 0)
}

// if (document.documentElement.clientWidth > 500) {
//
//
//   const img = document.createElement('img')
//   img.src = '/img/qrcode.png'
//
//   const tips = document.createElement('p')
//   tips.innerText = "请使用手机打开，以保证浏览效果"
//
//   const content = document.createElement('div')
//   content.className = "qrcode-wrapper"
//   content.appendChild(img)
//   content.appendChild(tips)
//   document.body.appendChild(content)
// }
