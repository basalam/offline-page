import { createStore } from 'vuex'

export default createStore({
  state: () => ({
    isOnline: true
  }),

  getters: {
    isOnline(state) {
      return state.isOnline
    }
  },

  mutations: {
    setOnlineStatus(state, status) {
      state.isOnline = status
    }
  },

  actions: {
    setupOfflineMode(vuexContext, targetPath) {
      console.log(targetPath)
      vuexContext.commit('setOnlineStatus', false)
      if (history.pushState) history.pushState(/*data*/ null, /*title*/ 'Connection Error', targetPath)
    }
  }
})