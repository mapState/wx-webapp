import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    path: '/',
    addressId:''
  },
  mutations: {
    getPath: (state, payload) => {
      state.path = payload;
    },
    getAddressId: (state, payload) => {
      state.addressId = payload;
    },
  },
  getters:{
    path:state=>{
      return state.path
    },
    addressId:state=>{
      return state.addressId
    },
  },
  actions: {
    getPath:({commit},payload)=>{
      commit('getPath',payload);
    },
    getAddressId:({commit},payload)=>{
      commit('getAddressId',payload);
    }
  },
  // plugins: [createPersistedState()],
})
