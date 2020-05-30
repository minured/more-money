//ts声明一个类型
type RecordItem = {
  //加个问号，表示这个key可以不存在
  selectedTags?: string[];
  notes: string;
  type: string;
  amount: number;
  //除了写数据类型，还可以写类 class或者构造函数
  date?: Date;
}
type ErrorTip = {
  errorCode: number;
  explain: string;
}

type Tag = {
  //这里暂时把tagName 作为id，以后写一个id生成器
  id: number;
  name: string;
}