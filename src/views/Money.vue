<template>

  <!--使用插槽把 内容 传给Layout组件-->
  <Layout content-class="layout">
    <NumberPad :amount.sync="record.amount" @submit="saveRecord"/>
    <Types :type.sync="record.type"/>
    <div class="notes">
      <form-item :notes.sync="record.notes" field-name="备注" placeholder="在这里输入备注"/>
    </div>
    <Tags :tagsData.sync="tags" :selectedTags.sync="record.selectedTags"/>
<!--    {{ record }}-->
  </Layout>

</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Watch} from 'vue-property-decorator';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import Types from '@/components/Money/Types.vue';
  import formItem from '@/components/Money/formItem.vue';
  import Tags from '@/components/Money/Tags.vue';
  import recordList from '@/models/recordList';


  //使用的时候，要注意，下面是Vue里面，要注意this，上面是外面
  @Component({
    components: {Tags, formItem, Types, NumberPad},
  })
  export default class Money extends Vue {

    tags = window.tagListModel.tags

    record: RecordItem = {
      selectedTags: [],
      notes: '',
      type: '-',
      amount: 0,
      date: new Date()
    };

    records: RecordItem[] = window.recordListModel.fetch()

    created(){
      //数据库版本 ，用来升级数据库
      //版本判断升级

      //beforeCreate时是没法获取data的，数据在this.$options.data中，
      //created就可以获取data了
      // console.log(this.records)
      // console.log(this.$options.data)
      console.log(this.records);
      const version = window.localStorage.getItem('version') || 0;
      if (version === '0.0.1') {

        this.records.forEach(record => {
          record.date = new Date(0);
        });
        window.localStorage.setItem('records', JSON.stringify(window.recordListModel));
      }
      window.localStorage.setItem('version', '0.0.2');
    }

    //ok按钮
    saveRecord() {
      window.recordListModel.create(this.record);
    }


  }

</script>

<!--添加一个没有scoped的style-->
<style>
  .layout {
    display: flex;
    flex-direction: column-reverse;
  }

  .notes {
    padding: 12px 0;
  }
</style>
<style lang="scss" scoped>

</style>
