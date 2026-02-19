import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TareasView from '../views/TareasView.vue'
import PerfilView from '../views/PerfilView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeView },
    { path: '/tareas', component: TareasView },
    { path: '/perfil', component: PerfilView },
  ]
})

export default router

