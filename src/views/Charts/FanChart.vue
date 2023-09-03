<template>
<div class="pie-chart">
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
    // 配置 ECharts 扇形图选项
    title: {
      text: '图片类型分布',
      left: 'center',
    },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
    legend: {
      orient: 'vertical',
      left: 'left',
      data: ['动漫', '人物', '风景', '科幻', '可爱'],
    },
    series: [
      {
        name: '数据项',
        type: 'pie',
        radius: '55%',
        center: ['50%', '60%'],
        data: [
          { value: 335, name: '动漫' },
          { value: 310, name: '人物' },
          { value: 234, name: '风景' },
          { value: 135, name: '科幻' },
          { value: 1548, name: '可爱' },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
          },
        },
      },
    ],
  };

  chart.setOption(option);
});
</script>

<style lang="scss" scoped>
.chart-container {
//   width: 50%;
  height: 400px;
}
</style>