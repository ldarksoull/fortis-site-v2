import Vue from 'vue'
import VueRouter from 'vue-router'
import mainpage from '../pages/mainpage.vue'
import donate from '../pages/donate.vue'
import lk from '../pages/lk.vue'
import policy from '../pages/policy.vue'
import contract from '../pages/contract.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: mainpage
  },
  {
    path: '/donate',
    name: 'Donate',
    component: donate,
  },
  {
    path: '/lk',
    name: 'lk',
    component: lk,
  },
  {
    path: '/policy',
    name: 'policy',
    component: policy,
  },
  {
    path: '/contract',
    name: 'contract',
    component: contract,
  },
]


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
