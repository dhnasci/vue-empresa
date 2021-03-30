import Vue from 'vue'
import VueRouter from 'vue-router'
import EmpresasLista from '../components/EmpresasLista.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Empresas',
    component: EmpresasLista
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
