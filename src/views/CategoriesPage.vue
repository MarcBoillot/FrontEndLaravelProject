<script setup>
import { useProductStore } from '@/stores/product.js';
import { onMounted } from 'vue' // Correct the path

const categoryStoreInstance = useProductStore();

</script>

<template>
<div>
  <p v-for="category in categoryStoreInstance.categories" :key="category">{{ category.category_name }}</p>
</div>
</template>

<style scoped>

</style>