<template>
 
        <!-- 导航栏 -->
    <el-affix :offset="0" >
        <nav class="nav">
            <ul>
                <li style="flex: 1; cursor: pointer;">
                  <img src="../assets/image/logo.png" alt="">
                </li>

                <li style="flex: 1; justify-content: flex-start;">
                  <div style="font-weight: bold; cursor: pointer;" @click="toUser">首页</div>
                </li>


                <li style="flex: 2;" >
                  <div class="inputbox" v-show="y>260 || CounterStore.Navchange==true? true:false" >
                    <img src="../assets/image/搜索.png" alt="">
                    <input type="text" placeholder="搜索图片">
                  </div>
                </li>
             
                <li v-if="!CounterStore.user_id" style="flex: 1;">
                  <div>
                    <el-button size="large" color="Gainsboro" style="font-weight: bold; color: black;" @click="login">登录</el-button>
                    <el-button size="large" color="BlueViolet" style="font-weight: bold; color: white;" @click="register">注册</el-button>
                  </div>
                </li>

                <li v-else style="flex: 1; cursor: pointer;">
                  <el-popover  :width="220"  placement="bottom"  >

                    <div style="text-align: right; display: flex; justify-content: space-between;">
                      <el-button  type="success"  @click="toHome">个人中心</el-button>
                      <el-button type="danger" @click="loginOut">退出登录</el-button>
                    </div>
                    <template #reference>
                      <div  class="user-box">
                          <div class="img-box">
                            <template v-if="CounterStore.avatar_url">
                              <img :src="CounterStore.avatar_url" alt="">
                            </template>
                          </div>
                        <div class="text-box" >{{ CounterStore.username }}</div>
                      </div>
                  </template>
                </el-popover>
                </li>
            </ul>
        </nav>
    </el-affix>


   
  </template>
  
  <script setup>
  import { useWindowScroll } from '@vueuse/core'
  import {useCounterStore} from '@/stores/counter'
  import { useRouter} from 'vue-router'

  import useCookie from '@/utils/Cookie'
  const router=useRouter()

  const CounterStore=useCounterStore()
  const { y } = useWindowScroll()
  const { deleteCookie } = useCookie();
  

  const {showMessage}=CounterStore

  function login(){
    CounterStore.centerDialogVisible=true
    CounterStore.InorUp=false
  }

  function register(){
    CounterStore.centerDialogVisible=true
    CounterStore.InorUp=true
  }

  function toHome(){
    router.push({
      name:'个人中心'
    })
  }

function toUser(){
  router.push({
      name:'首页'
    })
}


async function loginOut(){

  deleteCookie('token')

  router.push({
      name:'首页'
    })

    CounterStore.user_id='' //登录状态
    CounterStore.username=''
    CounterStore.avatar_url=''

    showMessage('Success','退出登录','success')
}




  router.beforeEach((to, from, next) => {
  if(from.name=='photo'){
    CounterStore.Navchange=true
  }else{
    CounterStore.Navchange=false
  }
  if(to.name=='user'){
    CounterStore.Navchange=true
  }

 
  // to: 即将进入的路由对象
  // from: 当前导航正要离开的路由对象
  // next: 调用该函数后，才能进入下一个钩子，一般需要调用 next()

  // 在这里可以执行一些逻辑，比如权限检查、日志记录等

  // 调用 next() 进入下一个钩子
  next();
});


// 添加全局后置守卫
// router.afterEach((to) => {
 

// });





</script >
  
<style scoped lang="scss">


//  ::v-deep .el-affix--fixed{
//    z-index: 900;
//   }

  .nav{
    background:var(--light-bg-color);
    box-shadow: 0 3px 5px -5px var(--light-font-color);
    transition: background-color .5s ease-in-out;
    ul{
        height: 70px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        li{
          display: flex;
          align-items: center;
          justify-content: space-around;
       
          img{
            width: 200px;
            height: 60px;
          }

        .inputbox{
          display: flex;
          align-items: center;
          background: var(--light-font-color);
          width: 80%;
          height: 40px;
          padding: 0 5px;
          border: 1px solid var(--light-font-color);;
          border-radius: 5px;
          transition: background-color .5s ease-in-out;

          img{
            width: 25px;
            height: 25px;
          }
          input{
            background: none;
            margin-left: 10px;
            font-size: 16px;
            outline:none;
            border: none;
            width: 90%;
            height: 30px;
            color: var(--light-bg-color);
          }
        }

        .user-box{
          display: flex; 
          align-items: center;

          .img-box{
            height: 60px ; 
            width: 60px; 
            margin-right: 20px;
            border-radius: 50%;
            overflow: hidden;
            background-color: aqua;
            img{
              width: 100%;
            }
          }
          .text-box{
            font-weight: bold;
          }
        }

      }
    }
  }


</style>