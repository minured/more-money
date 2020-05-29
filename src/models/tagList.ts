//注意函数的参数和返回值的类型写法
type TagList = {
  tags: string[];
  fetch: () => string[];
  save: () => void;
  create: () => void;

}

const tagList: TagList = {
  //这里是自己管理tags，通过localStorage获取tags，返回给外部
  tags: [],
  // tags:string[]:[]   TS无法识别这个写法，那么我们声明整个的tagList的类型
  fetch() {
    //用是否含有数据库版本来 判断是否是第一次使用
    if (!window.localStorage.getItem('version')) {
      //逻辑有待优化
      console.log('没有版本');
      this.tags = ['衣', '食', '住', '行'];
      this.save();
    }
    this.tags = JSON.parse(window.localStorage.getItem('tagList') || '[]');
    return this.tags;
  },
  save() {
    window.localStorage.setItem('tagList', JSON.stringify(this.tags));

  },
  create() {
    let inputTag = window.prompt('请输入标签名：');


    //逻辑有待优化
    if (inputTag) {
      inputTag = inputTag.trim()

      if (inputTag === ""){
        window.alert("标签名不能为空")
        return
      }

      if (this.tags.indexOf(inputTag) === -1) {
        this.tags.push(inputTag)
        this.save()
      } else {
        window.alert("标签已存在")
      }

    } else if(inputTag === ""){
      window.alert("标签名不能为空")
    }


  }

};

export default tagList;

