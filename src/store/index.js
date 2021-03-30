import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const state = {
  empresas: [],
  empresaSelecionada: undefined
}

import actions from './actions'
import getters from './getters'
import mutations from './mutations'

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

