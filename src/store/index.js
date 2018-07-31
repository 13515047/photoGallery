import Vue from 'vue'
import Vuex from 'vuex'
import about from './modules/about'

Vue.use(Vuex)

const state = {}
const actions = {}
const mutations = {}
const getters = {}

const store = new Vuex.Store({
  modules: {
    about
  },
  state,
  actions,
  mutations,
  getters
})

export default store
