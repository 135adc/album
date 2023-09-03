<template>
  <div class="top-box" >
   <ul>
    <li v-for="(item,index) in data.nav_data" :key="item" @click="selectIndex(index)">
      <div style="height: 50px;"></div>
      <div>
        <div class="img-box">
          <img :src="item.icon" alt="">
        </div>
        <div class="text-box">
         {{ item.title }}
        </div>
      </div>
     
      <div :class="Navindex==index ? 'triangle':''"></div>
    </li>
   </ul>
  </div>
  <div style="height: 20px;"></div>
  
  <UserInfo v-if="Navindex==0"></UserInfo>
  <UserImg v-if="Navindex==1"></UserImg>
  <UserCollect v-if="Navindex==2"></UserCollect>
</template>

<script setup>
import UserInfo from './UserInfo.vue';
import UserImg from './UserImg.vue';
import UserCollect from './UserCollect.vue';
import { ref,reactive} from 'vue'


const data=reactive({
  nav_data:[
    {
      icon:"https://caozhaoyicos-1317708264.cos.ap-guangzhou.myqcloud.com/photo%2Ficon%2Finfo.png",
      title:"用户信息"
    },
    {
      icon:"https://caozhaoyicos-1317708264.cos.ap-guangzhou.myqcloud.com/photo%2Ficon%2Fimginfo.png",
      title:"图片信息"
    },
    {
      icon:"https://caozhaoyicos-1317708264.cos.ap-guangzhou.myqcloud.com/photo%2Ficon%2Fcollect.png",
      title:"图片收藏"
    }

]
})

const Navindex=ref(0)

function selectIndex(index){
  Navindex.value=index
}





</script>

<style scoped lang="scss">
.top-box{
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  height: 200px; 
  border-radius: 5px;
  background: linear-gradient(270deg, #eb5efa, #48e7ff, #2cff76);
  background-size: 800% 800%;
  animation: AnimationName 10s ease infinite;
  transition: 1s ease-in-out;
  border-radius: 7px;
  cursor: pointer;

  ul{
    width: 100%;
    display: flex;
    justify-content: space-around;
    li{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      text-align: center;
      height:  201px;
      .img-box{
        border-radius: 50%;
        margin-bottom: 10px;
        width: 70px;
        height: 70px;
        background-color: rgb(242, 242, 242);
        padding: 10px;
        img{
          width: 50px;
        }
      }
      .text-box{
        color: var(--light-font-color);
        font-weight: bold;
       
      }
      .triangle {
        width: 30px;
        height: 40px;
       background: var(--light-bg-color);
       clip-path: polygon(0 100%,100% 100%,50% 50%);
       transition: background-color  .5s ease-in-out;
      }
    }
  }


  @keyframes AnimationName {
  0% {
    background-position: 0% 50%
  }

  50% {
    background-position: 100% 50%
  }

  100% {
    background-position: 0% 50%
  }
}

}



</style>