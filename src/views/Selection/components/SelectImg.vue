<template> 
  <div style="height: 30px;"></div>
  <div class="text-box">
     <div class="theme-box">{{ SelectStore.sort}}图片</div>
  </div>
  <div 
  v-masonry 
  transition-duration="0.7s" 
  item-selector=".item" 
  class="container"
  >
    <div v-masonry-tile v-for="(item,index) in img_data.img_data" :key="index" class="item">
      <img :src="item.img_url" alt="" @click="toPage(item._id,item.img_url)">
    </div>
  </div>

  <div ref="targetItem"></div>

  <ImgDetail></ImgDetail>
  </template>
  
  <script setup>
  import { useIntersectionObserver } from '@vueuse/core'
  import { onMounted, reactive,ref} from 'vue'
  import {useSelectStore} from '@/stores/select'
  import {getSortImgAPI} from '@/api/index'
  import ImgDetail from '@/components/ImgDetail.vue';
  import {useCounterStore} from '@/stores/counter'
  import {show} from '@/utils/value'
  const SelectStore = useSelectStore();
  const img_data=reactive({img_data:[]})
  
  
  
  // // 请求数据
  // async function getSortImg() {
  //   try {
  //     const res = await getSortImgAPI(SelectStore.sort);
  //     data.img_data=res
  //     // console.log(data.img_data);
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  
  onMounted(()=>{
    // getSortImg()

  })
  
  
  const targetItem = ref(null)
  const targetIsVisible = ref(false)
  const page=ref(0)
  const pageSize=ref(10)
  
  const { stop } = useIntersectionObserver(
    targetItem,
    async([{ isIntersecting }]) => {
      targetIsVisible.value = isIntersecting
      if(targetIsVisible.value){
          try {
          
            // console.log(page.value)
            const res = await getSortImgAPI(SelectStore.sort,page.value,pageSize.value);
            // console.log(res,'res')
            page.value++
            if(res.length==0){
              stop()
            }else{
              img_data.img_data=[...img_data.img_data,...res]
              // console.log(data.img_data);
            }
          } catch (error) {
            console.log(error)
          }
          
      }
    },
  )
  
  const CounterStore=useCounterStore()
  function toPage(id,url){
    show.value=true
    CounterStore.img_id=id
    CounterStore.img_url=url
  }
  
  </script>
  
  <style scoped lang="scss">
  .text-box{
    height: 100px;
          
    .theme-box{
        font-size: 30px;
        font-weight: bold;
    }
  }
  
  .container{
    width:100%;
  
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
  
  }
  
  </style>