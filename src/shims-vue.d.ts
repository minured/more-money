declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}
//应该是声明模块
declare module '*.svg' {
  const content: string;
  export default content;
}
declare module 'echarts'
