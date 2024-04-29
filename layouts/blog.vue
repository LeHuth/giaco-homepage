<script setup lang="ts">
onMounted(() => {
  useSmoothScroll()
})
</script>

<template>
<div class="max-w-7xl min-h-dvh m-auto blog-bg border-l border-r">
<!--  <Header class="max-w-7xl"/>-->
  <slot class="z-40"/>
</div>
</template>

<style scoped>
.blog-bg {
  background-color: #1C1C1C;
  border-color: #E2DAD3;
}


</style>