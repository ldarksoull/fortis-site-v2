import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import VueFullpage from 'fullpage-vue'
import 'fullpage-vue/src/fullpage.css'
import 'animate.css'
import router from './router'

Vue.use(VueRouter)
Vue.use(VueFullpage)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

