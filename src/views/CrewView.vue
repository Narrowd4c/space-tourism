<template>
  <div class="bg-crew min-h-dvh">
    <HeaderComp></HeaderComp>
  </div>
</template>

<script setup lang="ts">
import HeaderComp from "@/components/HeaderComp.vue";
</script>

<style scoped>
.bg-crew {
  background: url(@/assets/images/crew/background-crew-mobile.jpg) center/cover no-repeat;
}
@media screen and (min-width: 768px) {
  .bg-crew {
    background: url(@/assets/images/crew/background-crew-tablet.jpg) center/cover no-repeat;
  }
}
@media screen and (min-width: 1280px) {
  .bg-crew {
    background: url(@/assets/images/crew/background-crew-desktop.jpg) center/cover no-repeat;
  }
}
</style>
