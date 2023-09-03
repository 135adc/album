<template>
   <swiper
    :grabCursor="true"
    :effect="'creative'"
    :creativeEffect="{
      prev: {
        shadow: true,
        translate: [0, 0, -400],
      },
      next: {
        translate: ['100%', 0, 0],
      },
    }"
    :modules="modules"
    class="mySwiper"
  >
  <swiper-slide v-for="(item,index) in CounterStore.data.WImg" :key="index">
        <img :src="item.img_url" alt="">
      </swiper-slide>
    
  </swiper>
</template>

<script setup>
import {ref} from 'vue'

 // Import Swiper Vue.js components
 import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/effect-creative';

// import required modules
import { EffectCreative } from 'swiper/modules';

const modules=ref([EffectCreative])

import {useCounterStore} from '@/stores/counter'
const CounterStore=useCounterStore()





</script>

<style scoped lang="scss">
.swiper {
  margin: 50px auto;
  width: 1000px;
  height: 500px;
}

.swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  font-weight: bold;
  color: #fff;

  img{
    width: 100%;
  }
}



</style>