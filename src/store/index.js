import Vue from 'vue'
import Vuex from 'vuex'
import AuthStore from './modules/authStore'
import userStore from './modules/userStore'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    auth: AuthStore,
    users: userStore
  }
})

export default store
