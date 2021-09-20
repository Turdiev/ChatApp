export default class RootState {
  loading = false
  sending = false
  error = 'Relax! This is just a drill error message'
  user = undefined
  reconnect = false
  activeRoom = null
  users = []
  messages = []
}