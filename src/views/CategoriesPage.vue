<script setup>
import { useProductStore } from '@/stores/product.js';


const categoryStoreInstance = useProductStore();

</script>

<template>
<div class="grid place-items-center mt-32">
  <p v-for="category in categoryStoreInstance.categories" :key="category" class="mt-8 mb-8">{{ category.category_name }}</p>
</div>
</template>

<style scoped>

</style>