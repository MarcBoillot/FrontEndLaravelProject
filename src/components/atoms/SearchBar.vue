<script setup>
import { onMounted, ref } from 'vue'
import { useProductStore } from '@/stores/product.js'
const productStoreInstance = useProductStore()

onMounted(() => {
  productStoreInstance.getCategories()
})
function selectedRow (){
  if (productStoreInstance.selected ==="all"){
    productStoreInstance.getProducts()
  }else{
    productStoreInstance.getCategoryProducts()
  }
}

</script>

<template>
  <div class="join">
    <div>
      <div>
        <input class="input input-bordered rounded-none join-item w-60 h-12" placeholder="Search"/>
      </div>
    </div>
    <select v-model="productStoreInstance.selected" class="select select-bordered join-item rounded-none w-32">
      <option disabled selected>---Categories---</option>
      <option value="all">All</option>
      <option class="m-4" v-for="category in productStoreInstance.categories" :key="category">{{category.category_name}}</option>
    </select>
    <div class="indicator">
      <button @click="selectedRow()" class="btn join-item rounded-none">Search</button>
    </div>
    </div>
</template>

<style scoped>

</style>