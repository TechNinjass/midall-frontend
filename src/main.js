import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/index.css'
import PrimeVue from 'primevue/config';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  PrimeVue,
  render: h => h(App)
}).$mount('#app')
