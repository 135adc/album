<template>
  <BlockVue></BlockVue>
  <Login></Login>
  <!-- 首页 -->
 
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </router-view>
   
   

</template>

<script setup>

import Login from "./components/Login.vue";
import BlockVue from "./components/BlockVue.vue";






</script>

<style lang="scss">

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  
}

body{
  background:var(--light-bg-color);
  color: var(--light-font-color);
  transition: background-color  .5s ease-in-out;
}
</style>