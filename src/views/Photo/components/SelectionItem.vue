<template>
    <div class="img-box" @click="toPage(props.sort.sortName)">
        <img :src="props.sort.sortImg" alt="">
        <div class="text-box">
            {{props.sort.sortName}}
        </div>
    </div>
  </template>
  
<script setup>
    import { onMounted } from 'vue'
    import { useRouter} from 'vue-router'
    const router = useRouter()
//   const route = useRoute()

    const props=defineProps({sort:Object})



    onMounted(()=>{
        
    })

    function toPage(sort){
        router.push({
        name: '分类',
        params: {
          sort
        },
      })
    }


</script>
  
  <style scoped lang="scss">
   .img-box::before{
        width: 200px;
        height: 100px;
        position: absolute;
        z-index: 1;
        content: '';
        background-color: rgba($color: #363636, $alpha: 0.6);
    }
   
    .img-box:hover > img {
        transform: scale(1.1); /* 放大图像，同时保持中心点 */
    }

  .img-box{
    margin-right: 20px;
    cursor: pointer;
    width: 200px;
    height: 100px;
    border-radius: 10px;
    overflow: hidden;
    position: relative;

    
    img{
        width: 100%;
        transition: transform 0.5s ease-in-out; /* 添加过渡效果 */
        // transform-origin: center center; /* 更改变化的中心点为图像中心 */
    }
   
    .text-box{
        position: absolute;
        z-index: 2;
        top: 40%;
        left: 50%; // 关键点！！
        transform: translateX(-50%);  // 关键点！！
        font-weight: bold;
        color: white;
    }
  }
  


  </style>