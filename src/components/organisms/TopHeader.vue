<script setup>

import LogoText from '@/components/atoms/LogoText.vue'

import IconMenu from '@/components/molecules/IconMenu.vue'
// import LogoTexteMd from '@/components/atoms/LogoTexteMd.vue'
import NavBar from '@/components/atoms/NavBar.vue'
</script>

<template>
  <div class="flex justify-between flex-wrap mb-24 mt-24 mx-12">
    <LogoText />
    <NavBar />
    <IconMenu />
    <!--      <div class="h-10 visible md:invisible py-8 ">-->
    <!--        <LogoTexteMd/>-->
    <!--      </div>-->
  </div>
</template>

<style scoped>

</style>