<template>
  <label class="notes">
    <span class="name">备注</span>
    <!--    这里老师用的是input事件-->
    <input v-model="value" type="text" placeholder="在这里输入备注">
  </label>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Watch, Prop} from 'vue-property-decorator';

  @Component
  export default class Notes extends Vue {
    @Prop(String) notes!: string
    value = this.notes;
    //  使用watch监听value的变化
    //  immediate false  第一次不要触发
    @Watch('value', {immediate: false})
    onValueChange() {
      this.$emit('update:notes', this.value);
    }
  }
</script>

<style lang="scss" scoped>
  .notes {
    font-size: 14px;
    background-color: #f5f5f5;
    padding-left: 16px;
    display: flex;
    align-items: center;

    .name {
      padding-right: 16px;


    }

    input {
      height: 64px;
      flex-grow: 1;
      background-color: transparent;
      border: none;
    }
  }
</style>