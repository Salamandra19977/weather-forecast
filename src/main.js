import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import router from './routes'
import store from './store'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueAxios, axios)

new Vue({
  render: h => h(App),
  router, store
}).$mount('#app')
