import Vue from 'vue'
import Vuex from 'vuex'
import page from './modules/page'
import user from './modules/user'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    page,
    user
  },
  plugins : [createPersistedState({
    paths : ["user"],
    storage : window.sessionStorage
  })]
})
