<template>
  <Layout>

    {{tag}}
    <div class="navBar">
      <Icon icon-id="#left" @click.native="goBack"/>
      <span>编辑标签</span>
    </div>
    <div class="form-wrapper">
      <form-item field-name="标签名" :notes="tag.name" @update:notes="onUpdateValue"/>
    </div>
    <div class="remove">
      <Button @click.native="removeTag">删除标签</Button>
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

  tagList.fetch()

  @Component({
    components: {Button, formItem, Icon}
  })
  export default class EditLabel extends Vue {
    tag: Tag = {id: 0, name: ""};


    created(){
      //页面urlId是否存在 tags中
      const urlId = parseInt(this.$route.params.id)
      const tags = tagList.tags
      console.log(tags)
      const tag = tags.filter(tag => tag.id === urlId)[0]

      if(tag){
        this.tag = tag
        console.log(this.tag)
      } else {
        this.$router.replace("/404")
      }
    }

    onUpdateValue(name: string){
      tagList.update(this.tag.id, name)

    }


    removeTag(){
      console.log(tagList.remove(this.tag))
      this.$router.replace("/labels")
    }
    goBack(){
      console.log('返回');
      this.$router.back()
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