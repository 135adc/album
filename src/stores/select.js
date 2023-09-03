import { ref} from 'vue'
import { defineStore } from 'pinia'

export const useSelectStore = defineStore('select', () => {
  
const sort =ref('')  //分类名

const  bread =ref([])

const Navindex=ref(0) //路由
  return { sort, bread,Navindex}
})
