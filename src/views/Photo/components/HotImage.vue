<template> 
<div class="text-box">
   <div class="theme-box">热门图片</div>
</div>
<div 
v-masonry 
transition-duration="0.7s" 
item-selector=".item" 
class="container"
>
  <div v-masonry-tile v-for="(item,index) in data.img_data" :key="index" class="item">
    <img :src="item.img_url" alt="" @click="toPage(item._id,item.img_url)">
  </div>
</div>
<div ref="target"></div>

<ImgDetail></ImgDetail>

</template>

<script setup>
import ImgDetail from '@/components/ImgDetail.vue';
import { useIntersectionObserver } from '@vueuse/core'
import {getRecommendImgAPI} from '@/api/index'
import { onMounted, reactive,ref} from 'vue'
import {useCounterStore} from '@/stores/counter'
import {show} from '@/utils/value'  

const data=reactive({img_data:[]})



//请求数据
async function getRecommendImg() {
  try {
    const res = await getRecommendImgAPI();
    data.img_data=res
  } catch (error) {
    console.log(error)
  }
}

onMounted(()=>{
    getRecommendImg()
})


const target = ref(null)
const targetIsVisible = ref(false)
const page=ref(0)
const pageSize=ref(10)

const { stop } = useIntersectionObserver(
  target,
  async([{ isIntersecting }]) => {
    targetIsVisible.value = isIntersecting
    if(targetIsVisible.value){
        try {
          page.value++
          const res = await getRecommendImgAPI(page.value,pageSize.value);
          if(res.length==0){
            stop()
          }else{
            data.img_data=[...data.img_data,...res]
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
      font-size: 26px;
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