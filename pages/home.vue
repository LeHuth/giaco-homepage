<script setup lang="ts">
definePageMeta({
  layout: 'blog',
})
</script>

<template>
  <main>
    <Hero class="mb-28" />
    <section class="px-8">
      <h1 class="hero-font text-7xl text-right">FEATURED WORK</h1>
      <div class="grid grid-cols-3 gap-8 max-w-[930px]">
        <div class="bg-gray-200  h-[440px]"></div>
        <div class="bg-gray-200  h-[440px]"></div>
        <div class="bg-gray-200  h-[440px]"></div>
        <div class="bg-gray-200  h-[440px]"></div>
        <div class="bg-gray-200  h-[440px]"></div>
        <div class="bg-gray-200  h-[440px]"></div>
      </div>
    </section>
    <Footer />
  </main>
</template>

<style scoped>

</style>