<template>
  <label class="formItem">
    <span class="name">{{fieldName}}</span>
    <!--    这里老师用的是input事件-->
    <input v-model="value" type="text" :placeholder="placeholder">
  </label>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Watch, Prop} from 'vue-property-decorator';

  @Component
  export default class Notes extends Vue {
    @Prop(String) notes!: string;
    @Prop(String) fieldName!: string;
    @Prop(String) placeholder?: string;

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
  .formItem {
    font-size: 14px;
    padding-left: 16px;
    display: flex;
    align-items: center;

    .name {
      padding-right: 16px;

    }

    input {
      height: 40px;
      flex-grow: 1;
      background-color: transparent;
      border: none;
    }
  }
</style>