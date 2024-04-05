<script setup lang="ts">

import MySwiper from "~/components/MySwiper.vue";
const swiperContent = [
  {name:'Reiche Ernte auf minimaler Fläche', image: './arte-3.jpg'},
  {name:'Polens Zivilisten trainieren für den Ernstfall', image: 'arte-2.jpg'},
  {name:'Sportschützen unter Druck', image: 'arte-1.jpg'},
  {name:'Büffelmozzarella aus Italien, die dunkle Seite der Delikatesse', image: 'arte-4.jpg'},
]
</script>

<template>
  <main class="flex flex-col pb-32 p-10">
    <div class="">
      <MySwiper :slider-content="swiperContent"/>

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