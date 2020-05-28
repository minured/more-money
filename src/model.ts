const model = {
  fetch() {
    return JSON.parse(window.localStorage.getItem('records') || '[]') as RecordItem[];
  },
  save(data: RecordItem[]) {
    window.localStorage.setItem('records', JSON.stringify(data));
  },
  clone(data: RecordItem) {
    return JSON.parse(JSON.stringify(data));
  }
};
export {model};