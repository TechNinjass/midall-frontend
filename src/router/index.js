import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TabelaDados from '../views/TabelaView.vue';
import MenuArquivosView from '../views/MenuArquivos.vue';
import ConfigView from '../views/ConfigView.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/config',
    name: 'config',
    component: ConfigView
  },
  {
    path: '/tabela',
    name: 'TabelaDados',
    component: TabelaDados
  },
  {
    path: '/menuArquivos',
    name: 'MenuArquivos',
    component: MenuArquivosView
  }
]

const router = new VueRouter({
  routes
})

export default router
