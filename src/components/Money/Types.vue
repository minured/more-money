<template>
  <ul class="types">
    <li :class="type==='-'&&'selected'" @click="selectType('-')">支出</li>
    <li :class="type==='+'&&'selected'" @click="selectType('+')">收入</li>
  </ul>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop, Watch} from 'vue-property-decorator';


  //这个库是第三方库
  //官方的是vue-class-component，提供用类的方法来写组件
  // import {Component} from 'vue-property-decorator';


  @Component   //js装饰器的语法，es7，告诉Vue下面是一个Component
  //vue就会按照component的语法编译以下代码
  export default class Types extends Vue {
    //直接写就会成data
    // type = '-';

    //加感叹号是 排除undefined 和 null
    //如果外面没有传，就设置一个默认值
    @Prop({default: "-"}) readonly type!: string

    //声明一个props
    //所有从：开头的都是typescript新加的语法
    //prop1是属性名
    //为什么写两次类型：
    //Number是告诉Vue，prop1是Number，运行时的类型
    //number|undefined 是告诉TS，prop1的类型，ts的要求。编译时的类型

    //Prop告诉Vue， pops1不是data，是prop
    //或者直接复发一个初始值，就不用写类型：
    //@Props(Number) prop1 = 0;
    @Prop(Number) prop1: number | undefined;

    //typescript的类型 :string  变量的类型
    selectType(typeArg: string) {
      if (typeArg !== '-' && typeArg !== '+') {
        throw new Error('type is unknown');
      }
      this.$emit("update:type", typeArg)
    }
  }

</script>

<style lang="scss" scoped>
  .types {
    background-color: #c4c4c4;
    display: flex;
    font-size: 24px;

    > li {
      width: 50%;
      /*border: 1px solid black;*/
      height: 64px;
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;

      &.selected::after {
        content: "";
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: #333;

      }
    }
  }
</style>