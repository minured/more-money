import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/lib/clone';

//把store挂到Vue.prototype上，  this.$oldStore， store在main.ts传给Vue，可以在template使用$store
Vue.use(Vuex);


const store = new Vuex.Store({
  state: {
      recordList: [] as RecordItem[]
  },
  mutations: {
    fetchRecordList(state) {
      state.recordList = JSON.parse(window.localStorage.getItem('records') || '[]') as RecordItem[];
      return state.recordList
    },
    createRecord(state, record: RecordItem){
      const recordClone: RecordItem = clone(record)
      recordClone.date = new Date()
      state.recordList.push(recordClone)
      console.log(state.recordList)
    //  这里可以直接commit
      store.commit('saveRecord')

    },
    saveRecord(state) {
      window.localStorage.setItem('records', JSON.stringify(state.recordList));
    },
  },
  actions: {},
  modules: {}
});


export default store;
