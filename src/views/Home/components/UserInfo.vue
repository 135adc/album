<template>
    <div class="info-box">
        <div style="font-weight: bold;">头像</div>
        <div class="photo">
            <div class="img-box">
                <div style=" margin-right: 10px; width: 60px; height: 60px; background-color: aquamarine; border-radius: 50%;">
                    <img v-if="DataUrl || CounterStore.avatar_url"   style="border-radius: 50%;"  :src="DataUrl=='' ? CounterStore.avatar_url : DataUrl" alt="">
                </div>
                <!-- <el-button style="font-weight: bold;" size="large" >选择系统头像</el-button> -->
            </div>
            <div style="display: flex;">
                <div class="input-box">
                    <el-button style="font-weight: bold;" size="large" >选择头像</el-button>
                    <input height="200px;" type="file" accept="image/*" @change="handleFileChange">
                </div>
                <el-button style="font-weight: bold;" size="large" @click="changeAvatar">上传头像</el-button>
            </div>
           
        </div>

        <div class="name">
            <div style="font-weight: bold; margin-bottom: 10px;">昵称</div>

            <div v-if="!show" style="display: flex;  justify-content: space-between;align-items: center;">
                <div>{{ CounterStore.username }}</div>
                <el-button @click="changeName"  style="font-weight: bold;" size="large">修改</el-button>
            </div>
           
            <div v-if="show"  style="display: flex;  justify-content: space-between;align-items: center;">
                <el-input :autofocus="show"  style="margin-right: 10px;"  v-model="input" size="large"  />
                <el-button style="font-weight: bold;" size="large" @click="cancelChange">取消</el-button>
                <el-button style="font-weight: bold;"   color="BlueViolet" size="large" @click="saveChange">保存</el-button>
            </div>
        </div>

        <div class="theme">
            <div style="font-weight: bold; margin-bottom: 20px;">主题</div>
            <div style="display: flex;">
                <div class="color-box" v-for="(item,index) in data.color_data" :key="index">
                    <div class="box"   :style="item.color"  @click="selectColor(index)" :class=" CounterStore.colorIndex == index? 'border':'' " ></div>
                    <div class="text">{{ item.title }}</div>
                </div>
            </div>
        </div>
    </div>
  </template>
  
<script setup>
import { reactive, ref } from "vue";
import {useCounterStore} from '@/stores/counter'
import {getChangeNameAPI,uploadImgAPI} from '@/api/index'



const show =ref(false)  
const input=ref('')
const CounterStore=useCounterStore()
const {showMessage}=CounterStore

const DataUrl=ref('') //dataurl
const code=ref({}) //
const imgType=ref('') //图片类型

const data=reactive({
    color_data:[
        {
            color:"background-color: white;",
            title:"浅色"
        },
        {
            color:"background-color: black;",
            title:"深色"
        },
        {
            color:"background-color:hotpink;",
            title:"粉色"
        }
      
    ]
})


function changeName(){
    input.value=CounterStore.username
    show.value=true
}

function cancelChange(){
    input.value='默认昵称'
    show.value=false
}

async function saveChange(){
    if(input.value=='' || input.value==CounterStore.username){
        showMessage('不可为空或昵称重复')
    }
   await getChangeNameAPI(input.value,CounterStore.user_id)
    .then(response=>{
        console.log(response)
        showMessage('Success','修改成功','success')
        CounterStore.username=input.value
        show.value=false
    }).catch(error=>{
        showMessage('修改错误')
        console.log(error);
    })
}

function selectColor(index){
    CounterStore.colorIndex=index
    CounterStore.changeColor(index)
   
    localStorage.setItem('colorIndex',index)
}

async function changeAvatar(){
    if(imgType.value==''){
        showMessage('Error','先选择图片','error')
        return
    }


    const formData = new FormData();
    formData.append('image',code.value);
    formData.append('fileType', imgType.value); // 添加文件类型信息
    formData.append('_id',CounterStore.user_id)
   await uploadImgAPI(formData)
    .then((response) => {
    // 处理后端的响应
    showMessage('Success','上传成功','success')

    CounterStore.avatar_url=response.data.avatar_url
  }).catch((error) => {
    // 处理上传失败的情况
    showMessage('上传失败')
    console.error('上传失败', error);
  });
}

//选择图片
function handleFileChange(event){

    const selectedFile = event.target.files[0];
   
    
    if (!selectedFile) {
      return;
    }

    const allowedTypes = ['image/jpeg', 'image/png','image/jpg'];
    const maxSize = 512000; // 50KB

    if (!allowedTypes.includes(selectedFile.type)) {

        showMessage('文件类型不正确')
      return;
    }

    if (selectedFile.size > maxSize) {
        showMessage('上传的图片过大')
      return;
    }



    const index=selectedFile.type.indexOf('/')
    imgType.value=selectedFile.type.slice(index+1)
    //包括开始,不包括结尾

    code.value=selectedFile

    //读取数据
    const reader=new FileReader()
    reader.onload=e=>{
        DataUrl.value=e.target.result
    }
    reader.readAsDataURL(selectedFile)


}






</script>
  
<style scoped lang="scss">
   
   .border{
    border: 2px solid blueviolet;
   }
.info-box{
    .photo{
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 60%;
        height: 100px;
        border-bottom: 1px solid rgb(73, 73, 73);
        margin-bottom: 20px;
        .img-box{
            display: flex;
            align-items: center;
            img{
                width: 60px;
                height: 60px;
            }
        }

        .input-box{
            margin-right: 20px;
            position: relative;
         
            input{
                width: 100px;
                height: 50px;
                opacity: 0;
                font-size: 20px;
                position: absolute;
                top: 0px;
                left: 0px;
            }
        }
    }

    .name{
        width: 60%;
        height: 100px;
        margin-bottom: 20px;
        border-bottom: 1px solid rgb(73, 73, 73);
    }

    .theme{
        height: 300px;
        border-bottom: 1px solid rgb(219, 219, 219); 
    }

    .color-box{
    margin-right: 50px;
        .box{
            cursor: pointer;
            width: 150px;
            height: 100px;
            border-radius: 5px;
        }
        .text{
            margin-top: 10px;
            font-weight: bold;
        }
    }

}



  </style>