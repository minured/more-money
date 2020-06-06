<template>
  <div id="app">
    <!--把router的内容显示进来-->
    <router-view/>
    <Qrcode v-if="showQrcodeOrNot"/>
  </div>

</template>

<script lang="ts">
  import Vue from "vue";
  import {Component} from 'vue-property-decorator';
  import Qrcode from '@/components/Qrcode.vue';
  @Component({
    components: {Qrcode}
  })
  export default class App extends Vue{
    clientWidth = 0
    showQrcodeOrNot = false
    //版本判断与升级

    beforeMount(){
      this.clientWidth = document.documentElement.clientWidth
      console.log(this.clientWidth)
      if(this.clientWidth > 500) {
        this.showQrcodeOrNot = true;
      }
    }

    //TODO
    mounted(){
      const version = window.localStorage.getItem('version') || 0;
      console.log(version)
      if (version === '0.0.1') {
        window.recordListModel.data.forEach(record => {
          record.date = new Date(0).toISOString();
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
  @import "~@/assets/style/qrcode.scss";

  body {
    line-height: 1.5em;
    font-family: $font-hei;
    color: #333;
    font-size: 16px;
    background: #f5f5f5;
  }


</style>
