<template>

  <!--使用插槽把 内容 传给Layout组件-->
  <Layout content-class="layout">
    <NumberPad :amount.sync="record.amount" @submit="saveRecord"/>
    <Tabs :value.sync="record.type" :data-source="recordTypeList"/>
    <div class="notes">
      <form-item :notes.sync="record.notes" field-name="备注" placeholder="在这里输入备注"/>
    </div>
    <Tags :selectedTags.sync="record.selectedTags"/>
  </Layout>

</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import formItem from '@/components/Money/formItem.vue';
  import Tags from '@/components/Money/Tags.vue';
  import Tabs from '@/components/Tabs.vue';
  import recordTypeList from '@/constants/recordTypeList';


  //使用的时候，要注意，下面是Vue里面，要注意this，上面是外面
  @Component({
    components: {Tabs, Tags, formItem, NumberPad},
    computed: {
      recordList() {
        return this.$store.state.recordList;
      }
    }
  })
  export default class Money extends Vue {
    recordTypeList = recordTypeList;
    record: RecordItem = {
      selectedTags: [],
      notes: '',
      type: '-',
      amount: 0,
      date: new Date().toISOString()
    };

    beforeCreate() {
      this.$store.commit('fetchRecordList');
    }

    //ok按钮
    saveRecord() {
      // oldStore.recordListModel.create(this.record);
      this.$store.commit('createRecord', this.record);
      this.record.notes = '';
      this.record.selectedTags = [];

    }
  }

</script>

<!--添加一个没有scoped的style-->
<style scoped>
  ::v-deep .layout {
    display: flex;
    flex-direction: column-reverse;
  }

  .notes {
    padding: 12px 0;
    /*height: 8vh;*/
  }

</style>
<style lang="scss" scoped>

</style>
