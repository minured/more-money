<template>
  <Layout>
    <div class="tags-wrapper">
      <div v-for="(tag, index) in tags" :key="index" class="tags">
        <router-link :to="`/labels/edit/${tag.id}`" class="tag">
          <span>{{tag.name}}</span>
          <Icon icon-id="#right"></Icon>
        </router-link>
      </div>
    </div>
    <div class="createTag">
      <!-- 组件是没有点击事件的， 然后native是把事件传给 组件里的默认元素 button -->
      <Button @click.native="createTag">新建标签</Button>
    </div>

  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import Icon from '@/components/Icon.vue';
  import {Component} from 'vue-property-decorator';
  import Button from '@/components/Button.vue';
  import oldStore from '@/store/dataModel';


  //好好体会一下 这种封装的感觉
  //好好体会一下 这种封装的感觉
  //好好体会一下 这种封装的感觉
  //好好体会一下 这种封装的感觉

  //读取数据
  // const localTags = tagList.fetch()

  //这里的两个相等
  // console.log(localTags === tagList.tags);

  @Component({
    components: {Button, Icon}
  })
  export default class Labels extends Vue {


    tags = oldStore.tagListModel.tags

    // beforeCreate() {
    //   //这里的两个是不一样的
    //   // console.log(localTags === tagList.tags);
    // }

    createTag() {
      const message: ErrorTip = oldStore.tagListModel.create();
    }
  }

</script>

<style lang="scss" scoped>
  /* 隐藏滚动条 */
  ::-webkit-scrollbar {
    display: none;
  }
  .tags-wrapper {
    /*border: 1px solid black;*/
    height: 80vh;
    overflow: auto;

    > .tags {
      font-size: 16px;
      background: white;
      padding-left: 16px;

      > .tag {
        min-height: 44px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 1px solid #e6e6e6;

        > svg {
          width: 18px;
          height: 18px;
          font-size: 16px;
          color: #666;
          margin-right: 16px;
        }

      }
    }
  }


  .createTag {
    text-align: center;
    padding-top: 1vh;
    margin-top: 1vh;
  }

</style>