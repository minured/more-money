<template>
  <div class="tags">
    {{tagList}}
    <div class="new">
      <button @click="addTag">新增标签</button>
    </div>
    <ul class="current">
      <li v-for="(tag, index) in tagList" :key="index"
          :class="{selected: selectedTags_.indexOf(tag) >= 0}"
          @click="toggle(tag)">{{tag.name}}
      </li>

    </ul>

  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';

  @Component({
    computed:{
      tagList(){
        return this.$store.state.tagList
      }
    }
  })
  export default class Tags extends Vue {
    //string[]  字符串数组
    @Prop(Array) readonly selectedTags!: string[];

    //为了避免直接修改props， selectedTags_是本地化的数据
    selectedTags_ = this.selectedTags;

    created(){
      this.$store.commit('fetchTagList')
    }
    addTag() {
      // const message: ErrorTip = oldStore.tagListModel.create();
      this.$store.commit('createTag')
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
    padding: 10px;
    font-size: 14px;
    /*border: 1px solid black;*/
    flex-grow: 1;
    display: flex;
    flex-direction: column-reverse;


    > .current {
      /*border: 1px solid black;*/
      display: flex;
      flex-wrap: wrap;
      overflow: auto;
      height: 25vh;
      padding-left: 10px;

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