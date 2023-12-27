<script setup lang="ts">
import { RouterView } from "vue-router";

</script>

<template>
  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style>
.fade-leave-active,
.fade-enter-active {
  transition: opacity 0.6s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0.1;
}
</style>
