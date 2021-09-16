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
          v-for="(message, index) in getMessage"
          :key="index"
          class="message"
        >
          <div class="clearfix">
            <h4
              class="message__title"
            >
              {{ message.name }}
            </h4>
            <small class="text-muted float-right">@{{ message.username }}</small>
          </div>
          <p class="message__text">
            {{ message.text }}
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
import { Component, Vue } from 'vue-property-decorator'

const name = 'MessageList'
@Component
export default class MessageList extends Vue {
  name: string = name

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
  border: 1px solid lightblue
  border-radius: 4px
  padding: 10px
  margin-bottom: 15px

  &__title 
    font-size: 1rem
    display:inline

  &__text 
    color: gray
    margin-bottom: 0

</style>