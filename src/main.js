// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Api from './api/Api'
import Index from '@/components/Layout/Index'
import { Circle8 } from 'vue-loading-spinner'
import router from './router'
import store from './store'
import VeeValidate from 'vee-validate'

Vue.config.productionTip = false

Vue.prototype.$api = Api

Vue.component('layout', Index)
Vue.component('loading', Circle8)

Vue.use(VeeValidate, {
  fieldsBagName: 'formFields'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
