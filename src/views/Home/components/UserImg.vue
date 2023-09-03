<template>
  <div style="display: flex; justify-content: space-between; margin-top: 20px;">
    <div class="bar">
      <BarChart></BarChart>
    </div>
    <div style="flex: 0.2;"></div>
    <div class="fan">
      <FanChart></FanChart>
    </div>
  </div>
  <div class="category">
    <CategoryChart></CategoryChart>
  </div>
</template>
  
<script setup>
import BarChart from '@/views/Charts/BarChart.vue';
import FanChart from '@/views/Charts/FanChart.vue'
import CategoryChart from '@/views/Charts/CategoryChart.vue'

</script>
  
<style scoped lang="scss">
.bar{
  padding: 15px;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: rgb(255, 255, 255);
  flex: 6;
}

.fan{
  padding: 15px;
  box-sizing: border-box;
  border-radius: 10px;
  background-color: rgb(255, 255, 255);
  flex: 6;
}

.category{
  margin-top: 20px;
  border-radius: 10px;
  background-color: rgb(255, 255, 255);
  box-sizing: border-box;
  padding: 20px 10px;
  width: 100%;
  height: 400px;
}

</style>