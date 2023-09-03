<template>
  <!-- <div style="height: 5px; "> 
  </div> -->

  <div class="container">
      <div class="left-box">
            <HomeNav></HomeNav>
      </div>
      <div class="right-box">
        <div style="margin-left: 250px;">
            <RouterView></RouterView>
        </div>
      </div>
</div>


</template>

<script setup>
import HomeNav from './components/HomeNav.vue';





</script>

<style scoped lang="scss">

.container {
display: flex;
}

.left-box {
width: 250px; /* 左边盒子的宽度 */
position: fixed; /* 固定位置 */
left: 0; /* 相对于左边边界 */
top: 120px; /* 相对于上边边界 */
height: 100%; /* 占满整个可视区域高度 */
padding:0 10px;

}


.right-box {
flex: 1; /* 占据剩余的宽度 */
padding: 10px;
height: 100vh;
}

</style>