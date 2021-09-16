import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

import { Module, createStore } from 'vuex-smart-module'
import module from './modules'
import RootState from './modules/state'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const vuexLocal = new VuexPersistence<RootState>({
  storage: window.localStorage
})

const root = new Module({
  modules: {
    module
  }
})

const store = createStore(
  root,
  {
    plugins: [vuexLocal.plugin],
    strict: debug
  }
)

export default store