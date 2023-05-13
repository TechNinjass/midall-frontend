import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TabelaDados from '../views/TabelaView.vue';
import MenuArquivosView from '../views/MenuArquivos.vue';
import ConfigDriveView from '../views/ConfigDriveView.vue';
import ConfigAzureView from '../views/ConfigAzureView.vue';
import Configuracao from '../views/ConfiguracoesView.vue';
import ConfigTempo from '../views/ConfigTempoView.vue';
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
  },
  {
    path: '/configuracoes',
    name: 'Configuracoes',
    component: Configuracao
  },
  {
  path: '/ConfigTempo',
  name: 'ConfigTempo',
  component: ConfigTempo
},


]

 

const router = new VueRouter({
  routes
})

export default router