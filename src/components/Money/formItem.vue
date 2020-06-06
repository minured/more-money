<template>
  <label class="formItem">
    <span class="name">{{fieldName}}</span>
    <!--    这里老师用的是input事件-->
    <input :value="notes" type="text" :placeholder="placeholder"
            @input="onNotesChange($event.target.value)">
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

    //用@input来触发
    onNotesChange(notes: string) {
      this.$emit('update:notes', notes);
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