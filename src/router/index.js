import Vue from 'vue'
import VueRouter from 'vue-router'

const Dashboard = () => import('@/components/Dashboard')

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: Dashboard
    }
  ]
})
