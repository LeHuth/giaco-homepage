<script setup lang="ts">
let options = {
  "animate": true,
  "patternWidth": 100,
  "patternHeight": 100,
  "grainOpacity": 0.05,
  "grainDensity": 1,
  "grainWidth": 1,
  "grainHeight": 1
}
// only when client-side

onMounted(() => {
  if (process.client) {
    console.log('client-side')
    grained('#main-wrapper', options)
  }
})

</script>

<template>
<div id="main-wrapper" class="h-dvh">
  <Header/>
  <slot class="z-40 p-10"/>
  <video class="absolute top-0 left-0 h-full object-cover -z-20 opacity-20 w-full" autoplay muted loop id="myVideo">
    <source src="/clip.mp4" type="video/mp4">
  </video>
</div>
</template>

<style scoped>
#main-wrapper:before{
  pointer-events: none;
  z-index: 1001;
}
</style>