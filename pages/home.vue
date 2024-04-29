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

<!--      TODO: Make this render from a list of projects as a v-for loop-->
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

    <section class="my-bg-secondary py-44 min-h-96 px-8 z-10">
        <h1 class="hero-font-invert text-7xl text-right">WORKED WITH</h1>
      <div class="grid grid-cols-4 gap-8 mt-14">
<!--        TODO: same here. make this render from a list of logos as a v-for loop-->
        <div>
          <NuxtImg src="3sat_logo_bg.png" width="150" height="150" class="mx-auto"/>
        </div>
        <div>
          <NuxtImg src="arte_logo_bg.png" width="150" height="150" class="mx-auto"/>
        </div>
        <div>
          <NuxtImg src="bauma_logo_bg.png" width="150" height="150" class="mx-auto"/>
        </div>
        <div>
          <NuxtImg src="roadstars_logo_bg.png" width="150" height="150" class="mx-auto"/>
        </div>
        <div>
          <NuxtImg src="terrax_logo_bg.png" width="150" height="150" class="mx-auto"/>
        </div>
        <div>
          <NuxtImg src="tracks_logo_bg.png" width="150" height="150" class="mx-auto"/>
        </div>
        <div>
          <NuxtImg src="tracks_east_logo_bg.png" width="150" height="150" class="mx-auto"/>
        </div>
        <div>
          <NuxtImg src="mercedes_logo_bg.png" width="150" height="150" class="mx-auto"/>
        </div>


      </div>
    </section>

    <Footer />
  </main>
</template>

<style scoped>

</style>