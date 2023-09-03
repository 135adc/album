<template>
 
  <!-- 头部导航栏 -->
  <Navigation></Navigation>
  <Breadcrumb></Breadcrumb>
 

</template>
  
  <script setup>
  import Navigation from '@/components/Navigation.vue';
  import Breadcrumb from '@/components/Breadcrumb.vue';
  import useCookie from '@/utils/Cookie';
  import { onMounted } from "vue";
  import {useCounterStore} from '@/stores/counter'
  import { ElNotification } from 'element-plus'
  import { useRouter} from 'vue-router'
  import {getTokenAPI} from '@/api/index'
  
  const router=useRouter()
  
  
  
  const CounterStore=useCounterStore()
  
  const { getCookie } = useCookie();
  
  onMounted( async()=>{
  // 读取Token
  const Token = getCookie('token');
  
  if(!Token){
    router.push({
      name:'首页'
    })
    return
  }
  
  const config = {
            authorization: `Bearer ${Token}`, // 设置Bearer Token
        };
  
  
  
  // 发送需要Token的请求
await getTokenAPI(config)
    .then(response => {
      // 处理响应数据
      ElNotification({
        title: 'Success',
        message: '登录成功',
        type: 'success',
      })
      const index=localStorage.getItem('colorIndex')
      CounterStore.changeColor(Number(index))
      CounterStore.colorIndex=index||0
      CounterStore.user_id=response.data._id //登录状态
      CounterStore.username=response.data.username
      CounterStore.avatar_url=response.data.avatar_url

        
    })
    .catch(error => {
      // 处理错误
      console.log(error)
    });
    
  
  })
  
  
  
  
  
  
  </script>
  
  <style lang="scss" scoped>
  

  </style>