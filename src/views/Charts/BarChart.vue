<template>
 
    <div class="echarts-composition">
      <div ref="chartContainer" class="chart-container"></div>
    </div>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts'; 

const chartContainer = ref(null);

onMounted(() => {
  const chart = echarts.init(chartContainer.value);
  
  const option = {
    // 在这里配置 ECharts 图表选项
    title: {
          text: '图片类型数量'
        },
    tooltip: {},
    legend: {
        data: ['数量']
    },
    xAxis: {
      type: 'category',
      data: ['动漫', '人物', '风景', '科幻', '可爱'],
    },
    yAxis: {
      type: 'value',
    },
    series: [{
      name: '数量',
      data: [10, 20, 30, 40, 50],
      type: 'bar',
    }],
  };
  
  chart.setOption(option);
});

</script>

<style lang="scss" scoped>

  .chart-container {
  height: 400px;
}


</style>