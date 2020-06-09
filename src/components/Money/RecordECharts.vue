<template>
  <div ref="container" class="chart-wrapper">
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';
  import {Component, Prop, Ref, Watch} from 'vue-property-decorator';
  import echarts from 'echarts';
  import EChartOption = echarts.EChartOption;

  @Component
  export default class RecordECharts extends Vue {
    @Ref() readonly container!: HTMLDivElement;
    @Prop(Object) chartOption!: EChartOption;
    chart: echarts.ECharts | null = null;


    mounted() {
      const {container} = this;
      const width = document.documentElement.clientWidth;
      container.style.width = `${width}px`;
      container.style.height = `${width * 0.7}px`;
      this.chart = echarts.init(container);
      this.chart.setOption(this.chartOption);
    }

    @Watch('chartOption', {deep: true})
    onChartOptionChange() {
      this.chart?.setOption(this.chartOption);
    }


  }
</script>

<style lang="scss" scoped>
  .chart-wrapper {
    margin: 5px auto;
  }
</style>