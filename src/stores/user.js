import axios from 'axios';
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { useCartStore } from '@/stores/cart';

export const useUserStore = defineStore('login', () => {
  const cartStore = useCartStore();
  const email = ref('');
  const password = ref('');
  const url = 'http://localhost:8000/';

  async function login() {
    try {
      const response = await axios.post(`${url}login`, {
        email: email.value,
        password: password.value
      });
      // Gérer la réponse de l'API, par exemple sauvegarder le token dans le store
      console.log('Connexion réussie :', response.data);
    } catch (error) {
      console.error('Erreur lors de la connexion :', error);
      // Gérer l'erreur, par exemple afficher un message à l'utilisateur
    }
  }

  async function logout() {
    try {
      const response = await axios.post(`${url}logout`);
      console.log('Déconnexion réussie :', response.data);
    } catch (error) {
      console.error('Erreur lors de la déconnexion :', error);
    }
  }

  return { email, password, login, logout };
});
