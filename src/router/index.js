import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TareasView from '../views/TareasView.vue'
import PerfilView from '../views/PerfilView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/tareas', component: TareasView },
  { path: '/perfil', component: PerfilView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
