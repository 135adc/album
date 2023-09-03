import { createRouter, createWebHistory } from 'vue-router'

import HomeVue from '@/views/Home/Home.vue'
import PhotoVue from '@/views/Photo/Photo.vue'
import SelectVue from '@/views/Selection/Select.vue'
import UserVue from '@/views/User/User.vue'
import HomeUser from '@/views/Home/components/HomeUser.vue'
import HomeProject from '@/views/Home/components/HomeProject.vue'
import HomeDemo from '@/views/Home/components/HomeDemo.vue'
import Color from '@/views/Project/GradientRamp/index.vue'



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
  {
    path:'/',
    component:UserVue,
    name:'首页',
  },
  {
    path:'/home',
    component:HomeVue,
    redirect:({name:'个人中心'}),
    children:[
      {
        path:'/home/user',
        name:'个人中心',
        component:HomeUser,
      },
      {
        path:'/home/project',
        name:'个人项目',
        component:HomeProject
      },
      {
        path:'/home/demo',
        name:'个人案例',
        component:HomeDemo
      }
    ]
  },
  {
    path:'/photo',
    name:'相册首页',
    component:PhotoVue
  },
  {
    path:'/select/:sort',
    name:'分类',
    component:SelectVue
  },
  {
    path:'/color',
    name:'渐变色',
    component:Color,
  }
]

  

})


export default router
