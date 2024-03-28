<script setup>
import { useUserStore } from '@/stores/user.js';
const userStore = useUserStore();

// Appel de la méthode userConnected() pour récupérer les détails de l'utilisateur
</script>

<template>
  <div class="grid place-items-center mt-32">
    <p class="mt-8 mb-8">ID: {{ userStore.user.id }}</p>
    <p class="mt-8 mb-8">Prénom: {{ userStore.user.firstname }}</p>
    <p class="mt-8 mb-8">Nom: {{ userStore.user.lastname }}</p>
    <p class="mt-8 mb-8">Date de naissance: {{ userStore.user.birthdate }}</p>
    <p class="mt-8 mb-8">E-mail: {{ userStore.user.email }}</p>
    <p class="mt-8 mb-8">Numero de téléphone: {{ userStore.user.phone_number }}</p>
    <p class="mt-8 mb-8">Rôle: {{ userStore.user.role }}</p>
  </div>
</template>

<style scoped>
/* Vos styles CSS ici */
</style>
