import Vue from 'vue'
import Vuex from 'vuex'
import * as cart from './modules/cart'
import * as boots from './modules/boots'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: { cart, boots }
})
