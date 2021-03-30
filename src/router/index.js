import Vue from 'vue'
import VueRouter from 'vue-router'

const EmpresaEditar = () => import('../components/EmpresaEditar.vue')
const EmpresasLista = () => import('../components/EmpresasLista.vue')

const extrairParametroId = route => ({
  id: +route.params.id
})

Vue.use(VueRouter)

const routes = [
  {
    path: '/empresas/:id(\\id+)',
    alias: '/empresas/:id(\\id+)/editar',
    component: EmpresaEditar,
    name: 'empresa',
    props: extrairParametroId
  },
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
  base: process.env.BASE_URL,
  routes
})

export default router
