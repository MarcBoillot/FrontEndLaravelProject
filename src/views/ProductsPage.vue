<script setup>

import { useProductStore } from '@/stores/product.js';
import { onMounted } from 'vue'
import ImageBackground from '@/components/atoms/ImageBackground.vue'
import Loading from '@/components/atoms/Loading.vue'
import CardProduct from '@/components/organisms/CardProduct.vue'
import BreadCrumbs from '@/components/atoms/BreadCrumbs.vue'
import SearchBar from '@/components/atoms/SearchBar.vue' // Correct the path

onMounted(async () => {
  await productStoreInstance.getProducts(); // Ensure that the products are loaded when the component is mounted
});

const productStoreInstance = useProductStore();

</script>

<template>
  <div>
    <ImageBackground />
  </div>
  <div>
    <BreadCrumbs/>
  </div>
  <div class="flex justify-center mt-8">
    <SearchBar/>
  </div>
    <h2 class="mt-12 mb-12 pt-6 pb-6 font-sans tracking-wider ml-16">NOS PRODUITS </h2>

  <div v-if="productStoreInstance.loading"><Loading/></div>
  <div v-else class="grid lg:grid-cols-3 sm:grid-cols-2 gap-2 place-items-center px-80 ml-24">
    <CardProduct v-for="product in productStoreInstance.filteredProducts" :product="product" :key="product.id"/>
  </div>
  <Footer/>
</template>

<style scoped>

</style>