<template>
  <div style="margin: 70px auto; box-sizing: border-box;  width: 90%;">
    
     
        <div class="detail-box">
      <div class="img-box">
        <img src="https://caozhaoyicos-1317708264.cos.ap-guangzhou.myqcloud.com/photo%2F%E5%8A%A8%E6%BC%AB%2Fdongman%20(15).jpeg" alt="">
      </div>
      <div class="text-box">
          <text >精美的电脑壁纸</text>
          <el-button  @click="toHome" size="large" color="BlueViolet" style="font-weight: bold; color: white;">前往下载</el-button>
      </div>
    </div>
    
    <div class="detail-box">
      <div class="text-box">
          <text>动人的手机壁纸</text>
          <el-button  @click="toHome"  size="large" color="BlueViolet" style="font-weight: bold; color: white;">前往获取</el-button>
      </div>
      <div class="img-box">
        <img style="height: 100%;" src="https://caozhaoyicos-1317708264.cos.ap-guangzhou.myqcloud.com/photo%2Ficon%2Fsj.jpg" alt="">
      </div>
    </div>

    <div class="detail-box" style="height: 500px;">
      <div class="img-box" style="flex: 2;">
        <img src="https://caozhaoyicos-1317708264.cos.ap-guangzhou.myqcloud.com/photo%2Ficon%2Fcolor-all.png" alt="">
      </div>
      <div class="text-box">
          <text>丰富的渐变色</text>
          <el-button @click="toColor" size="large" color="BlueViolet" style="font-weight: bold; color: white;">进入网站</el-button>
      </div>
    </div>

    <div class="detail-box" style="height: 500px;">
      <div class="text-box">
          <text>海量的CSS动画</text>
          <el-button @click="toCSS"  size="large" color="BlueViolet" style="font-weight: bold; color: white;">去使用</el-button>
      </div>
      <div class="img-box" style="flex: 2;  background-color: var(--light-font-color);">
        <div class="tunnel">
          <div class="frame" v-for="i in 30" :key="i" :style="'--i:' + i"></div>
       </div>
      </div>
    </div>

   
  </div>
  <div style="height: 200px; background-color: rgb(194, 194, 194);"></div>
 
</template>

<script setup>
import { useRouter} from 'vue-router'
import {useCounterStore} from '@/stores/counter'
const router=useRouter()

const CounterStore=useCounterStore()
const {showMessage}=CounterStore



function toHome(){
  router.push({
    name:'相册首页'
  })
}


function toColor(){
  router.push({
    name:'渐变色'
  })
}


function toCSS(){
  showMessage('Error','敬请期待','error')
}




</script>

<style scoped lang="scss">

.tunnel{
    position: relative;
    top: 150px;
    left: 350px;
    width: 100px;
    height: 100px;
    
}

.frame{
    width: 100%;
    height: 100%;
    border: 1px solid rgb(0, 255, 132);
    position: absolute;
    top: 30%;
    left: 50%; // 关键点！！
    transform: translateX(-50%);  // 关键点！！
    filter: hue-rotate(calc(24deg * var(--i)));
    transform-style: preserve-3d;
    animation: move 30s linear  infinite ;

    animation-delay: calc(1s * var(--i) - 30s);
}

@keyframes move{
    from{
        transform: perspective(1000px) translateZ(0px) rotate(0deg);
    }
    to{
        transform: perspective(1000px) translateZ(1000px) rotate(180deg);
    }
}


.detail-box {
  display: flex;
  height: 400px;
  margin-bottom: 100px;
  .img-box{
    overflow: hidden;
    border-radius: 10px;
    flex: 1;
    img{
      width: 105%;
    }
  }

  .text-box{
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    text{
      font-weight: bold;
      font-size: 30px;
      margin-bottom: 50px;
    }
  }
}
 




</style>