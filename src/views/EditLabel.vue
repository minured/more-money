<template>
  <Layout>
    <div>
      <Icon icon-id="#left"/>
      <span>编辑标签</span>
    </div>
    <div>
      <Notes field-name="标签名" :placeholder="tagId"/>


    </div>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import tagList from '@/models/tagList';
  import Icon from '@/components/Icon.vue';
  import Notes from '@/components/Money/Notes.vue';
  @Component({
    components: {Notes, Icon}
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

</style>