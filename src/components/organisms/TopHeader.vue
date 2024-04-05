<script setup>

import LogoText from '@/components/atoms/LogoText.vue'
import SearchBar from '@/components/atoms/SearchBar.vue'
import IconMenu from '@/components/molecules/IconMenu.vue'
import LogoTexteMd from '@/components/atoms/LogoTexteMd.vue'
</script>

<template>
    <div class="flex flex-wrap max-w-5xl">

      <div class="h-0 w-0 invisible md:visible py-8 ">
        <LogoText/>
      </div>

      <div class="h-10 visible md:invisible py-8 ">
        <LogoTexteMd/>
      </div>

      <div class="grid place-items-center order-last md:order-1 py-8">
        <SearchBar/>
      </div>

      <div class="py-8 md:order-last">
        <IconMenu/>
      </div>

    </div>
</template>

<style scoped>

</style>