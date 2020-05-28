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
  import {model} from '@/model';





  const localRecords = model.fetch();
  //数据库版本 ，用来升级数据库
  //版本判断升级
  const version = window.localStorage.getItem('version') || 0;
  if (version === '0.0.1') {
    localRecords.forEach(record => {
      record.date = new Date(0);
    });
    window.localStorage.setItem('records', JSON.stringify(localRecords));
  }
  window.localStorage.setItem('version', '0.0.2');


  //使用的时候，要注意，下面是Vue里面，要注意this，上面是外面
  @Component({
    components: {Tags, Notes, Types, NumberPad},
  })
  export default class Money extends Vue {
    tags: string[] = ['衣', '食', '住', '行'];

    record: RecordItem = {
      selectedTags: [],
      notes: '',
      type: '-',
      amount: 0,
      date: new Date()
    };

    records: RecordItem[] = localRecords;

    saveRecord() {
      this.record.date = new Date();
      //这里push的是一个引用，所以每次push应该创建一个新的对象
      //用JSON实现深拷贝
      const deepClone = model.clone(this.record)
      this.records.push(deepClone);
      console.log(this.records);
    }

    //用watch  避免漏保存
    @Watch('records')
    onRecordsChange() {
      model.save(this.records)
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
