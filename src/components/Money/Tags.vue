<template>
  <div class="tags">
    <div class="new">
      <button>新增标签</button>
    </div>
    <ul class="current">
      <li>衣</li>
      <li>食</li>
      <li>住</li>
      <li>行</li>
    </ul>

  </div>
</template>

<script lang="ts">
  export default {
    name: 'Tags'
  };
</script>

<style lang="scss" scoped>
  .tags {
    padding: 16px;
    font-size: 14px;
    /*border: 1px solid black;*/
    flex-grow: 1;
    display: flex;
    flex-direction: column-reverse;

    > .current {
      /*border: 1px solid black;*/
      display: flex;

      > li {
        /*border: 1px solid black;*/
        /*display: block;*/
        margin-right: 16px;
        height: 24px;
        line-height: 24px;
        padding: 0 16px;
        border-radius: 12px;
        text-align: center;
        background-color: #d9d9d9;
      }
    }

    > .new {
      padding-top: 16px;

      button {
        background-color: transparent;
        border: none;
        /*不给color默认跟字体颜色一样*/
        border-bottom: 1px solid;
        color: #999;
        /*边框超出字体*/
        padding: 0 4px;


      }
    }
  }
</style>