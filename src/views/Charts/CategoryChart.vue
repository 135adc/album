<template>
    <div class="line-chart">
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
      // 配置 ECharts 折线图选项
      title: {
        text: '图片下载量与网站访问量',
        left: 'center',
      },
      tooltip: {
        trigger: 'axis', // 触发类型为坐标轴
        formatter: '{b}: {c}', // 提示框内容格式
      },
      legend: {
      data: ['下载量', '访问量'], // 图例名称
      left: 'left', // 图例位置
    },
      xAxis: {
        type: 'category',
        data: ['9月', '10月', '11月', '12月', '1月', '2月', '3月'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: '下载量',
          data: [10, 20, 30, 40, 50, 60, 70],
          type: 'line',
          smooth: true,
        },
        {
        name: '访问量',
        data: [50, 40, 30, 20, 10, 5, 2], // 新的折线数据
        type: 'line', // 折线图类型
        smooth: true, // 是否平滑显示折线
      },
      ],
    };
  
    chart.setOption(option);
  });
  </script>
  
  <style scoped>
  .chart-container {
    width: 100%;
    height: 400px;
  }
  </style>
  