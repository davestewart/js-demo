import Vue from 'vue'
import Vuex from 'vuex'

// imports

// store
Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    foo: 1
  },

  mutations: {
    foo (state, value) {
      state.foo = value
    }
  },

  modules: {},
})
