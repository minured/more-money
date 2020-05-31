<template>
  <div id="app">
    <!--把router的内容显示进来-->
    <router-view/>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import {Component} from 'vue-property-decorator';

  @Component
  export default class App extends Vue{
    //版本判断与升级
    beforeCreate(){
      const version = window.localStorage.getItem('version') || 0;
      console.log(version)
      if (version === '0.0.1') {
        window.recordListModel.data.forEach(record => {
          record.date = new Date(0);
        });
        window.localStorage.setItem('records', JSON.stringify(window.recordListModel));
      }
      window.localStorage.setItem('version', '0.0.2');
    }
  }

</script>

<style lang="scss">
  @import "~@/assets/style/reset.scss";
  @import "~@/assets/style/helper.scss";

  body {
    line-height: 1.5em;
    font-family: $font-hei;
    color: #333;
    font-size: 16px;
    background: #f5f5f5;
  }


</style>
