import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'

Vue.use(Vuex)

const state = {}
const actions = {}
const mutations = {}
const getters = {}

const store = new Vuex.Store({
  modules: {
    home
  },
  state,
  actions,
  mutations,
  getters
})

export default store
