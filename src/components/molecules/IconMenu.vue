<script setup>
import IconCart from '@/components/atoms/IconCart.vue'
import IconHome from '@/components/atoms/IconHome.vue'
import DropDownConnect from '@/components/atoms/DropDownConnect.vue'
</script>

<template>
  <div class="mr-8">
    <ul class="menu menu-horizontal bg-base1000 rounded-none">

        <a>
          <DropDownConnect />
        </a>

      <li>
        <a>
          <IconHome />
        </a>
      </li>
      <li>
        <a>
          <IconCart />
        </a>
      </li>
    </ul>
  </div>

</template>

<style scoped>

</style>