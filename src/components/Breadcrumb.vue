<template>
  <div class="main-box">
    <el-breadcrumb :separator-icon="ArrowRight" >
        <el-breadcrumb-item   :to="{ name: '首页' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item   :to="{ name: `${item.name}` }" v-for="(item,index) in routeBread" :key="index" >{{ item.name }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script setup>
import { ArrowRight } from '@element-plus/icons-vue'
import { onMounted, ref, watch} from 'vue'
import {useSelectStore} from '@/stores/select'

import { useRoute} from 'vue-router'

const route=useRoute()
const SelectStore=useSelectStore()
const routeBread=ref([])

//监视路由
watch(route,(newVal)=>{
  
  const {path,name}=newVal.matched.slice(-1)[0]

  // console.log(newVal.matched.slice(-1)[0])
  if(name=='首页'){
    routeBread.value=[]
    SelectStore.bread=[]
    return
  }

  Nav(name)

  SelectStore.bread.unshift({path,name})

  //去重
  routeBread.value = Array.from(new Set(SelectStore.bread.map(JSON.stringify)), JSON.parse).reverse();

})

onMounted(()=>{
  const {path,name}=route.matched
  if(name=='首页'){
    return
  }
  routeBread.value.push({path,name})

  Nav(name)
})

function Nav(name){
  switch(name){
  case '个人中心':
    SelectStore.Navindex=0
  break
  case '个人项目':
    SelectStore.Navindex=1
  break
  case '个人案例':
    SelectStore.Navindex=2
  break
}
}



</script>








<style lang="scss" scoped>
.main-box{
    padding: 20px 30px;
}
</style>