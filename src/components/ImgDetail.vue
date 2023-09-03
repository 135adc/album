<template>
  
    <el-dialog 
    v-model="show"
    width="90%"
    align-center
    style="background: var(--light-bg-color);">
        <div class="info-box">
            <el-popover placement="right" :width="100"  trigger="click">
                <template #reference>
                    <el-button  size="large" color="BlueViolet" style="margin-right: 16px" :icon="Setting" circle />
                </template>
                <div style="height: 200px;" class="btn-box">
                    <div v-if="!CounterStore.iscollect">  <el-button size="large" :icon="Star" @click="collectImage">收藏</el-button></div>
                    <div v-else> <el-button size="large" :icon="Star" @click="cancelCollect">已收藏</el-button></div>
                  
                    <div>  <el-button size="large" :icon="Download" @click="downloadImage">下载</el-button></div>
                </div>
            </el-popover>
        </div>   
        
        <div class="main-box"> 
            <div class="img-box">
                <img ref="myElement" @load="getImgInfo" :src="CounterStore.img_url"  alt=""/>
            </div>
        </div>
   
    

    </el-dialog>

</template>

<script setup>
import {useCounterStore} from '@/stores/counter'
import {Setting,Star,Download} from '@element-plus/icons-vue'
import {collectAPI,cancelCollectAPI,isCollectAPI} from '@/api/index'
import {  watch,ref} from 'vue'
import { ElNotification } from 'element-plus'
import {show} from '@/utils/value'

 // 创建一个 ref 来存储元素引用
 const myElement = ref(null);

const iswidth=ref(false)

const CounterStore=useCounterStore()

function getImgInfo(){
    
    if(myElement.value.width>650){
        iswidth.value=true
    }else{
        iswidth.value=false
    }
}




watch(show,(newVal)=>{
    if(newVal){
        iscollect()
    }
})

async function iscollect(){
 //判断是否收藏
await isCollectAPI(CounterStore.user_id,CounterStore.img_id)
    .then(response=>{
        CounterStore.iscollect=response.iscollect
    }).catch(error=>{
        CounterStore.iscollect=error.response.data.iscollect
    })
}


//收藏
function collectImage(){
//判断登录状态
if(CounterStore.user_id){
    const info={user_id:CounterStore.user_id,img_url:CounterStore.img_url,iswidth:iswidth.value,img_id:CounterStore.img_id}

collectAPI(info)
.then(response=>{  
CounterStore.iscollect=response.iscollect
ElNotification({
    title: 'Success',
    message: '收藏成功',
    type: 'success',
  })
}).catch(error=>{
console.log(error)
ElNotification({
    title: 'Error',
    message: '收藏失败',
    type: 'error',
  })
})  
}else{
    ElNotification({
    title: 'Error',
    message: '请先登录',
    type: 'error',
  })
}


}

//取消收藏
function cancelCollect(){
    cancelCollectAPI(CounterStore.user_id,CounterStore.img_id)
    .then(response=>{
        // console.log(response)
        CounterStore.iscollect=response.iscollect
        ElNotification({
            title: 'Success',
            message: '取消收藏成功',
            type: 'success',
        })
    }).catch(error=>{
        console.log(error)
    })
}




//下载链接
async function downloadImage() {
    const imageURL = CounterStore.img_url;
      const response = await fetch(imageURL);
      const blob = await response.blob();

      // 创建一个临时链接并模拟点击操作以下载图片
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'image.jpg';
      link.click();
      // 释放URL对象
      URL.revokeObjectURL(link.href);
      ElNotification({
        title: 'Success',
        message: '下载成功',
        type: 'success',
    })
}
 






</script>

<style scoped lang="scss">

.btn-box{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
   align-items: center;
}

.main-box{
    height: 600px;
    .img-box{
        box-sizing: border-box;
       height: 100%;
       padding: 10px;
       display: flex;
        justify-content: center;
        align-content: flex-start;
   
       img{
        border-radius: 5px;
       }
    }
}

.info-box{
    position: absolute;
    top: 50%; // 关键点！！
    transform: translateY(-100%);  // 关键点！！
    z-index: 999;
    border-radius: 5px;
}

</style>