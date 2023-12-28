<template>
  <h1 class="flex items-center font-barlow text-3xl">
    <span class="me-4 text-2xl text-gray-500">{{ pageNumber }}</span
    >{{ title }}
  </h1>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  pageNumber: string;
}
defineProps<Props>();
</script>
