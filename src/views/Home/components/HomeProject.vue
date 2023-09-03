<template>
    <div class="main-box">
      <div style="display: flex; align-items: center; margin-bottom: 20px;">
        <div style="width: 20px; height: 60px; background-color: aqua;"></div>
        <div style="font-weight: bold; margin-left: 20px;">渐变色</div>
      </div>
      <div class="color-box" @click="toColor" >
        <img src="https://caozhaoyicos-1317708264.cos.ap-guangzhou.myqcloud.com/photo%2Ficon%2Fcolor.png" alt="">
      </div>

      <div style="display: flex; align-items: center; margin-bottom: 20px;">
        <div style="width: 20px; height: 60px; background-color: rgb(0, 255, 68);"></div>
        <div style="font-weight: bold; margin-left: 20px;">电商后台</div>
      </div>
      <div class="back-box" @click="toBack">
        <a href="https://yuanyuanchuanxin.eu.org/">
          <img src="https://caozhaoyicos-1317708264.cos.ap-guangzhou.myqcloud.com/photo%2Ficon%2Fds.png" alt="">
        </a>
      </div>
    </div>
    <div style="height: 50px;"></div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router';

  const router=useRouter()
  function toColor(){
      router.push({
          name:'渐变色'
      })
  }
  </script>
  
  <style scoped lang="scss">
  .main-box{
    .color-box{
      border-radius: 10px;
      overflow: hidden;
      width: 400px;
      height: 400px;
      border: 1px solid rgb(211, 211, 211);
      margin-bottom: 50px;
      cursor: pointer;
      img{
        width: 100%;
      }
    }

  .back-box{
    border: 1px solid rgb(211, 211, 211);
    border-radius: 10px;
    overflow: hidden;
    width: 700px;
    height: 300px;
    margin-bottom: 50px;
    cursor: pointer;
    img{
      width: 100%;
    }
  }
  }

  </style>