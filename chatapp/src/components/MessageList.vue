<template>
  <div class="message-form">
    <v-card
      class="overflow-y-auto"
      max-height="400"
    >
      <v-card-title>
        <span>Message</span>
      </v-card-title>

      <v-card-text>
        <div
          v-for="(message, index) in messages"
          :key="index"
          class="message"
          :class="username === message.username ? 'color' : ''"
        >
          <div class="clearfix">
            <h4
              class="message__title"
            >
              {{ username === message.username ? 'Me' : message.username }}
            </h4>
            <small class="text-muted float-right">@{{ message.username }}</small>
          </div>
          <p class="message__text">
            {{ message.message }}
          </p>
          <div class="clearfix">
            <small class="text-muted float-right">{{ message.date }}</small>
          </div>
        </div>
      </v-card-text>
    </v-card>
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator'

const name = 'MessageList'
@Component
export default class MessageList extends Vue {
  name: string = name

  @Prop(Array)
  readonly messages: Array<string> | undefined

  get username () {
    return this.$store.state.module.user.username
  }

  get getMessage(): string[] {
    return this.$store.state.module.messages
  }
}
</script>

<style lang="sass" scoped>
.message-form
  width: $full-width
  margin-bottom: 15px
  padding-right: 15px

.message 
  border: 1px solid #0091EA
  border-radius: 4px
  padding: 10px
  margin-bottom: 15px

  &__title 
    font-size: 1rem
    display:inline

  &__text 
    color: gray
    margin-bottom: 0

.color
  border: 1px solid #00E676

</style>