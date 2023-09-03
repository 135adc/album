<template>
    <div class="main-box">
      <ul >
        <li 
        v-for="(item,index) in data.navData" :key="index" 
        @click="selectIndex(index)"
        :class="SelectStore.Navindex==index ? 'color' : ''"
        >
            <img :src="item.icon" alt="">
            <div class="text-box">{{ item.title }}</div>
        </li >
      </ul>
    </div>
</template>
  
<script setup>
import { reactive} from "vue";
import { useRouter} from 'vue-router'
import {useSelectStore} from '@/stores/select'
const SelectStore=useSelectStore()
const router=useRouter()




const data=reactive({navData:[
    {
        icon:"https://caozhaoyicos-1317708264.cos.ap-guangzhou.myqcloud.com/image%2F%E4%BA%BA%E7%89%A9%E5%86%99%E7%9C%9F.png ",
        title:"首页"
    },
    {
        icon:"https://caozhaoyicos-1317708264.cos.ap-guangzhou.myqcloud.com/image%2F%E5%8A%A8%E6%BC%AB%E5%A3%81%E7%BA%B8.png",
        title:"项目"
    },
    {
        icon:"https://caozhaoyicos-1317708264.cos.ap-guangzhou.myqcloud.com/image%2F%E9%A3%8E%E6%99%AF%E7%B3%BB%E5%88%97.png",
        title:"Demo"
    }
]})

function selectIndex(index){
    SelectStore.Navindex=index
    let routerName=['个人中心','个人项目','个人案例']

    router.push({
        name: routerName[index],
      })
}




</script>
  
<style scoped lang="scss">


.color{
    background: var(--light-font-color);
    color: var(--light-bg-color);
}

.main-box{
    
    margin-top: 30px;

    ul{
        li{
            cursor: pointer;
            display: flex;
            height: 50px;
            align-items: center;
            padding-left: 10px;
           
            margin: 15px 0;
            border-radius: 10px;
            img{
                width: 50px;
            }
            .text-box{
                margin-left: 10px;
            }
            
        }
    }
}



</style>