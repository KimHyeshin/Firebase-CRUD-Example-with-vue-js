import Vue from 'vue'
import bootstrapvue from 'bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.use(bootstrapvue)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
