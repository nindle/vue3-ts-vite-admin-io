import { createStore } from 'vuex'

export default createStore({
  state: {
    token: false
  },
  mutations: {
    setToken(state) {
      state.token = true
      window.localStorage.setItem('token', 'true')
    },
    removeToken(state) {
      state.token = false
    }
  },
  actions: {
  },
  modules: {
  }
})
