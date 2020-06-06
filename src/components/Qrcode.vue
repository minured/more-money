<template>
  <div class="wrapper">
    <div class="content">
      <div class="tips">请使用手机访问，以保证浏览器效果</div>
      <div class="img"><img :src="qrcodeUrl" alt=""></div>
    </div>
  </div>
</template>

<script lang="ts">


  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class Qrcode extends Vue {
    qrcodeUrl = require('@/assets/qrcode.png');
  }

</script>

<style lang="scss" scoped>
  .wrapper {
    color: white;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);

    > .content {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%) translateY(-50%);
      > .img {
        margin-top: 5px;
        box-shadow:0 0 10px rgba(0,0,0,0.5);
      }
    }
  }
</style>