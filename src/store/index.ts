import Vue from 'vue';
import Vuex from 'vuex';

//把store挂到Vue.prototype上，  this.$oldStore， store在main.ts传给Vue，可以在template使用$store
Vue.use(Vuex);


const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    incremnet(state, n: number) {
      state.count += n;
    }

  },
  actions: {},
  modules: {}
});


export default store;
