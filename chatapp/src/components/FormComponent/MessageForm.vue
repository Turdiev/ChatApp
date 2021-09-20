<template>
  <div class="message-form ld-over">
    <small class="text-muted">@{{ username }}</small>
    <form
      class="ld-over"
      :class="{ running: getSending }"
      @submit.prevent="onSubmit"
    >
      <div class="ld ld-ring ld-spin" />
      <v-alert
        v-show="!hasError"
        dense
        outlined
        type="error"
      >
        {{ getErrorMessage }}
      </v-alert>
      <v-text-field
        id="message-input"
        v-model="message"
        type="text"
        placeholder="Enter Message"
        autocomplete="off"
        required
      />
      <div class="clearfix">
        <ButtonComponent
          type="submit"
          label="Отправить"
          class="float-right"
          color="primary"
        />
      </div>
    </form>
  </div>
</template>
<script lang='ts'>
import API_REQUEST from '@/api'
import { Component, Vue } from 'vue-property-decorator'
import ButtonComponent from '../ButtonComponent.vue'

const name = 'MessageForm'
@Component({
  components: {
    ButtonComponent
  }
})
export default class MessageForm extends Vue {
  name: string = name
  message: string | number = ''
  messages: string[] = []

  get username(): string {
    return this.$store.state.module.user.username
  }

  get getSending(): boolean {
    return this.$store.state.module.sending
  }

  get getErrorMessage(): string {
    return this.$store.state.module.error
  }

  get hasError (): string {
    return this.$store.getters['module/hasError']
  }

  async onSubmit() {
    const message = await API_REQUEST('sendChatMessage', {
      message: this.message,
      username: this.username
    })
    this.message = ''
  }
}
</script>

<style lang="sass" scoped>
.message-form
  width: $full-width
</style>