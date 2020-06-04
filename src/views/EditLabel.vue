<template>
  <Layout>
    {{temModifyName}}
    <div class="navBar">
      <Icon icon-id="#left" @click.native="goBack"/>
      <span>编辑标签</span>
    </div>
    <div class="form-wrapper">
      <form-item field-name="标签名" :notes="currentTag.name" @update:notes="onUpdateValue"/>
    </div>
    <div class="modifyBtn">
      <Button @click.native="modify" class="confirmBtn">保存修改</Button>
      <Button @click.native="removeTag" class="removeBtn">删除标签</Button>

    </div>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Icon from '@/components/Icon.vue';
  import formItem from '@/components/Money/formItem.vue';
  import Button from '@/components/Button.vue';


  @Component({
    components: {Button, formItem, Icon},
  })
  export default class EditLabel extends Vue {

    temModifyName = '';

    //使用get set来代替 computed，get和set的是可以当做属性来直接使用的obj.name
    get currentTag() {
      return this.$store.state.currentTag;
    }

    created() {
      this.$store.commit('fetchTagList');

      //页面urlId是否存在 tags中
      const urlId = parseInt(this.$route.params.id);
      this.$store.commit('setCurrentTag', urlId);

      //根据url改变页面内容
      if (this.currentTag) {
        this.temModifyName = this.currentTag.name;

      } else {
        this.$router.replace('/404');
      }
    }

    onUpdateValue(name: string) {
      this.temModifyName = name;
      // this.$store.state.currentTag.name = name
    }

    //这里可以尝试使用函数的防抖与节流,自动保存
    modify() {
      // oldStore.tagListModel.update(this.tag.id, this.temModifyName);

      this.$store.commit('updateTag', [this.currentTag.id, this.temModifyName]);
      this.$router.replace('/labels');
    }

    removeTag() {
      this.$store.commit('removeTag', this.currentTag);
      this.$router.replace('/labels');
    }

    goBack() {
      this.$router.back();
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

  .modifyBtn {
    text-align: center;
    padding-top: 16px;
    margin-top: 28px;

    > .confirmBtn {
      background: darkgreen;
      margin-right: 10px;
    }

    > .removeBtn {
      background: darkred;
    }
  }
</style>