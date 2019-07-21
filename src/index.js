import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import router from './router'
import store from './store/index'

import Default from './components/layouts/Default.vue'

import Axios from 'axios'

Vue.use(VueRouter)

Vue.component('default-layout', Default)

Vue.prototype.$BASE_URL = ''
Vue.prototype.$http = Axios

Vue.prototype.$http.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

const accessToken = localStorage.getItem('access_token')
if (accessToken) {
  Vue.prototype.$http.defaults.headers.common['x-access-token'] = accessToken
}

Vue.config.productionTip = false

Vue.filter('capitalize', function (value) {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
})

Vue.filter('truncate', function (value, length) {
  if (!value) return ''
  value = value.toString()
  return (value.length >= length) ? value.substring(0, length) + '...' : value
})

Vue.filter('capitalizeAll', function (value) {
  if (!value) return ''
  value = value.toString()
  let text = value.split(' ')
  let newText = ''
  for (let i = 0; i < text.length; i++) {
    newText += text[i].charAt(0).toUpperCase() + text[i].slice(1).toLowerCase() + ' '
  }
  return newText.trim()
})

Vue.filter('removeHash', function (value) {
  if (!value) return ''
  value = value.toString()
  let text = value.split('-')
  let newText = ''
  for (let i = 0; i < text.length; i++) {
    newText += text[i].charAt(0).toUpperCase() + text[i].slice(1).toLowerCase() + ' '
  }
  return newText.trim()
})

/* eslint-disable-next-line no-new */
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
