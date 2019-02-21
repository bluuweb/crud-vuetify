import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: () => import(/* webpackChunkName: "dashboard" */ './views/Dashboard.vue')
    },
    {
      path: '/proyectos',
      name: 'proyectos',
      component: () => import(/* webpackChunkName: "proyectos" */ './views/Proyectos.vue')
    },
    {
      path: '/perfil',
      name: 'perfil',
      component: () => import(/* webpackChunkName: "perfil" */ './views/Perfil.vue')
    }
  ]
})
