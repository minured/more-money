<template>
  <Layout>
    <div class="navBar">
      <Icon icon-id="#left"/>
      <span>编辑标签</span>
    </div>
    <div class="form-wrapper">
      <form-item field-name="标签名" :placeholder="tagId"/>
    </div>
    <div class="remove">
      <Button>删除标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import tagList from '@/models/tagList';
  import Icon from '@/components/Icon.vue';
  import formItem from '@/components/Money/formItem.vue';
  import Button from '@/components/Button.vue';

  @Component({
    components: {Button, formItem, Icon}
  })
  export default class EditLabel extends Vue {
    tagId = '';

    //好好理解一下 route和router的用法
    created() {
      this.tagId = this.$route.params.id;
      tagList.fetch();
      const tags = tagList.tags;
      //filter返回数组
      const tag = tags.filter(tag => tag.id === this.tagId)[0];
      if (tag) {
        console.log(tag);
      } else {
        //  重定向
        //为什么要回车两次？
        //replace和push区别   初步：replace可以回退，push不行
        this.$router.replace('/404');
      }
    }
  }
</script>

<style lang="scss" scoped>
  .navBar {
    text-align: center;
    position: relative;
    font-size: 16px;
    line-height: 46px;
    background: white;
    margin-bottom: 8px;

    > svg {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      height: 20px;
      width: 20px;
      margin-left: 8px;

    }

  }

  .form-wrapper {
    /*border: 1px solid black;*/
    background: white;
  }

  .remove {
    text-align: center;
    padding-top: 16px;
    margin-top: 28px;
  }
</style>