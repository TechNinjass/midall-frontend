import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TabelaDados from '../views/TabelaView.vue';


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/tabela',
    name: 'TabelaDados',
    component: TabelaDados
  }
]

const router = new VueRouter({
  routes
})

export default router
