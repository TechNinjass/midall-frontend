import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TabelaDados from '../views/TabelaView.vue';
import MenuArquivosView from '../views/MenuArquivos.vue';
import ConfigDriveView from '../views/ConfigDriveView.vue';
import ConfigAzureView from '../views/ConfigAzureView.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/configDrive',
    name: 'configDrive',
    component: ConfigDriveView
  },
  {
    path: '/configAzure',
    name: 'configAzure',
    component: ConfigAzureView
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
