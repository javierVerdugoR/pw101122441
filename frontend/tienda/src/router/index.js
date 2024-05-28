import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ClientesView from "../views/ClientesView.vue"
import ClientesCreateView from '../views/ClientesCreateView.vue'
import Registro from '../views/Registro.vue'
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
    },
    {
      path: '/registro',
      name: 'registro',
      component: Registro
    }
  ]
})

export default router
