<script setup lang="ts">


import {definePageMeta} from "#imports";
import MySwiper from "~/components/MySwiper.vue";

const router = useRouter()
const url = router.currentRoute.value.params.slug
console.log(url)

const { data, pending } = await useFetch('/api/getListings?slug=arte')
console.log(data.value.body.message.data )
definePageMeta({
  title: 'Slug Page',
  description: 'This is a slug page',
  image: 'https://via.placeholder.com/150',
  url: 'https://example.com/slug',
  layout: 'default'
})
</script>

<template>
  <main class="flex flex-col pb-32 p-10">
    <div class="">

      <MySwiper v-if="!pending" :slider-content="data.body.message"/>


    </div>
    <div class="mt-auto  items-center">
      <div class="custom-swiper-pagination !m-auto !w-fit"></div>
    </div>

  </main>

</template>

<style scoped>
main{
  height: 100vh;
  padding-top: 200px;
}
/* Customize the pagination bullets to be rectangles */
:deep(.swiper-pagination-bullet) {
  width: 32px; /* Width of the rectangle */
  height: 2px; /* Height of the rectangle */
  background-color: gray; /* Color of the bullet */
  opacity: 1; /* Make it fully opaque */
  border-radius: 0; /* Remove the border-radius to get sharp corners */
}

/* Style for the active bullet */
:deep(.swiper-pagination-bullet-active) {
  background-color: white; /* Change the color of the active bullet */
}
</style>