import { reactive, ref} from 'vue'
import { defineStore } from 'pinia'
import { ElNotification } from 'element-plus'
import 'element-plus/theme-chalk/el-notification.css';
export const useCounterStore = defineStore('counter', () => {

 
  const img_id=ref('') //图片的唯一id

  const img_url=ref('') //图片的url

  const Navchange=ref(true) //导航栏的改变

  const iscollect=ref(false) //是否收藏

  const centerDialogVisible=ref(false)
 
  const InorUp=ref(false) //登录还是注册

  const user_id=ref('') //用户id

  const username=ref('') //用户昵称

  const data=reactive({colImg:[],HImg:[],WImg:[]}) 

  

  const colorIndex=ref(0)

  const avatar_url=ref('') //头像

  function changeColor(index){
    switch(index){
      case 0:
        document.documentElement.style.setProperty('--light-bg-color', '#f2f2f2');
        document.documentElement.style.setProperty('--light-font-color', '#2b2b2b');
        break;
      case 1:
        document.documentElement.style.setProperty('--light-bg-color', '#2b2b2b');
        document.documentElement.style.setProperty('--light-font-color', '#f2f2f2');
        break;
      case 2:
        document.documentElement.style.setProperty('--light-bg-color', '#FFC0CB');
        document.documentElement.style.setProperty('--light-font-color', '#2b2b2b');
        break;
        default:
        console.log('nihao')
    }
  }

function showMessage(message,title='Error',type='error'){
  ElNotification({
    title,
    message,
    type,
  })
}


  return { 
    avatar_url,
    colorIndex,
    InorUp,
    img_id,
    img_url,
    Navchange,
    user_id,
    username,
    iscollect,
    centerDialogVisible,
    data,
    changeColor,
    showMessage
  }
})
