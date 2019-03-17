import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import svgIcon from '../packages/index'
import '@/icons'

Vue.config.productionTip = false
Vue.use(svgIcon)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
