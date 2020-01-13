import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    userInfo:{userName: 123}
  },
  mutations: {
    changeUser(state, item){
      state.userInfo = item
    }
  },
  actions: {
    changeUserAction(state, item){
      state.commit('changeUser', item)
    }
  },
  modules: {
  }
})
