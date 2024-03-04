<script setup>

import LogoText from '@/components/atoms/LogoText.vue'
import SearchBar from '@/components/atoms/SearchBar.vue'
import IconMenu from '@/components/molecules/IconMenu.vue'
</script>

<template>
  <div class="flex items-stretch">
    <div class="py-8">
      <LogoText/>
    </div>
    <div class="py-8">
      <SearchBar/>
    </div>
    <div class="py-8">
      <IconMenu/>
    </div>
  </div>

</template>

<style scoped>

</style>