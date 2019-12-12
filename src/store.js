import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    path: '/',
  },
  mutations: {
    getPath: (state, payload) => {
      state.path = payload;
    }
  },
  getters:{
    path:state=>{
      return state.path
    },
  },
  actions: {
    getPath:({commit},payload)=>{
      commit('getPath',payload);
    }
  },
  // plugins: [createPersistedState()],
})
