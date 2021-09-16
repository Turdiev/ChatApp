import { Module } from 'vuex-smart-module'
import RootGetters from './getters'
import RootState from './state'
import RootActions from './actions'
import RootMutations from './mutations'

const module = new Module({
    state: RootState,
    getters: RootGetters,
    actions: RootActions,
    mutations:RootMutations
})

export default module

