import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

const base = axios.create({
  baseURL: 'http://localhost:3600/api',
})

Vue.prototype.$http = base;
Vue.config.productionTip = false

/*const token = localStorage.getItem('token')
if (token) {
  Vue.prototype.$http.defaults.headers.common['Authorization'] = token
}*/

new Vue({
  render: h => h(App),
}).$mount('#app')
