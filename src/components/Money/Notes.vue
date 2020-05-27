<template>
  <label class="notes">
    {{notes}}
    <span class="name">备注</span>
<!--    这里老师用的是input事件-->
    <input v-model="notes" type="text" placeholder="在这里输入备注">
  </label>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Notes extends Vue {
    notes = "";
    updated(){
      console.log(this.notes);
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