import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ClientesView from "../views/ClientesView.vue"
import ClientesCreateView from '../views/ClientesCreateView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/clientes',
      name: 'clientes',
      component: ClientesView
    },
    {
      path: '/clientes/create',
      name: 'clientescreate',
      component: ClientesCreateView
    }
  ]
})

export default router
