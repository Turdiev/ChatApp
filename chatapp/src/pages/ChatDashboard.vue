<template>
  <b-container
    fluid
    class="ld-over"
  >
    <div class="ld ld-ring ld-spin" />
    <b-row>
      <b-col cols="8">
        <b-row>
          <b-col id="chat-content">
            <MessageList />
          </b-col>
        </b-row>
        <b-row>
          <b-col>
            <MessageForm />
          </b-col>
        </b-row>
      </b-col>

      <b-col cols="2">
        <SideBar
          sidebar-type-title="Members"
          side-size="500"
        />
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
  onlineUserCount = 0

  get username () {
    return this.$store.state.module.user.username
  }

  get pusher () {
    return this.$store.state.module.pusher
  }

  mounted () {

    const channel = this.pusher.subscribe('presence-channel')
    console.log('Channel', channel)
    
    channel.bind('pusher:subscription_succeeded', (members: any) => {
      console.log('Members', members.count)
      this.onlineUserCount = members.count
    })

    channel.bind('pusher:member_added', (member: any) => {
      console.log('count', member)
      // setOnlineUsersCount(channel.members.count)
    })
  }
}
</script>

<style>

</style>
