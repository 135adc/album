<template>
  <div>
    <el-dialog
    v-model="CounterStore.centerDialogVisible"
    width="30%"
    align-center
    style="background-color: var(--light-bg-color);"
    @close="clearValue"
  >
  <div class="input-box">
    <div class="form-container">
      <p class="title">{{ CounterStore.InorUp? 'Register' : 'Login' }}</p>
        <div class="input-group">
          <label for="username">Username</label>
          <input type="text" name="username" id="username" v-model="username" >
        </div>
        <div class="input-group">
          <label for="password">Password</label>
          <input type="password" name="password" id="password" v-model="password">
        </div>

        <template v-if="CounterStore.InorUp">

          <div  class="input-group">
            <label for="username">QQ邮箱</label>
            <input type="text" name="email" id="email" v-model="email" >
          </div>

          <div  class="input-group" >
            <label for="username">QQ邮箱验证码</label>
            <input type="number" name="code" id="code" v-model="code" >
          </div>

          <button :disabled="disabled" class="sign" @click="sendemail" >{{ disabled ?'('+ second +'秒重发)': '发送' }}</button>

          <button class="sign"  @click="signUp">Sign up</button>
        </template>


        <button  v-else class="sign"  @click="SignIn">Sign in</button>
        
    </div>

  </div>

   
  </el-dialog>
  </div>
</template>

<script setup>
import {useCounterStore} from '@/stores/counter'
import {loginAPI,registerAPI,getEmailAPI} from '@/api/index'
import { ref, watch } from 'vue'
import useCookie from '@/utils/Cookie';

const { setCookie } = useCookie();
const CounterStore=useCounterStore()

const {showMessage}=CounterStore

const disabled=ref(false)
const username=ref('') //用户名
const password=ref('') //密码
const email=ref('') //QQ邮箱
const code=ref('') //验证码
const second=ref(300) //时间

watch(disabled,(newVal)=>{
  if(newVal){
   const timerInterval = setInterval(() => {
      second.value--;
    if (second.value < 0) {
        clearInterval(timerInterval);
       disabled.value=false
       second.value=300
    }
}, 1000); 
  }
})

//登录
function SignIn(){
//去除空格
username.value=username.value.replace(/\s/g, '')
password.value=password.value.replace(/\s/g, '')

//判断是否为空
if(username.value==''||password.value==''){
  showMessage('格式不正确')
}else{
const loginInfo={username:username.value,password:password.value}
  loginAPI(loginInfo)
  .then(response => {
    setCookie('token', response.token, 0.5); // 存储7天
    console.log(response)
    CounterStore.user_id=response.user._id
    CounterStore.username=response.user.username
    CounterStore.avatar_url=response.user.avatar_url
    showMessage('登录成功','Success','success')

  const index=localStorage.getItem('colorIndex')

  CounterStore.changeColor(Number(index))

  CounterStore.colorIndex=index||0

  CounterStore.centerDialogVisible=false
  })
  .catch(error => {
    // 处理错误
    showMessage(error.response.data.message)
  });
}

}


 // 注册
 function signUp(){
//去除空格
username.value=username.value.replace(/\s/g, '')
password.value=password.value.replace(/\s/g, '')
//判断是否为空
if(username.value=='' || password.value==''){
  showMessage('格式不正确')
}else if(email.value=='' || code.value==''){
  showMessage('格式不正确')
}else{
  let registerInfo={
    username:username.value,
    password:password.value,
    email:email.value,
    code:code.value
  }
  registerAPI(registerInfo)
    .then(response => {
      console.log('Register successful:', response);
      showMessage('注册成功','Success','success')
      CounterStore.centerDialogVisible=false
    })
    .catch(error => {
      console.log(error)
      // 处理错误
      showMessage(error.response.data.message)
    });
}

}


//邮件
function sendemail(){  
//邮件正则
const qqEmailRegex = /^[1-9]\d{4,10}@qq\.com$/;
  if (qqEmailRegex.test(email.value)) {
    getEmailAPI(email.value)
    .then(response=>{
      console.log(response)
      showMessage('发送成功','Success','success')
      disabled.value=true
    })
    .catch(error=>{
      showMessage(error.response.data.message)
    })
  } else {
    showMessage('邮件格式不正确')
  }

}


function clearValue(){
  password.value=''
  username.value=''
  email.value=''
  code.value=''
}






</script>

<style scoped lang="scss">



.input-box{
  display: flex;
  justify-content: center;
}


.form-container {
  width: 320px;
  border-radius: 0.75rem;
  background-color: var(--light-bg-color);

  padding: 2rem;
  color: var(--light-font-color);
}

.title {
  text-align: center;
  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 700;
  margin-bottom: 30px;
}

.form {
  margin-top: 1.5rem;
}

.input-group {
  margin-top: 0.25rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.input-group label {
  display: block;
  color: rgba(156, 163, 175, 1);
  margin-bottom: 4px;
}

.input-group input {
  width: 100%;
  border-radius: 0.375rem;
  border: 1px solid rgba(55, 65, 81, 1);
  outline: 0;
  background-color: var(--light-bg-color);
  padding: 0.75rem 1rem;
  color: var(--light-font-color);
}

.input-group input:focus {
  border-color: rgba(167, 139, 250);
}

.forgot {
  display: flex;
  justify-content: flex-end;
  font-size: 0.75rem;
  line-height: 1rem;
  color: rgba(156, 163, 175,1);
  margin: 8px 0 14px 0;
}

.forgot a,.signup a {
  color: rgba(243, 244, 246, 1);
  text-decoration: none;
  font-size: 14px;
}

.forgot a:hover, .signup a:hover {
  text-decoration: underline rgba(167, 139, 250, 1);
}

.sign {
  display: block;
  width: 100%;
  background-color: rgb(137, 99, 249);
  padding: 0.75rem;
  text-align: center;
  color: rgba(17, 24, 39, 1);
  border: none;
  border-radius: 0.375rem;
  font-weight: 600;
  cursor: pointer;
 margin-top: 20px;
}




</style>