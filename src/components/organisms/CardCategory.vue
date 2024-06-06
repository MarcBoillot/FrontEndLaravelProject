<script setup>
import { useProductStore } from '@/stores/product.js';
const categoryStoreInstance = useProductStore();
</script>
<template>
  <div class="bg-white">
    <div class="max-w-xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 class="text-2xl font-extrabold tracking-tight text-gray-900">Mes Categories</h2>
      <p class="mt-4 text-base text-gray-500">Each season, we collaborate with world-class designers to create a collection inspired by the natural world.</p>

      <div class="mt-10 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8">
        <a  v-for="category in categoryStoreInstance.categories" :key="category" class="group block">
          <div aria-hidden="true" class="aspect-w-3 aspect-h-2 rounded-lg overflow-hidden group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-6">
            <img src="/src/assets/img/carlo-borella-s9QlFhP8b74-unsplash.jpg" :alt="category.imageAlt" class="w-full h-full object-center object-cover" />
          </div>
          <h3 class="mt-4 text-base font-semibold text-gray-900">{{ category.category_name }}</h3>
<!--          <p class="mt-2 text-sm text-gray-500">{{ category.description }}</p>-->
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>