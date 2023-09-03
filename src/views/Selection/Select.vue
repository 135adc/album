<template>
  <div class="main-box">
    <select-img></select-img>
  </div>
  
</template>
  
  <script setup>
import { onMounted } from "vue";
import { useRoute} from 'vue-router'
import {useSelectStore} from '@/stores/select'
import SelectImg from './components/SelectImg.vue'


const  SelectStore = useSelectStore();


const route = useRoute()  

  onMounted(()=>{
      SelectStore.sort=route.params.sort 
      // console.log(PhotoStore.sort)
  })

  </script>
  
  <style scoped lang="scss">
  
.main-box{
  padding: 20px 30px;
}
  </style>