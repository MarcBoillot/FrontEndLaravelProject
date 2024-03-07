<script setup>
import IconCart from '@/components/atoms/IconCart.vue'
import IconProfil from '@/components/atoms/IconProfil.vue'
import IconHome from '@/components/atoms/IconHome.vue'
</script>

<template>
  <div class="mr-8 ">
    <ul class="menu menu-horizontal bg-base-200 rounded-box">
      <li>
        <a>
          <IconProfil/>
        </a>
      </li>
      <li>
        <a>
          <IconHome/>
        </a>
      </li>
      <li>
        <a>
          <IconCart/>
        </a>
      </li>
    </ul>
  </div>

</template>

<style scoped>

</style>