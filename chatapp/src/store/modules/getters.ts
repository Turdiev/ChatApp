import { Getters } from 'vuex-smart-module'
import RootState from './state'

export default class RootGetters extends Getters<RootState> {
  get hasError(): boolean {
    return this.state.error ? true : false
  }
}