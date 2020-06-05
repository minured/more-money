//这里怎么看 data的类型：
//就是看JSON.stringify 的第一个参数
//看谁使用了这个参数

//声明一个类型，传入的是什么类型，返回就是什么类型
function clone<Type>(data: Type): Type {
  return JSON.parse(JSON.stringify(data));
}

export default clone;