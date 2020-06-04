<template>
  <Layout>
    <Tabs class-prefix="type" :data-source="recordTypeList" :value.sync="type"/>
    <Tabs class-prefix="interval" :data-source="intervalList" :value.sync="interval"/>
    <div>
      <ol>
        <!--        <li v-for="(group, key, index) in result" :key="index">-->

        <!--          <h3>{{group.title}}</h3>-->
        <!--          <ol v-for="(record, key, index) in group.items" :key="index">-->
        <!--            <li>{{record.amount}}</li>-->
        <!--          </ol>-->
        <!--        </li>-->
        <li v-for="(group, key, i) in result" :key="i">
          <h3>{{key}}</h3>
          <ol>
            <li v-for="(record, i) in group" :key="i">{{record.amount}}</li>
          </ol>
        </li>
      </ol>

    </div>
  </Layout>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';
  import Tabs from '@/components/Tabs.vue';
  import intervalList from '@/constants/intervalList';
  import recordTypeList from '@/constants/recordTypeList';

  @Component({
    components: {Tabs}
  })
  export default class Statistics extends Vue {

    get recordList() {
      //store的类型是被Vue写死了,是any,所以再取的时候要断言一下
      return (this.$store.state as RootState).recordList;
    }

    get result() {
      const {recordList} = this;

      //这里可以交简化数据结构的 因为 key === group.title，没必要加个title

      //key是变量写到中括号
      type HashTableValue = { title: string; items: RecordItem[] }
      const hashTable: { [key: string]: HashTableValue } = {};

      const hashTable2: { [key: string]: RecordItem[] } = {};

      for (let i = 0; i < recordList.length; i++) {
        const [date, time] = recordList[i].date!.split('T');

        //||取第一个真值
        //逻辑就是按日期分类，日期存在就按原来赋值，日期不存在就创建新key，value为[]
        hashTable[date] = hashTable[date] || {title: date, items: []};
        hashTable[date].items.push(recordList[i]);

        hashTable2[date] = hashTable2[date] || [];
        hashTable2[date].push(recordList[i])


      }
      // console.log(hashTable)
      console.log(hashTable2);
      return hashTable2;
    }


    type = '+';
    interval = 'week';
    intervalList = intervalList;
    recordTypeList = recordTypeList;

    beforeCreate() {
      this.$store.commit('fetchRecordList');
    }
  }
</script>

<style lang="scss" scoped>
  ::v-deep {
    .type-tab-item {
      background: white;

      &.selected {
        background: #c4c4c4;

        &::after {
          display: none;
        }
      }
    }

    .interval-tab-item {
      height: 48px;
    }
  }

</style>
