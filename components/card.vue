<script setup lang="ts">
  const videoRef = ref<HTMLVideoElement | null>(null)

  const playVideo = ():void => {
    if(!videoRef.value) return
    videoRef.value.play()
  }

  const pauseVideo = ():void => {
    if(!videoRef.value) return
    videoRef.value.pause()
    videoRef.value.currentTime = 0
  }

  const showImage = ref(true)

  watch(() => showImage.value, (value) => {
    console.log(value)
    if(value) {
      pauseVideo()
    } else {
      playVideo()
    }
  })

</script>

<template>
  <div id="wrapper" @mouseenter="showImage=false" @mouseleave="showImage=true">

    <NuxtImg  src="sonder-1.jpg" alt="Sonder" class="absolute w-[290px] h-[440px] z-50 rounded-3xl object-cover test" />

    <video id="myVideo" ref="videoRef" class=" rounded-3xl h-full object-cover opacity-60 myvideo" src="../public/clip.mp4" :controls="false" loop muted></video>

  </div>
</template>

<style scoped>
.test:hover {
  opacity: 0;
}

.test{
  transition: opacity 0.5s;
}
</style>