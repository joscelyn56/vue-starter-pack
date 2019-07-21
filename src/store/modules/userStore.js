require('babel-polyfill')

const users = {
  namespaced: true,
  state: {
    users: []
  },
  getters: {
    users: state => state.users,
    count: state => state.users.length
  },
  mutations: {
    users (state, payload) {
      state.users = payload
      localStorage.setItem('users', JSON.stringify(state.users))
    },
    addUser (state, payload) {
      let users = state.users
      state.users = [...users, payload]
      localStorage.setItem('users', JSON.stringify(state.users))
    },
    delete (state, payload) {
      state.users = state.users.filter(user => user.userId !== parseInt(payload))
      localStorage.setItem('users', JSON.stringify(state.users))
    },
    update (state, payload) {
      let users = state.users.map(user => {
        if (user.id === payload.id) {
          user = payload
        }
        return user
      })
      state.users = users
      localStorage.setItem('users', JSON.stringify(state.users))
    }
  },
  actions: {
    async addUsers ({ commit }, users) {
      commit('users', users)
    },
    async addUser ({ commit }, user) {
      commit('addUser', user)
    },
    async deleteUser ({ commit }, id) {
      commit('delete', id)
    },
    async updateUser ({ commit }, user) {
      commit('update', user)
    }
  }
}

export default users
