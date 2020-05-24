<template>
  <ul class="types">
    <li class="selected">支出</li>
    <li>收入</li>
  </ul>
</template>

<script lang="ts">
  export default {
    name: 'types'
  };
</script>

<style lang="scss" scoped>
  .types {
    background-color: #c4c4c4;
    display: flex;
    font-size: 24px;

    > li {
      width: 50%;
      /*border: 1px solid black;*/
      height: 64px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      &.selected::after {
        content: "";
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: #333;

      }
    }
  }
</style>