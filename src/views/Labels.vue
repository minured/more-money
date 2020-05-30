<template>
  <Layout>
    <div v-for="(tag, index) in tags" :key="index" class="tags">
      <router-link :to="`/labels/edit/${tag.name}`" class="tag">
        <span>{{tag.name}}</span>
        <Icon icon-id="#right"></Icon>
      </router-link>
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
  import tagList from '@/models/tagList';
  import Button from '@/components/Button.vue';


  //好好体会一下 这种封装的感觉
  //好好体会一下 这种封装的感觉
  //好好体会一下 这种封装的感觉
  //好好体会一下 这种封装的感觉


  tagList.fetch();

  @Component({
    components: {Button, Icon}
  })
  export default class Labels extends Vue {
    tags = tagList.tags;

    createTag() {

      const message = tagList.create();
      window.alert(`${message.errorCode}：${message.explain}`);

    }
  }

</script>

<style lang="scss" scoped>
  .tags {
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
  .createTag {
    text-align: center;
    padding-top: 16px;
    margin-top: 28px;
  }

</style>