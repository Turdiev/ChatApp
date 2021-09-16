import Pusher from 'pusher-js'
import { Actions } from 'vuex-smart-module'
import RootState from './state'
import RootGetters from './getters'
import RootMutations from './mutations'

export default class RootActions extends Actions<RootState, RootGetters, RootMutations, RootActions> {
  logInPusher(username: string) {
    const pusher = new Pusher('ef3604bb3237a79b53c9', {
      cluster: 'ap3',
      authEndpoint: '/pusher/auth',
      auth: { params: { username } }
    })
    

    try {
      this.commit('setPusherAuth', pusher)
      console.log('PUSHER')
      
      return pusher
    } catch (err) {
      console.error(err)
      return err
    } 
  }

}