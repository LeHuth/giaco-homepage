<script setup lang="ts">
let options = {
  "animate": true,
  "patternWidth": 134.28,
  "patternHeight": 133.37,
  "grainOpacity": 0.06,
  "grainDensity": 2.27,
  "grainWidth": 2.27,
  "grainHeight": 3.31
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