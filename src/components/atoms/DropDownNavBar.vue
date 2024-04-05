<script setup>

</script>

<template>
  <div class="dropdown dropdown-right dropdown-end ">
    <div tabindex="0" role="button" class="btn m-1 rounded-none">Menu</div>
    <ul tabindex="0" class="dropdown-content z-[1] menu p-2 shadow bg-base-700  rounded-none w-52">
      <li>
        <RouterLink to="/">
          <a>HOME</a>
        </RouterLink>

      </li>
      <li>
        <RouterLink to="/products">
          <a>PRODUCTS</a>
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/crafters">
          <a>CRAFTERS</a>
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/categories">
          <a>CATEGORIES</a>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>