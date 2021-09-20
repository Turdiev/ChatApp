<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <span class="mr-2">Chat App</span>
      </div>

      <v-spacer></v-spacer>
      
      <div class="d-flex align-center">
        <span class="mr-2">{{ "@" + username }}</span>
      </div>
      <v-btn
        text
        @click="onLogout"
      >
        Logout
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view name="contentView"/>
    </v-main>
  </v-app>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'

const name = 'MainLayouts'
@Component
export default class MainLayouts extends Vue {
  name: string = name

  get username() {
    return this.$store.state.module.user.username
  }

  async onLogout() {
    const pusher = await this.$store.dispatch('module/logInPusher', this.username)

    pusher.unsubscribe('presence-channel')
    this.$router.push('/')
  }
}
</script>

<style>
</style>