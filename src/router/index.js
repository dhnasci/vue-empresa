import Vue from 'vue'
import VueRouter from 'vue-router'

//const EmpresaEditar = () => import('../components/EmpresaEditar.vue')
const EmpresasLista = () => import('../components/EmpresasLista.vue')

Vue.use(VueRouter)


const routes = [
  {
    path: '/empresas',
    name: 'Empresas',
    component: EmpresasLista
  },
  { 
    path: '/', 
    redirect: '/empresas'
  },
]

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  base: process.env.BASE_URL,
  routes
})

export default router
