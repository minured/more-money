/* eslint-disable */
const path = require('path')

module.exports = {
  lintOnSave: false,


  chainWebpack: config => {
    //icon所在的目录，__dirname表示当前目录
    const dir = path.resolve(__dirname, 'src/assets/icons')

    //config是vue把webpack配置封装之后的api，内容实际上是webpack配置，但是写法不同
    config.module
      //添加规则，rule是规则的名字，test是匹配的文件（以.svg结尾）
      .rule('svg-sprite')
      .test(/\.svg$/)

      //添加生效的目录，如果不添加默认全部，.end()表示结尾，不知道为什么要这么写
      .include.add(dir).end()

      //使用的loader, extract:false  不要抽出文件
      .use('svg-sprite-loader').loader('svg-sprite-loader').options({extract: false}).end()

      //svg优化loader
      // .use('svgo-loader').loader('svgo-loader')
      //删除fill属性
      // .tap(options => ({...options, plugins: [{removeAttrs: {attrs: 'fill'}}]})).end()

    //还要添加一个插件 文档说的
    config.plugin('svg-sprite').use(require('svg-sprite-loader/plugin'), [{plainSprite: true}])

    //其他svg loader 排除icon目录，因为icon已经设定走这个loader
    config.module.rule('svg').exclude.add(dir)

  }
}



