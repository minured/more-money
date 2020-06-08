<template>
  <div ref="container" class="chart-wrapper">
    echarts
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop, Ref} from 'vue-property-decorator';
  import echarts from 'echarts';
  import EChartOption = echarts.EChartOption;

  @Component
  export default class RecordECharts extends Vue {
    @Ref() readonly container!: HTMLDivElement;
    @Prop(Object) chartOption!: EChartOption;
    chart:echarts.ECharts | null = null;

    mounted() {
      const {container} = this;
      const width = document.documentElement.clientWidth;
      container.style.width = `${width * 0.8}px`;
      container.style.height = `${width * 0.8 * 0.8}px`;
      this.chart = echarts.init(container);
      this.chart.setOption(this.chartOption)
    }
  }
</script>

<style lang="scss" scoped>
  .chart-wrapper {
    margin: 5px auto;
  }
</style>