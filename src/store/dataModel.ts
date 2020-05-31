import tagList from '@/store/tagList';
import recordList from '@/store/recordList';


const store = {
  tagListModel: tagList,
  recordListModel: recordList
};


console.log(store);
store.tagListModel.fetch();
store.recordListModel.fetch();

export default store;


