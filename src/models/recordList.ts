const recordList = {
  //属性使用强制断言，避免两个冒号
  data: [] as RecordItem[],
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem('records') || '[]') as RecordItem[];
    return this.data
  },
  save() {
    window.localStorage.setItem('records', JSON.stringify(this  .data));
  },
  clone(data: RecordItem) {
    return JSON.parse(JSON.stringify(data));
  }
};
export {recordList};