<template>
  <div class="tags">
    <div class="new">
      <button @click="addTag">新增标签</button>
    </div>
    <ul class="current">
      <li v-for="(tag, index) in tagsData" :key="index"
          :class="{selected: selectedTags_.indexOf(tag) >= 0}"
          @click="toggle(tag)">{{tag.name}}
      </li>

    </ul>

  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';
  import tagList from '@/models/tagList';

  @Component
  export default class Tags extends Vue {
    //string[]  字符串数组
    //tags应该是外面提供的，不要给外面提供的prop赋值，因为re-render的时候回覆盖
    @Prop(Array) readonly tagsData: string[] | undefined;
    @Prop(Array) readonly selectedTags!: string[];

    //为了避免直接修改props， selectedTags_是本地化的数据

    selectedTags_ = this.selectedTags;


    addTag() {
      // const inputTag = window.prompt('请输入自定义标签：');
      //
      // //这里的判断有待优化
      // if (inputTag) {
      //   if (inputTag.trim() === '') {
      //     window.alert('标签名不能为空');
      //   } else if (this.tagsData && this.tagsData.indexOf(inputTag!) === -1) {
      //     //不应该改外部数据， 语法合法但是不推荐
      //     this.$emit('update:tagsData', [...this.tagsData, inputTag]);
      //   }
      // } else {
      //   window.alert('标签名不能为空');
      // }

      const message: ErrorTip = tagList.create()
      window.alert(`${message.errorCode}：${message.explain}`)
    }

    toggle(tag: string) {
      const index = this.selectedTags_.indexOf(tag);
      if (index === -1) {
        this.selectedTags_.push(tag);
      } else {
        this.selectedTags_.splice(index, 1);
      }
      //  触发更新选择标签
      this.$emit('update:selectedTags', this.selectedTags_);
    }

  }
</script>

<style lang="scss" scoped>
  .tags {
    background: white;
    padding: 16px;
    font-size: 14px;
    /*border: 1px solid black;*/
    flex-grow: 1;
    display: flex;
    flex-direction: column-reverse;

    > .current {
      /*border: 1px solid black;*/
      display: flex;
      flex-wrap: wrap;

      > li {
        /*border: 1px solid black;*/
        /*display: block;*/
        margin-right: 16px;
        margin-bottom: 12px;
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