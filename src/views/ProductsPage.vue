<script setup>

import { useProductStore } from '@/stores/product.js';
import { onMounted } from 'vue' // Correct the path

onMounted(async () => {
  await productStoreInstance.getProducts(); // Ensure that the products are loaded when the component is mounted
});

const productStoreInstance = useProductStore();

</script>

<template>
  <div>
      <BreadCrumbs/>
  </div>
  <div v-if="productStoreInstance.loading"><Loading/></div>
  <div v-else>
    <CardProduct v-for="product in productStoreInstance.filteredProducts" :product="product" :key="product.id"/>
  </div>

  <Footer/>
</template>

<style scoped>

</style>