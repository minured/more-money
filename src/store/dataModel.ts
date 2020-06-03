import tagList from '@/store/tagList';
import recordList from '@/store/recordList';


const oldStore = {
  tagListModel: tagList,
  recordListModel: recordList
};

//初始化
oldStore.tagListModel.fetch();
oldStore.recordListModel.fetch();

export default oldStore;


