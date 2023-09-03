<template>
  <div class="sel-box">
   <SelectionItem :sort="data.itemData[0]"></SelectionItem>
   <SelectionItem :sort="data.itemData[1]"></SelectionItem>
   <SelectionItem :sort="data.itemData[2]"></SelectionItem>
   <SelectionItem :sort="data.itemData[3]"></SelectionItem>
   <SelectionItem :sort="data.itemData[4]"></SelectionItem>
  </div>
</template>

<script setup>
import { reactive } from 'vue';
import SelectionItem from './SelectionItem.vue';

const data=reactive({itemData:[
  {sortName:"动漫",sortImg:"https://caozhaoyicos-1317708264.cos.ap-guangzhou.myqcloud.com/image/%E9%BA%BB%E8%A1%A3.png"},
  {sortName:"风景",sortImg:"https://caozhaoyicos-1317708264.cos.ap-guangzhou.myqcloud.com/image/%E9%A3%8E%E6%99%AF.jpg"},
  {sortName:"人物",sortImg:"https://caozhaoyicos-1317708264.cos.ap-guangzhou.myqcloud.com/photo%2F%E4%BA%BA%E7%89%A9%2Frenwu%20(1).jpg"},
  {sortName:"科幻",sortImg:"https://caozhaoyicos-1317708264.cos.ap-guangzhou.myqcloud.com/photo%2F%E7%A7%91%E5%B9%BB%2Fxunku%20(8).jpg"},
  {sortName:"可爱",sortImg:"https://caozhaoyicos-1317708264.cos.ap-guangzhou.myqcloud.com/photo%2F%E5%8F%AF%E7%88%B1%2Fcute%20(2).jpeg"},
]})



</script>

<style scoped lang="scss">

.sel-box{
    margin: 15px 0;
    height: 120px;
    padding: 10px 0;
    display: flex;
   
}
</style>