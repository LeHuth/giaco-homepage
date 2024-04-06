<script setup lang="ts">
const categories = [
  { name: 'ARTE RE', url:'arte'},
  { name: 'ARTE TRACKS'},
  { name: 'ARTE TRACKS EAST'},
  { name: '3sat Kulturdoku'},
  { name: '3sat Kulturzeit'},
  { name: 'TerraX'},
  { name: 'Sonderprojekte'},
]
</script>

<template>
    <main class="flex justify-center">
        <div id="category-list">
          <div v-for="category in categories" :key="category.name">
            <a class="text-white hover:text-green-500" :href="`${category.url}`">{{ category.name }}</a>
          </div>
        </div>
    </main>
</template>

<style scoped>
#category-list {
  margin: auto;

  div{
    width: fit-content;
  }
}
main {
  height: 100vh;
}
</style>