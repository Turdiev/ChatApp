import { Mutations } from 'vuex-smart-module'
import RootState from './state'

export default class RootMutations extends Mutations<RootState> {
  setUser (user: any) {
    this.state.user = user
  }
  setPusherAuth (value: any) {
    this.state.pusher = value
  }
}