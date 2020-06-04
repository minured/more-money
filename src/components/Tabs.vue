<template>
  <ul class="tabs">
    <li v-for="(item, index) in dataSource" :key="index"
        @click="select(item)"
        :class="liClass(item)">{{item.text}}
    </li>
  </ul>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  type DataSourceItem = {
    text: string;
    value: string;
  }
  @Component
  export default class Tabs extends Vue {
    @Prop({required: true, type: Array}) dataSource!: DataSourceItem[];
    @Prop({default: '-'}) readonly value!: string;
    @Prop(String) classPrefix?: string;

    select(item: DataSourceItem){
      this.$emit('update:value', item.value)
      console.log("点击了")
    }
    liClass(item: DataSourceItem){
      return {
        selected: this.value===item.value,
        [this.classPrefix+'-tab-item']: this.classPrefix
      }
    }
  }
</script>

<style lang="scss" scoped>
  .tabs {
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