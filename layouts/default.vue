<script setup lang="ts">

</script>

<template>
<div>
  <Header/>
  <slot class="z-40 p-10"/>
  <video class="absolute top-0 left-0 h-full object-cover -z-20 opacity-20" autoplay muted loop id="myVideo">
    <source src="/clip.mp4" type="video/mp4">
  </video>
</div>
</template>

<style scoped>

</style>