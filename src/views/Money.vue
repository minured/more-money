<template>

  <!--使用插槽把 内容 传给Layout组件-->
  <Layout content-class="layout">
    <NumberPad :amount.sync="record.amount" @submit="saveRecord"/>
    <Types :type.sync="record.type"/>
    <notes :notes.sync="record.notes"/>
    <Tags :tagsData.sync="tags" :selectedTags.sync="record.selectedTags"/>
    {{ record }}
  </Layout>

</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Watch} from 'vue-property-decorator';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import Types from '@/components/Money/Types.vue';
  import Notes from '@/components/Money/Notes.vue';
  import Tags from '@/components/Money/Tags.vue';

  //数据库版本 ，用来升级数据库
  window.localStorage.setItem("version", "0.0.1")

  //ts声明一个类型
  type Record = {
    //加个问号，表示这个key可以不存在
    selectedTags?: string[];
    notes: string;
    type: string;
    amount: number;
    //除了写数据类型，还可以写类 class或者构造函数
    date?: Date;
  }


  @Component({
    components: {Tags, Notes, Types, NumberPad},
  })
  export default class Money extends Vue {
    tags: string[] = ['衣', '食', '住', '行'];

    record: Record = {
      selectedTags: [],
      notes: '',
      type: '-',
      amount: 0,
      date: new Date()
    };
    records: Record[] = JSON.parse(window.localStorage.getItem('records') || '[]');

    saveRecord() {
      this.record.date = new Date()
      //这里push的是一个引用，所以每次push应该创建一个新的对象
      //用JSON实现深拷贝
      const deepClone: Record = JSON.parse(JSON.stringify(this.record));
      this.records.push(deepClone);
    }

    //用watch  避免漏保存
    @Watch('records')
    onRecordsChange() {
      window.localStorage.setItem('records', JSON.stringify(this.records));
    }


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
