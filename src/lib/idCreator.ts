let id: number = parseInt(window.localStorage.getItem('_idMax') || '0');
const idManager = {
  save() {
    window.localStorage.setItem('_idMax', id.toString());
  },
  create() {
    id++;
    this.save()
    return id;
  },
  back() {
    id--;
    this.save()
    return id
  }
};
export default idManager