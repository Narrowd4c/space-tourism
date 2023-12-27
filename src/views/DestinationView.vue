<template>
  <div class="bg-destination min-h-dvh">
  <HeaderComp></HeaderComp>
  </div>
</template>

<script setup lang="ts">
import HeaderComp from "../components/HeaderComp.vue";
</script>

<style scoped>
.bg-destination{
    background: url(@/assets/images/destination/background-destination-mobile.jpg) center/cover no-repeat;
  }
  @media screen and (min-width:768px){
    .bg-destination {
      background: url(@/assets/images/destination/background-destination-tablet.jpg) center/cover no-repeat;
    }
  }
  @media screen and (min-width:1280px){
    .bg-destination {
      background: url(@/assets/images/destination/background-destination-desktop.jpg) center/cover no-repeat;
    }
  }
</style>