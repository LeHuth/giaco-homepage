<script setup lang="ts">
import {Pagination} from "swiper/modules";
const props = defineProps({
  sliderContent: {
    type: Array,
    required: true
  }});
console.log(props.sliderContent)
</script>

<template>
  <div>
    <h1 class="text-white font-bold mb-16 ">ARTE:Re</h1>
  <Swiper
      :modules="[Pagination]"
      :slides-per-view="2"
      :space-between="16"
      :pagination="{ clickable: true, enabled: true, el: '.custom-swiper-pagination'}"
  >
    <SwiperSlide v-for="(slide,idx) in props.sliderContent" :key="idx">
      <NuxtImg :src="slide.image" />
      <p class="text-white text-2xl font-bold mt-4">{{slide.name}}</p>
    </SwiperSlide>
  </Swiper>
  </div>
</template>

<style scoped>
h1{
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  font-size: 150px;
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