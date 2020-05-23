<template>
  <nav>
    <router-link to="/labels" class="item" active-class="selected">
      <Icon iconId="#label"/>
      标签
    </router-link>
    <router-link to="/money" class="item" active-class="selected">
      <Icon iconId="#money"/>
      记账
    </router-link>
    <router-link to="/statistics" class="item" active-class="selected">
      <Icon iconId="#statistic"/>
      统计
    </router-link>
  </nav>
</template>

<script lang="ts">
  import Icon from '@/components/Icon.vue';

  export default {
    name: 'Nav',
    components: {Icon}
  };


</script>

<style lang="scss" scoped>

  nav {
    /*注意观察 scss的语法，首先是缩写*/
    /*border: 1px solid black;*/

    display: flex;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
    /*justify-content: space-around;*/
    font-size: 12px;
    > .item {
      padding: 2px 0;
      width: 33.333333%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .icon {
      width: 32px;
      height: 32px;
    }
    .item.selected {
      color:orange;
    }
  }
</style>