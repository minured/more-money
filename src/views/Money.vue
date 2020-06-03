<template>

  <!--使用插槽把 内容 传给Layout组件-->
  <Layout content-class="layout">
    <NumberPad :amount.sync="record.amount" @submit="saveRecord"/>
    <Types :type.sync="record.type"/>
    <div class="notes">
      <form-item :notes.sync="record.notes" field-name="备注" placeholder="在这里输入备注"/>
    </div>
    <Tags :selectedTags.sync="record.selectedTags"/>
    {{ count }}
    <button
      @click="$store.commit('incremnet', 10)">+1
    </button>

  </Layout>

</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Watch} from 'vue-property-decorator';
  import NumberPad from '@/components/Money/NumberPad.vue';
  import Types from '@/components/Money/Types.vue';
  import formItem from '@/components/Money/formItem.vue';
  import Tags from '@/components/Money/Tags.vue';
  import oldStore from '@/store/dataModel';
  import store from '@/store';

  console.log(store.state.count);

  //使用的时候，要注意，下面是Vue里面，要注意this，上面是外面
  @Component({
    components: {Tags, formItem, Types, NumberPad},
    computed: {
      count() {
        return store.state.count;
      }
    }
  })
  export default class Money extends Vue {

    tags = oldStore.tagListModel.tags;

    record: RecordItem = {
      selectedTags: [],
      notes: '',
      type: '-',
      amount: 0,
      date: new Date()
    };

    records: RecordItem[] = oldStore.recordListModel.fetch();


    //ok按钮
    saveRecord() {
      oldStore.recordListModel.create(this.record);
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
