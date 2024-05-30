<script setup>

import ContactTopBar from '@/components/molecules/ContactTopBar.vue'
import IconDarkMode from '@/components/atoms/IconDarkMode.vue'
</script>

<template>
  <div class="flex justify-between m-2">

    <div class="py-2">
      <IconDarkMode/>
    </div>
    <div class="py-2">
      <ContactTopBar/>
    </div>

  </div>
</template>

<style scoped>

</style>