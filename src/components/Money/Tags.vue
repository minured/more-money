<template>
  <div class="tags">
    <div class="new">
      <button @click="addTag">新增标签</button>
    </div>
    <ul class="current">
      <li v-for="(tag, index) in tagsData" :key="index"

          :class="{selected: selectedTag.indexOf(tag) >= 0}"
          @click="toggle(tag)">{{tag}}
      </li>

    </ul>

  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component
  export default class Tags extends Vue {
    //string[]  字符串数组
    //tags应该是外面提供的，不要给外面提供的prop赋值，因为re-render的时候回覆盖
    @Prop(Array) tagsData: string[] | undefined;
    // tags: string[] = ['衣', '食', '住', '行'];
    selectedTag: string[] = [];

    addTag() {
      const inputTag = window.prompt('请输入自定义标签：');
      if (inputTag != null && this.tagsData != undefined && inputTag != '') {
        this.tagsData.push(inputTag);
        console.log(this.tagsData);
      } else {
        console.log('ll');
      }

    }

    toggle(tag: string) {
      const index = this.selectedTag.indexOf(tag);
      if (index === -1) {
        this.selectedTag.push(tag);
      } else {
        this.selectedTag.splice(index, 1);
      }
      console.log(this.selectedTag);
    }

  }
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

        &.selected {
          background: orange;;
        }
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