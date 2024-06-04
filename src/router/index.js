import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import ProductsPage from '../views/ProductsPage.vue'

import LoginPage from '@/views/LoginPage.vue'
import CategoriesPage from '@/views/CategoriesPage.vue'
import CartPage from '@/views/CartPage.vue'
import RegisterPage from '@/views/RegisterPage.vue'
import MyProfilPage from '@/views/MyProfilPage.vue'
import CraftersPage from '@/views/CraftersPage.vue'
import CrafterPage from '@/views/CrafterPage.vue'
import CartSummaryPage from '@/views/CartSummaryPage.vue'
import StepperGeneraleView from '@/components/atoms/StepperGeneraleView.vue'
import StepperDeliveryAddresses from '@/components/atoms/StepperDeliveryAddresses.vue'
import CartDeliveryInformationsPage from '@/views/CartDeliveryInformationsPage.vue'
import PaymentPage from '@/views/PaymentPage.vue'
import StepperPayment from '@/components/atoms/StepperPayment.vue'
import DeliveryAddressPage from '@/views/DeliveryAddressPage.vue'
import TopHeader from '@/components/organisms/TopHeader.vue'
import HardTopBar from '@/components/organisms/HardTopBar.vue'
import paymentCompletePage from '@/views/paymentCompletePage.vue'
// import TopHeader from '@/components/organisms/TopHeader.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        content: HomePage,
        navbar: TopHeader,
        hardtopbar: HardTopBar
      }
    },

    {
      path: '/products',
      name: 'products',
      components: {
        content: ProductsPage,
        navbar: TopHeader,
        hardtopbar: HardTopBar
      },
    },
    {
      path: '/crafters',
      name: 'crafters',
      components: {
        content: CraftersPage,
        navbar: TopHeader,
        hardtopbar: HardTopBar
      },
    },
    {
      path: '/crafter/:crafterId',
      name: 'crafter',
      components: {
        content: CrafterPage,
        navbar: TopHeader,
        hardtopbar: HardTopBar
      },
    },
    {
      path: '/login',
      name: 'login',
      components: {
        content: LoginPage,
        navbar: TopHeader,
        hardtopbar: HardTopBar
      }
    },
    {
      path:'/user',
      name:'user',
      components:{
        content: MyProfilPage,
        navbar:TopHeader,
        hardtopbar: HardTopBar
      }

    },
    {
      path: '/register',
      name: 'register',
      components: {
        content: RegisterPage,
        navbar: TopHeader,
        hardtopbar: HardTopBar
      }
    },
    {
      path: '/categories',
      name: 'categories',
      components: {
        content: CategoriesPage,
        navbar: TopHeader,
        hardtopbar: HardTopBar
      }
    },
    {
      path: '/cart',
      name: 'cart',
      components: {
        content: CartPage,
        navbar: TopHeader,
        hardtopbar: HardTopBar
      }
    },
    {
      path: '/summary',
      name: 'summary',
      components: {
        content: CartSummaryPage,
        step: StepperGeneraleView
      }
    },
    {
      path: '/deliveryAddress',
      name: 'deliveryAddress',
      components: {
        content: DeliveryAddressPage,
        step: StepperDeliveryAddresses
      }
    },
    {
      path: '/deliveryInformations',
      name: 'deliveryInformations',
      components: {
        content: CartDeliveryInformationsPage,
        step: StepperDeliveryAddresses
      }
    },
    {
      path: '/payment',
      name: 'payment',
      components: {
        content: PaymentPage,
        step: StepperPayment
      }
    },
    {
      path: '/paymentSuccess',
      name: 'paymentSuccess',
      components: {
        content: paymentCompletePage,
      }
    },

  ]
})

export default router
