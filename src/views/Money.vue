<template>

  <!--使用插槽把 内容 传给Layout组件-->
  <Layout content-class="layout">
    <NumberPad :amount.sync="record.amount"/>
    <Types :type.sync="record.type"/>
    <notes :notes.sync="record.notes"/>
    <Tags :tagsData.sync="tags" :selectedTags.sync="record.selectedTags"/>
    {{ record }}
  </Layout>

</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import Types from '@/components/Money/Types.vue';
  import Notes from '@/components/Money/Notes.vue';
  import Tags from '@/components/Money/Tags.vue';

  //ts声明一个类型
  type Record = {
    //加个问号，表示这个key可以不存在
    selectedTags?: string[];
    notes: string;
    type: string;
    amount: number;
  }


  @Component({
    components: {Tags, Notes, Types, NumberPad},
  })
  export default class Money extends Vue {
    tags: string[] = ['衣', '食', '住', '行', '黄钰洁'];

    record: Record = {
      selectedTags: [],
      notes: '',
      type: '-',
      amount: 0
    };


  }

</script>

<!--添加一个没有scoped的style-->
<style>
  .layout {
    display: flex;
    flex-direction: column-reverse;
  }
</style>
<style lang="scss" scoped>

</style>
