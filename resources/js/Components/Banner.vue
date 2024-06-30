<template>
    <div class="banner h-64 bg-cover bg-center flex items-center justify-center text-white text-3xl font-bold" :style="{ backgroundImage: `url(${bannerImage})` }">
      <slot></slot>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    bannerImage: {
      type: String,
      required: true
    }
  });
  </script>
  
  <style scoped>
  .banner {
    background-blend-mode: overlay;
  }
  </style>
  