<script setup>
import axios from 'axios'
import { onMounted, ref } from 'vue'
// const categoryProducts = ref([])
import { useProductStore } from '@/stores/product.js'
const productStoreInstance = useProductStore()
// async function getCategory() {
//   loading.value = true;
//   try {
//     const response = await axios.get(`https://fakestoreapi.com/products/category/${selected.value}`)
//     categoryProducts.value = response.data
//   } catch (e) {
//     throw new Error('NO DATA');
//   }
//   loading.value = false
// }

onMounted(() => {
  productStoreInstance.getCategories()
})

</script>

<template>
  <div class="join">
    <div>
      <div>
        <input class="input input-bordered join-item" placeholder="Search"/>
      </div>
    </div>
    <select v-model="productStoreInstance.selected" class="select select-bordered join-item">
      <option disabled selected>---Categories---</option>
      <option v-for="category in productStoreInstance.categories" :key="category">{{category}}</option>
    </select>
    <div class="indicator">
      <button @click="productStoreInstance.getCategoryProducts()" class="btn join-item">Search</button>
    </div>
    </div>
</template>

<style scoped>

</style>