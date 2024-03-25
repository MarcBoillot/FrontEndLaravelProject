import axios from 'axios';
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { cart } from 'stores';

export const useUserStore = defineStore('Login', () => {
  const cartStore = cart.js;
  const email = ref('');
  const password = ref('');
  const token = ref('');

  async function login() {
    try {
      const response = await axios.post('login', {
        email: email.value,
        password: password.value
      });

      // Récupérer le token de la réponse de l'API
      token.value = response.data.token;

      // Gérer la réponse de l'API, par exemple sauvegarder le token dans le store
    } catch (error) {
      console.error('Erreur lors de la connexion :', error);
      // Gérer l'erreur, par exemple afficher un message à l'utilisateur
    }
  }

  return { cartStore, email, password, token, login };
});
