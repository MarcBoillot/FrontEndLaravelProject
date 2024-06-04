import axios from 'axios'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useCartStore } from '@/stores/cart'

export const useUserStore = defineStore('login', () => {
  const cartStore = useCartStore()
  const email = ref('')
  const firstname = ref('')
  const lastname = ref('')
  const birthdate = ref('')
  const phone_number = ref('')
  const role = ref('')
  const password = ref('')
  const password_confirmation = ref('')
  const loggedIn = ref(false)
  const userId = ref('')
  const url = 'http://localhost:8000/'
  const user = ref(null)

  async function login() {
    try {
      await axios.get('https://localhost:8000/sanctum/csrf-cookie')
      await axios.post(`${url}login`, {
        email: email.value,
        password: password.value
      })
      loggedIn.value = true
      await this.router.push({ path: '/' })
    } catch (error) {
      console.error('Erreur lors de la connexion :', error)
      // Gérer l'erreur, par exemple afficher un message à l'utilisateur
    }
  }

  async function userConnected() {
    try {
      const response = await axios.get(`${url}api/user`)
      user.value = response.data
      userId.value = response.data.id
      console.log('userId', userId.value)
      loggedIn.value = true
      console.log('connexion reussite')
    } catch (error) {
      console.error('Aucun utilissateur connecté:', error)
      loggedIn.value = false

    }
  }

  async function register() {
    try {
      await axios.post('/api/register', {
        firstname: firstname.value,
        lastname: lastname.value,
        email: email.value,
        birthdate: birthdate.value,
        phone_number: phone_number.value,
        role: role.value,
        password: password.value,
        password_confirmation: password_confirmation.value
      })
    } catch (error) {
      console.error('error enregistrement:', error)
    }
  }

  async function logout() {
    try {
      await axios.post(`${url}logout`)
      console.log('Déconnexion réussie :')
      loggedIn.value = false
    } catch (error) {
      console.error('Erreur lors de la déconnexion :', error)
    }
  }

  userConnected()

  return {
    firstname,
    lastname,
    birthdate,
    phone_number,
    role,
    email,
    password,
    password_confirmation,
    login,
    loggedIn,
    logout,
    user,
    userId,
    userConnected,
    register
  }
})
