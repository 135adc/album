<template>
  <div>
    <div 
      v-masonry 
      transition-duration="0.7s" 
      item-selector=".item" 
      class="container"
      >
    <div v-masonry-tile v-for="(item,index) in CounterStore.data.colImg" :key="index" class="item">
      <img :src="item.img_url" alt="" >
    </div>
  </div>
  </div>
</template>

<script setup>
import {useCounterStore} from '@/stores/counter'
const CounterStore=useCounterStore()
  


</script>

<style lang="scss" scoped>

.item { 
      width: 20%; 
      box-sizing: border-box; 
      padding: 10px; 
      img{ 
        border: 0.5px solid rgb(205, 205, 205);
        cursor: pointer;
        border-radius: 10px;
        width: 100%; 
        display: block; 
      }
    }
</style>