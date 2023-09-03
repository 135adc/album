<template>
  <div class="main-box">


  <Carousel></Carousel>
  <Selection></Selection>
  <HotImageVue></HotImageVue>
</div>
</template>

<script setup>
import Carousel from "../Photo/components/Carousel.vue";
import Selection from "../Photo/components/Selection.vue";
import HotImageVue from "../Photo/components/HotImage.vue";
</script>

<style scoped lang="scss">
.main-box{
  padding: 10px 30px;
}
</style>