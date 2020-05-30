<template>
  <div>
    <Layout>
      编辑标签
    </Layout>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import tagList from '@/models/tagList';

  @Component
  export default class EditLabel extends Vue {
    //好好理解一下 route和router的用法
    created() {
      const tagId = this.$route.params.id;
      tagList.fetch();
      const tags = tagList.tags;
      //filter返回数组
      const tag = tags.filter(tag => tag.id === tagId)[0];
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

</style>