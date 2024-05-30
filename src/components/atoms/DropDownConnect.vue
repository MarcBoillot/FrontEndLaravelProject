<script setup>
import { useUserStore } from '@/stores/user'
const userStore = useUserStore()

import IconProfil from '@/components/atoms/IconProfil.vue'
</script>

<template>
  <div class="dropdown">
    <div tabindex="0" role="button" class="rounded-none m-1">
      <IconProfil />
    </div>
    <ul tabindex="0" class="dropdown-content z-[1] menu p-1 shadow bg-base-100 rounded-none w-48">
      <li v-if="!userStore.loggedIn">
        <RouterLink to="login">
          <a>Se connecter</a>
        </RouterLink>
      </li>
      <li v-if ="userStore.loggedIn">
        <a @click="userStore.logout">Se déconnecter</a>
      </li>
      <li v-if="!userStore.loggedIn">
        <RouterLink to="register">
          <a>S'enregistrer</a>
        </RouterLink>

      </li>
      <li v-if ="userStore.loggedIn">
        <RouterLink to="user">
        <a @click="userStore.userConnected">Voir mon profil</a>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>