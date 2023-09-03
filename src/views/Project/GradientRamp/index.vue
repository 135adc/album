<template>
  <el-main>
    <el-row :gutter="12" style="margin-top: 10px; margin-bottom: 30px;">
        <el-col :span="6" 
        v-for="(item,index) in data.ColorData.slice(
          (currentPage - 1) * PageSize,
          currentPage * PageSize
        )" 
        :key="index">
            <el-card >
              <div class="cardTop">
                  <div style="text-align: left; color: rgb(168, 168, 168);">
                    <span>{{ item.id }}</span>

                    <span>&nbsp;&nbsp;{{ item.name }}</span>
                  </div>
              </div>
              <div class="cardball" :style="item.color" @click="toImg(item.color)">
              </div>
              <div class="cardTop" >
                  <div style="text-align: left;">
                    <el-tooltip content="展示到上方的横幅" placement="top" effect="light">
                      <el-button style="font-weight: bold; color:  rgb(168, 168, 168);"  @click="changeColor(item.color)">展示</el-button>
                    </el-tooltip>
                  </div>
                  <div>
                    <el-tooltip content="复制CSS代码" placement="top" effect="light">
                      <el-button style="font-weight: bold; color:  rgb(168, 168, 168);"  @click="CopyCSS(item.color)">Copy CSS</el-button>
                    </el-tooltip>
                  </div>
              </div>
            </el-card>
        </el-col>
    </el-row>
    <div style="width: 100%; display: flex; align-items: center; justify-content: center;">
      <el-pagination 
      background 
      layout="sizes, prev, pager, next"
      :total="totalCount"
      :page-size="PageSize"
      :page-sizes="[32,64,80]"
      v-model:current-page="currentPage"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      />
    </div>
    
  </el-main>
  

  <el-dialog
  v-model="centerDialogVisible"
  :fullscreen="true"
  align-center
>
  <div class="show-color" :style="colorShow">

  </div>
</el-dialog>



</template>

<script setup>
import {onMounted, reactive,ref,toRefs} from "vue";
import useClipboard from 'vue-clipboard3'
import { ElNotification } from 'element-plus'
import { colorAPI } from "@/api/index";

const centerDialogVisible=ref(false)


// currentPage当前页数,默认为1,totalCount总的数据条数,PageSize每页展示多少条数据
const data=reactive({ColorData:[],currentPage:1,totalCount: 0, PageSize: 32})
const {PageSize,totalCount,currentPage}=toRefs(data)
 
onMounted(()=>{
 color()
})



async function color(){
  try {
    const res=await colorAPI()
    console.log(res)
    data.ColorData=res
    data.totalCount=res.length
  } catch (error) {
    console.log(error)
  }
}




//复制Css代码
const { toClipboard } = useClipboard()
async function CopyCSS(color){
 try {
  await toClipboard(JSON.stringify(color))
   //消息的提醒
   ElNotification({
    title: 'Success',
    message: '复制成功',
    type: 'success',
  })

 } catch (error) {
  console.error(error)
 }
}

const colorShow=ref('')

function toImg(color){
  centerDialogVisible.value=true
  colorShow.value=color
}



//每页展示数据变化
function handleSizeChange(value){
  // 改变每页显示的条数
  data.PageSize=value
   // 注意：在改变每页显示的条数时，要将页码显示到第一页
  data.currentPage=1
}

//切换页数
function handleCurrentChange(value){
  //将当前页改变
  data.currentPage=value
  window.scrollTo({
    top:0,
    behavior:'smooth'
  })
}


function changeColor(color){
  console.log(color)
  const regex = /linear-gradient\([^)]+\)/;
  const match = color.match(regex);

if (match) {
  const linearGradientValue = match[0];
  console.log(linearGradientValue); 
  document.documentElement.style.setProperty('--light-bg-color', linearGradientValue);
  document.documentElement.style.setProperty('--light-font-color', '#2b2b2b');
} else {
  console.log("未找到 linear-gradient 值");
}
  
}





</script>

<style scoped lang="scss">
.el-main{
  width: 100%;
  height:auto;
  overflow: hidden;

  .el-card:hover{
    box-shadow: 10px 5px 5px rgb(150, 150, 150);
  }
  .el-card{
    height: 350px;
    margin:0 10px;
    margin-bottom: 30px;
    background-color: rgb(244, 255, 255);
    :deep(.el-card__body){
      height: auto;
      display: flex;
      flex-direction: row;
      justify-content: center;
      flex-wrap: wrap;
     
      .cardTop{
        width: 100%;
        display: flex;
        justify-content: space-between ;
      }

      .cardball{
        cursor: pointer;
        width: 200px;
        height: 200px;
        margin: 20px;
        margin-bottom: 26px;
        border-radius: 50%;
      }
    }
  }
}

.show-color{
  border-radius: 10px;
  height: 600px;
  width: 100%;
}

</style>