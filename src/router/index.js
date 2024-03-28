import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ProductsPage from '../views/ProductsPage.vue'
import NavBar from '@/components/atoms/NavBar.vue'
import LoginPage from '@/views/LoginPage.vue'
import CategoriesPage from '@/views/CategoriesPage.vue'
import CartPage from '@/views/CartPage.vue'
import RegisterPage from '@/views/RegisterPage.vue'
import MyProfilPage from '@/views/MyProfilPage.vue'
// import TopHeader from '@/components/organisms/TopHeader.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        content: HomePage,
        navbar: NavBar
      }
    },

    {
      path: '/products',
      name: 'products',
      components: {
        content: ProductsPage,
        navbar: NavBar
      },
    },
    {
      path: '/login',
      name: 'login',
      components: {
        content: LoginPage,
        navbar: NavBar
      }
    },
    {
      path:'/user',
      name:'user',
      components:{
        content: MyProfilPage,
        navbar:NavBar
      }

    },
    {
      path: '/register',
      name: 'register',
      components: {
        content: RegisterPage,
        navbar: NavBar
      }
    },
    {
      path: '/categories',
      name: 'categories',
      components: {
        content: CategoriesPage,
        navbar: NavBar
      }
    },
    {
      path: '/cart',
      name: 'cart',
      components: {
        content: CartPage,
        navbar: NavBar
      }
    },


  ]
})

export default router
