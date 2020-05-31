//这里怎么看 data的类型：
//就是看JSON.stringfy 的第一个参数
//看谁使用了这个参数
function clone(data: any) {
  return JSON.parse(JSON.stringify(data));
}

export default clone;