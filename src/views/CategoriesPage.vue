<script setup>
import { useProductStore } from '@/stores/product.js';
import { onMounted } from 'vue' // Correct the path

onMounted(async () => {
  await categoryStoreInstance.getCategories(); // Ensure that the products are loaded when the component is mounted
});
const categoryStoreInstance = useProductStore();

</script>

<template>
<div>
  <p>{{categoryStoreInstance.categories}}</p>
</div>
</template>

<style scoped>

</style>