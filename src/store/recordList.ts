import clone from '@/lib/clone';

const recordList: RecordList = {
  //属性使用强制断言，避免两个冒号
  data: [] as RecordItem[],
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem('records') || '[]') as RecordItem[];
    return this.data
  },
  create(record: RecordItem){
    const recordClone: RecordItem = clone(record)
    recordClone.date = new Date().toISOString()
    this.data.push(recordClone)
  //外面使用watch 自动保存，这样好不好
    this.save()
  },
  save() {
    window.localStorage.setItem('records', JSON.stringify(this  .data));
  },

};
export default recordList;