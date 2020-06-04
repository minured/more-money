//ts声明一个类型
type RecordItem = {
  //加个问号，表示这个key可以不存在
  selectedTags?: string[];
  notes: string;
  type: string;
  amount: number;
  //除了写数据类型，还可以写类 class或者构造函数
  date?: string;   //因为JSON是不支持Date,默认会变成字符串
}
type ErrorTip = {
  errorCode: number;
  explain: string;
}
type RootState = {
  recordList: RecordItem[];
  tagList: Tag[];
  currentTag?: Tag;
}

type RecordList = {
  data: RecordItem[];
  fetch: () => RecordItem[];
  create: (record: RecordItem) => void;
  save: () => void;
}


type Tag = {
  //这里暂时把tagName 作为id，以后写一个id生成器
  id: number;
  name: string;
}

type TagList = {
  tags: Tag[];
  initTags: () => void;
  fetch: () => Tag[];
  save: () => void;
  create: () => ErrorTip;
  update: (id: number, name: string) => ErrorTip;
  remove: (tag: Tag) => ErrorTip;
  findTag: (id: number) => Tag | undefined;
}

//声明window的属性,注意Window大写
interface Window {
  tagListModel: TagList;
  recordListModel: RecordList;
}