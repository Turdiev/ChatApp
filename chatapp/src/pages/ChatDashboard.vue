<template>
  <b-container
    fluid
    class="ld-over"
    :class="{ running: loading }"
  >
    <div class="ld lds-ring ld-spin" />
    <b-row>
      <b-col cols="4">
        <SideBar
          sidebar-type-title="Members"
          side-size="300"
          :online-user="onlineUserCount"
          :options="allMembers"
          :selected-list="allUsersOnline"
        />
      </b-col>
      <b-col cols="8">
        <b-row>
          <b-col>
            <MessageList
              :messages="messages"
            />
          </b-col>
        </b-row>
        <b-row class="mt-0">
          <b-col>
            <MessageForm />
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import SideBar from '../components/SideBarComponent.vue'
import MessageForm from '../components/FormComponent/MessageForm.vue'
import MessageList from '../components/MessageList.vue'

const name = 'ChatDashboard'

@Component({
  components: {
    SideBar,
    MessageForm,
    MessageList
  }
})
export default class ChatDashboard extends Vue {
  name: string = name
  onlineUserCount: number | undefined = 0
  allUsersOnline: string[] = []
  allMembers: string[] = []
  messages: string[] = []
  loading = false

  get username () {
    return this.$store.state.module.user.username
  }

  get pusher () {
    return this.$store.getters['module/getPusher']
  }

  async mounted () {
    this.loading = true

    const pusher = await this.$store.dispatch('module/logInPusher', this.username)

    const channel = pusher.subscribe('presence-channel')
    
    channel.bind('pusher:subscription_succeeded', (members: any) => {
      this.onlineUserCount = members.count
      this.allMembers = [members.members]
      this.allUsersOnline.push(members.me)
    })

    channel.bind('pusher:member_added', (member: any) => {
      this.onlineUserCount = channel.members.count
      this.allUsersOnline.push(member)
    })

    channel.bind('pusher:member_removed', (member: any) => {
      this.onlineUserCount = channel.members.count
      this.allUsersOnline = this.allUsersOnline.filter(user => {
        if (member.info.username !== user.info.username) {
          return user
        }
      })
    })

    channel.bind('chat-update',  (data: any) => {
      this.messages.push(data)
    })
  }
}
</script>

<style>

</style>
