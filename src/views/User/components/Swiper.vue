<template>
    <div class="swiper-box">
        <div class="text-box">
            <div class="text-info">
                <div style="font-size: 46px; font-weight: bold; margin-bottom: 20px; color: white">
                欢迎来到CAI图库!
                </div>
                <el-button size="large" type="primary" style="font-weight: bold;" @click="toPage">
                    进入图库
                </el-button>
            </div>
        </div>
        <el-carousel indicator-position="outside" height="600px">
            <el-carousel-item v-for="item in data.swi_data" :key="item">
               <img :src="item.img_url" alt="">
            </el-carousel-item>
        </el-carousel>
    </div>
  </template>
  
<script setup>
// import {getSwiImgAPI} from '@/api/index'
import {  reactive } from 'vue'
import { useRouter} from 'vue-router'
    const router = useRouter()


const data=reactive({swi_data:[
    {
        img_url:"https://caozhaoyicos-1317708264.cos.ap-guangzhou.myqcloud.com/photo%2F%E5%8A%A8%E6%BC%AB%2Fdongman%20(1).jpg"
    },
    {
        img_url:"https://caozhaoyicos-1317708264.cos.ap-guangzhou.myqcloud.com/photo%2F%E5%8A%A8%E6%BC%AB%2Fdongman%20(1).png"
    },
    {
        img_url:"https://caozhaoyicos-1317708264.cos.ap-guangzhou.myqcloud.com/photo%2F%E5%8A%A8%E6%BC%AB%2Fdongman%20(15).jpeg"
    },
    {
        img_url:"https://caozhaoyicos-1317708264.cos.ap-guangzhou.myqcloud.com/photo%2F%E5%8F%AF%E7%88%B1%2Fcute%20(2).jpeg"
    },
    {
        img_url:"https://caozhaoyicos-1317708264.cos.ap-guangzhou.myqcloud.com/photo%2F%E9%A3%8E%E6%99%AF%2Ffengjing%20(1).jpeg"
    },
    {
        img_url:"https://caozhaoyicos-1317708264.cos.ap-guangzhou.myqcloud.com/photo%2F%E9%A3%8E%E6%99%AF%2Ffengjing%20(1).jpg"
    }
]})

// async function getSwiImg(){
//     try {
//         let res=await getSwiImgAPI(0,10)
//         data.swi_data=res
//         console.log(data.swi_data,'data.swi_data')
//     } catch (error) {
//         console.log(error)
//     }
// }

    // onMounted(()=>{
    //     getSwiImg()
    // })

    function toPage(){
        router.push({
        name: '相册首页'
      })
    }


</script>
  
  <style scoped lang="scss">

  :deep(.el-carousel__container){
        border-radius: 10px;
        overflow: hidden;
    }

.swiper-box{
    width: 90%;
    margin: 10px auto;
   
    .text-box{
        position: relative;
        top: 250px;
        z-index: 99;
        .text-info{
            left: 50%; // 关键点！！
            transform: translateX(-50%);  // 关键点！！
            position: absolute;
            height: 100px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        }
    }



    img{
        width: 100%;
       
    }
}

</style>