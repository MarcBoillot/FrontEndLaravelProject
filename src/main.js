import './assets/main.css'

import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import axios from 'axios'
//
// const app = createApp(App)
const pinia = createPinia();

axios.defaults.withCredentials = true;
axios.defaults.withXSRFToken= true;
pinia.use(({ store }) => {
  store.router = markRaw(router)
});
// app.use(pinia)
// app.use(router)
// app.mount('#app')


createApp(App).use(router).use(pinia).mount('#app');