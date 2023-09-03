<template>
   <swiper
    :effect="'cards'"
    :grabCursor="true"
    :modules="modules"
    class="mySwiper"
  >
   
      <swiper-slide v-for="(item,index) in CounterStore.data.HImg" :key="index">
        <img :src="item.img_url" alt="">
      </swiper-slide>
 
  </swiper>
</template>

<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';
// import required modules
import { EffectCards } from 'swiper/modules';
import {  ref } from 'vue';
const modules=ref([EffectCards])

import {useCounterStore} from '@/stores/counter'
const CounterStore=useCounterStore()







</script >

<style lang="scss" scoped>
.swiper {
  width: 300px;
  height: 450px;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 18px;
  font-size: 22px;
  font-weight: bold;
  color: #fff;

  img{
   width: 100%;
  }
}


</style>