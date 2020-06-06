import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/lib/clone';
import idManager from '@/lib/idCreator';

//把store挂到Vue.prototype上，  this.$oldStore， store在main.ts传给Vue，可以在template使用$store
Vue.use(Vuex);



const store = new Vuex.Store({
  state: {
    recordList: [] as RecordItem[],
    tagList: [] as Tag[],
    currentTag: undefined
  } as RootState,

  mutations: {

    // recordList
    fetchRecordList(state) {
      state.recordList = JSON.parse(window.localStorage.getItem('records') || '[]') as RecordItem[];
    },
    createRecord(state, record: RecordItem) {
      const recordClone: RecordItem = clone(record);
      recordClone.date = new Date().toISOString();
      state.recordList.push(recordClone);
      console.log(state.recordList);
      //  这里可以直接commit
      store.commit('saveRecord');

    },
    saveRecord(state) {
      window.localStorage.setItem('records', JSON.stringify(state.recordList));
    },


    //  tagList
    initTagLit(state) {
      state.tagList = [
        {id: idManager.create(), name: '衣'},
        {id: idManager.create(), name: '食'},
        {id: idManager.create(), name: '住'},
        {id: idManager.create(), name: '行'},
      ];
      store.commit('saveTagList');
    },
    fetchTagList(state) {
      //用是否含有数据库版本来 判断是否是第一次使用   逻辑有待优化
      if (!window.localStorage.getItem('version')) {
        console.log(window.localStorage.getItem('version'))
        console.log('首次使用，初始化tags');
        store.commit('initTagLit');
      }
      state.tagList = JSON.parse(window.localStorage.getItem('tagList') || '[]');
    },
    createTag(state) {
      let inputTag = window.prompt('请输入标签名：');
      //逻辑有待优化，还有错误码的统一
      if (inputTag) {
        inputTag = inputTag.trim();
        //过滤全部都是空格
        if (inputTag === '') {
          window.alert("标签名不能为空")
        }
        //map返回符合条件的元素作为新数组
        const tagNames: string[] = state.tagList.map(tag => tag.name);

        if (tagNames.indexOf(inputTag) === -1) {
          window.alert(inputTag)
          state.tagList.push({id: idManager.create(), name: inputTag});
          //改变就保存
          store.commit('saveTagList');
        } else {
          window.alert('标签已存在')
        }

      }
      return {errorCode: 3, explain: '取消创建'};
    },
    saveTagList(state) {
      window.localStorage.setItem('tagList', JSON.stringify(state.tagList));
    },
    removeTag(state, tag) {
      const index = state.tagList.indexOf(tag);
      if (index >= 0) {
        state.tagList.splice(index, 1);
        //不能变
        // idManager.back()
        store.commit('saveTagList');
        return {errorCode: 0, explain: '成功'};
      } else {
        return {errorCode: 4, explain: 'not_found'};
      }
    },

    setCurrentTag(state, id: number) {
      state.currentTag = state.tagList.filter(tag => tag.id === id)[0];
    },
    updateTag(state, [id, name]) {
      //如果改的是currentTag.name，此时name已经是实时修改了，但未保存
      //所以这里直接保存就好了
      // console.log(name);
      const tagIds: number[] = state.tagList.map(tag => tag.id);

      if (tagIds.indexOf(id) >= 0) {

        const tagNames = state.tagList.map(tag => tag.name);

        if (tagNames.indexOf(name) >= 0) {
          return {errorCode: 1, explain: '重复'};
        } else {
          const tag = state.tagList.filter(i => i.id === id)[0];

          tag.name = name;
          // tag.id = createId()
          store.commit('saveTagList');
          return {errorCode: 0, explain: '修改成功'};
        }

      } else {
        return {errorCode: 4, explain: 'not_found'};
      }

    },

  },

  actions: {},
  modules: {}
});


export default store;
