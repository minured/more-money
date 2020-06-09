<template>
  <div class="tags">
    <div class="new">
      <button @click="addTag">新增标签</button>
    </div>
    <ul class="current">
      <li v-for="(tag, index) in tagList" :key="index"
          :class="{selected: selectedTags.indexOf(tag) >= 0}"
          @click="toggle(tag)">{{tag.name}}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop} from 'vue-property-decorator';
  import tagList from '@/store/tagList';

  @Component({
    computed: {
      tagList() {
        return this.$store.state.tagList;
      }
    }
  })
  export default class Tags extends Vue {
    //string[]  字符串数组
    @Prop(Array) readonly selectedTags!: string[];

    //为了避免直接修改props， selectedTags_是本地化的数据
    // selectedTags_ = this.selectedTags;

    beforeCreate() {
      this.$store.commit('fetchTagList');
    }

    addTag() {
      // const message: ErrorTip = oldStore.tagListModel.create();
      this.$store.commit('createTag');
    }


    toggle(tag: string) {
      const index = this.selectedTags.indexOf(tag);
      if (index === -1) {
        this.selectedTags.push(tag);
      } else {
        this.selectedTags.splice(index, 1);
      }
      //  触发更新选择标签
      this.$emit('update:selectedTags', this.selectedTags);
    }

  }
</script>

<style lang="scss" scoped>
  .tags {
    /*border:1px solid green;*/
    background: white;
    padding: 5px 10px;
    font-size: 14px;
    /*border: 1px solid black;*/
    flex-grow: 1;
    display: flex;
    overflow: auto;
    flex-direction: column-reverse;

    > .current {
      /*border:1px solid black;*/
      /*border: 1px solid black;*/
      /*display: flex;*/
      display: flex;
      padding-top: 5px;
      flex-wrap: wrap;
      overflow: auto;
      /*height: 30vh;*/
      flex-grow: 1;
      /*padding-left: 10px;*/
      justify-content: left;
      align-content: center;

      > li {

        /*border: 1px solid green;*/
        /*display: block;*/
        margin-right: 16px;
        margin-bottom: 12px;
        height: 26px;
        line-height: 26px;
        padding: 0 14px;
        border-radius: 12px;
        background-color: #d9d9d9;
        &.selected {
          background: orange;;
        }
      }

    }
    > .new {

      padding-top: 10px;
      /*border: 1px solid black;*/
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