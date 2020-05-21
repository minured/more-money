<template>
  <div class="money-wrapper">
    <div class="content">
      Money.vue

    </div>
    <Nav/>
  </div>
</template>

<script lang="ts">
  export default {
    name: 'Money',
  };
</script>

<!--这里的scoped的意思是 这里的style只会对当前的div生效，即使类名相同-->
<!--vue会给标签加上一个 data-v的属性，同时css选择器也会加上属性-->
<style lang="scss" scoped>
  .money-wrapper {
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: auto;
  }

  .content {
    //使得内容尽可能占据更多的位置
    flex-grow: 1;
  }
</style>