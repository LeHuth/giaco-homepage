<script setup lang="ts">
definePageMeta({
  layout: 'blog',
})
</script>

<template>
  <main class="flex flex-col">
    <Hero class="mb-28" />
    <section class="px-8 pb-8 rounded-[56px] my-bg z-50 -mb-16">
      <div >


      <h1 class="hero-font text-7xl text-right">FEATURED WORK</h1>
      <div class="grid grid-cols-3 gap-8 max-w-[930px] mt-14">
        <div class="h-[440px]">
          <Card class="h-full top-0 right-0" />
        </div>
        <div class="h-[440px]">
          <Card class="h-full top-0 right-0" />
        </div>
        <div class="h-[440px]">
          <Card class="h-full top-0 right-0" />
        </div>
        <div class="h-[440px]">
          <Card class="h-full top-0 right-0" />
        </div>
        <div class="h-[440px]">
          <Card class="h-full top-0 right-0" />
        </div>
        <div class="h-[440px]">
          <Card class="h-full top-0 right-0" />
        </div>
      </div>
      </div>
    </section>

    <section class="my-bg-secondary h-96 z-10">

    </section>

    <Footer />
  </main>
</template>

<style scoped>

</style>