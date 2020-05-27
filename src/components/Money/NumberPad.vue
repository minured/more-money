<template>
  <div class="numberPad">
    <div class="output">{{output || '0'}}</div>
    <div class="buttons">
      <!--      通过判断textContent绑定事件-->
      <button @click="inputContent">1</button>
      <button @click="inputContent">2</button>
      <button @click="inputContent">3</button>
      <button @click="remove">删除</button>
      <button @click="inputContent">4</button>
      <button @click="inputContent">5</button>
      <button @click="inputContent">6</button>
      <button @click="clear">清空</button>
      <button @click="inputContent">7</button>
      <button @click="inputContent">8</button>
      <button @click="inputContent">9</button>
      <button @click="ok" class="ok">OK</button>
      <button @click="inputContent" class="zero">0</button>
      <button @click="inputContent">.</button>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component} from 'vue-property-decorator';

  @Component
  export default class NumberPad extends Vue {
    //有初始值""  ts知道是字符串，不用写:string也可以
    output = '0';

    //Vue默认会传一个event
    inputContent(event: MouseEvent) {

      //强制指定类型
      const button = (event.target as HTMLButtonElement);
      //感叹号就是把null和undefined排除，后面就不会提示了
      const input = button.textContent!;


      //计算器的一些特殊判断

      //长度
      if (this.output.length === 16) {return;}
      //0开头
      if (this.output === '0') {

        //替换
        if ('0123546789'.indexOf(input) >= 0) {
          this.output = input;
        } else {
          //如果是. 追加
          this.output += input;
        }
        return;
      }

      //已经有一个 .
      if (this.output.indexOf('.') >= 0 && input === '.') {return;}
      this.output += input;

    }

    remove() {
      if (this.output.length === 0) {
        this.output = '0';
      }
      this.output = this.output.substring(0, this.output.length - 1);
    }

    clear() {
      this.output = '0';
    }

    ok() {
      this.output = "已提交"
      setTimeout(()=>{
        this.output = "0"
      },200)

    }

  }
</script>

<style lang="scss" scoped>
  .numberPad {
    font-weight: bold;

    > .output {
      font-size: 36px;
      font-family: Consolas, monospace;
      padding: 15px 16px;
      text-align: right;
      box-shadow: inset 0 -5px 5px -5px rgba(0, 0, 0, 0.25),
      inset 0 5px 5px -5px rgba(0, 0, 0, 0.25);
    }

    > .buttons {
      @import "~@/assets/style/helper.scss";
      @extend %clearFix;

      button {
        width: 25%;
        height: 64px;
        float: left;
        background: transparent;
        border: none;

        &.ok {
          height: 64*2px;
          float: right;
        }

        &.zero {
          width: 50%;
        }

        $bg: #f2f2f2;

        &:nth-child(1) {
          background: $bg;
        }

        &:nth-child(2), &:nth-child(5) {
          background: darken($bg, 4%);
        }

        &:nth-child(3), &:nth-child(6), &:nth-child(9) {
          background: darken($bg, 4*2%);
        }

        &:nth-child(4), &:nth-child(7), &:nth-child(10) {
          background: darken($bg, 4*3%);

        }

        &:nth-child(8), &:nth-child(11), &:nth-child(13) {
          background: darken($bg, 4*4%);
        }

        &:nth-child(14) {
          background: darken($bg, 4*5%);
        }

        &:nth-child(12) {
          background: darken($bg, 4*6%);
        }

      }

    }
  }
</style>