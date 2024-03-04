<script setup>

import CardProduct from '@/components/organisms/CardProduct.vue'
import HardTopBar from '@/components/organisms/HardTopBar.vue'
import NavBar from '@/components/atoms/NavBar.vue'
import TopHeader from '@/components/organisms/TopHeader.vue'
</script>

<template>
  <div>
    <div>
      <HardTopBar/>
    </div>
    <div>
      <TopHeader/>
    </div>
    <div>
      <NavBar/>
    </div>
  </div>

  <CardProduct/>
</template>

<style scoped>

</style>