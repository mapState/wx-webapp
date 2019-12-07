import Vue from 'vue'
import Vuex from 'vuex'
// import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bookIds: [],//赠送书籍id
    addrId:'',//地址id，
    isLogin:false
  },
  mutations: {
    getBooks: (state, payload) => {
      state.bookIds = payload;
    },
    getAddrid: (state, payload) => {
      state.addrId = payload;
    },
    getLog:(state, payload) => {
      state.isLogin = payload;
    },
  },
  getters:{
    bookIds:state=>{
      return state.bookIds
    },
    addrId:state=>{
      return state.addrId
    },
    isLogin:state=>{
      return state.isLogin
    },
  },
  actions: {
    getBooks:({commit},payload)=>{
      commit('getBooks',payload);
    },
    getLog:({commit},payload)=>{
      commit('getLog',payload);
    },
    getAddrid:({commit},payload)=>{
      commit('getAddrid',payload);
    }
  },
  // plugins: [createPersistedState()],
})
