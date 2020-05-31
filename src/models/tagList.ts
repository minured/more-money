//注意函数的参数和返回值的类型写法

import createId from '@/lib/idCreator';

type TagList = {
  tags: Tag[];
  fetch: () => Tag[];
  save: () => void;
  create: () => ErrorTip;
  update: (id: number, name: string) => ErrorTip;
  remove: (tag: Tag) => ErrorTip;
}


const tagList: TagList = {
  //这里是自己管理tags，通过localStorage获取tags，返回给外部
  tags: [],
  // tags:string[]:[]   TS无法识别这个写法，那么我们声明整个的tagList的类型
  fetch() {
    //用是否含有数据库版本来 判断是否是第一次使用
    //有待优化
    if (!window.localStorage.getItem('version')) {
      //逻辑有待优化
      console.log('没有版本');


      this.tags = [
        {id: createId(), name: '衣'},
        {id: createId(), name: '食'},
        {id: createId(), name: '住'},
        {id: createId(), name: '行'},
      ];
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


    //逻辑有待优化，还有错误码的统一
    if (inputTag) {
      inputTag = inputTag.trim();

      //过滤全部都是空格
      if (inputTag === '') {
        return {errorCode: 1, explain: '标签名不能为空！'};
      }

      //map返回符合条件的元素作为新数组
      const tagNames: string[] = this.tags.map(tag => tag.name);

      if (tagNames.indexOf(inputTag) === -1) {
        this.tags.push({id: createId(), name: inputTag});
        this.save();
        return {errorCode: 0, explain: '标签创建成功！'};
      } else {
        return {errorCode: 2, explain: '标签已存在'};

      }

    } else if (inputTag === '') {    //过滤什么都不输入
      return {errorCode: 1, explain: '标签名不能为空！'};
    }
    return {errorCode: 3, explain: '取消创建'};
  },
  update(id, name){
    const tagIds: number[] = this.tags.map(tag => tag.id)

    if (tagIds.indexOf(id) >= 0) {
      console.log("fuck")

      const tagNames = this.tags.map(tag => tag.name)
      if (tagNames.indexOf(name) >=0) {
        console.log(tagNames)
        console.log(name)
        return {errorCode: 1, explain: "重复"}
      } else {
        const tag = this.tags.filter(i => i.id===id)[0]
        tag.name = name
        tag.id = createId()
        console.log(this.tags)
        this.save()
        return {errorCode: 0, explain: "修改成功"}
      }

    } else {
      return {errorCode: 4, explain: "not_found"}
    }


  },
  remove(tag){
    const index = this.tags.indexOf(tag)
    if(index >= 0) {
      this.tags.splice(index, 1)
      console.log(this.tags)
      this.save()
      return {errorCode: 0, explain: "成功"}

    } else {
      return {errorCode: 4, explain: "not_found"}
    }
  }


};

export default tagList;

