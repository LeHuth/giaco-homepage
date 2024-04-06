<script setup lang="ts">
const categories = [
  { name: 'ARTE', url:'arte'},
  { name: '3sat', url: '3sat'},
  { name: 'TerraX', url: 'terrax'},
  { name: 'Sonderprojekte', url: 'sonderprojekte'},
]
</script>

<template>
    <main class="flex justify-center">
        <div class="flex-col justify-center flex items-center" id="category-list">
          <div v-for="category in categories" :key="category.name">
            <a class="text-white text-center text-xl hover:text-green-500" :href="`${category.url}`">{{ category.name }}</a>
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