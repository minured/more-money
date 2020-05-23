<template>
  <svg class="icon">
    <use :xlink:href="iconId"/>
  </svg>
</template>

<script lang="ts">
  export default {
    name: 'Icon',
    //通过props
    props:["iconId"],
  };

  //引入一个目录
  //创建一个importAll的函数
  //ts是强调类型的，必须要告诉这个参数的类型: __WebpackModuleApi.RequireContext
  const importAll = (requireContext: __WebpackModuleApi.RequireContext) => {
    requireContext.keys().forEach(requireContext);
  };

  //方：这个代码可能在单元测试的时候遇到问题 try catch
  try {
    //使用函数导入
    importAll(require.context('../assets/icons', true, /\.svg$/));

  } catch (error) {
    console.log(error);
  }

</script>

<style lang="scss" scoped>

  .icon {
    /*放在字旁边，跟字差不大，按照字的大小调整*/
    width: 1em; height: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>