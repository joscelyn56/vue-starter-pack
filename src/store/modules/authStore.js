require('babel-polyfill')

const auth = {
  namespaced: true,
  state: {
    accessToken: localStorage.getItem('access_token'),
    authenticated: false,
    currentUser: JSON.parse(localStorage.getItem('user')),
    backTo: {
      name: 'Dashboard',
      url: '/dashboard'
    }
  },
  getters: {
    token: state => state.accessToken,
    isAuthenticated: state => state.authenticated,
    user: state => (state.currentUser === null) ? {} : state.currentUser,
    name: state => (state.currentUser === null) ? '' : state.currentUser.first_name + ' ' + state.currentUser.last_name,
    back: state => state.backTo
  },
  mutations: {
    storeToken (state, payload) {
      localStorage.setItem('access_token', payload.accessToken)
      localStorage.setItem('user', JSON.stringify(payload.admin))
      state.authenticated = true
    },
    clearToken (state) {
      state.access_token = ''
      state.authenticated = false
      state.currentUser = ''
    },
    setBackTo (state, payload) {
      state.backTo = payload
    },
    update (state, payload) {
      localStorage.setItem('user', JSON.stringify(payload))
    }
  },
  actions: {
    async login ({ commit }, token) {
      commit('storeToken', token)
    },
    async logout ({ commit }) {
      localStorage.removeItem('access_token')
      localStorage.removeItem('user')
      localStorage.removeItem('business')
      localStorage.removeItem('admins')
      localStorage.removeItem('categories')
      localStorage.removeItem('descriptions')
      localStorage.removeItem('hotlines')
      localStorage.removeItem('initiatives')
      localStorage.removeItem('interests')
      localStorage.removeItem('companies')
      localStorage.removeItem('users')
      localStorage.removeItem('utilities')
      localStorage.removeItem('reports')
      commit('clearToken')
    },
    async backTo ({ commit }, url) {
      commit('setBackTo', url)
    },
    async update ({ commit }, admin) {
      commit('update', admin)
    }
  }
}

export default auth
