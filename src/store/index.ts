import { createStore } from 'vuex'

export default createStore({
  state: {
    token: false
  },
  mutations: {
    setToken(state) {
      state.token = true
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
