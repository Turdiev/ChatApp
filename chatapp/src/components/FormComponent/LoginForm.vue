<template>
  <div>
    <form>
      <v-text-field
        v-model="login"
        :error-messages="errorLogin"
        label="Login"
        required
        @input="$v.login.$touch()"
        @blur="$v.login.$touch()"
      />
      <v-text-field
        v-model="password"
        :error-messages="errorPassword"
        label="Password"
        required
        @input="$v.password.$touch()"
        @blur="$v.password.$touch()"
      />

      <ButtonComponent
        label="Войти"
        color="primary"
        class="w-100 mt-2"
        @click="onSubmit"
      />
    </form>
    <div
      v-if="responseError"    
    >
      <v-alert
        dense
        outlined
        type="error"
      >
        <strong>Ошибка в авторизации !</strong> Попробуйте позже
      </v-alert>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { required, minLength } from 'vuelidate/lib/validators'
import ButtonComponent from '../ButtonComponent.vue'

const name = 'LoginForm'

@Component({
  components: {
    ButtonComponent
  },
  validations: {
    login: {
      required
    },
    password: {
      required,
      minLength: minLength(6)
    }
  }
})
export default class LoginForm extends Vue {
  name: string = name

  login: string | number = ''
  password: string | number = ''
  responseError = false

  get errorLogin(): string[] {
    let messageError = []
    if (!this.$v.login.$dirty) return messageError = []
    if (!this.$v.login.required) {
      messageError.push('Required')
    }
    return messageError
  }

  get errorPassword(): string[] {
    let messageError = []

    if (!this.$v.password.$dirty) return messageError = []
    if (!this.$v.password.required) {
      messageError.push('Required')
    } else if (!this.$v.password.minLength) {
      messageError.push('Minimum 6 characters')
    }
    return messageError
  }

  async onSubmit() {
    if (this.$v.$invalid) {
      this.$v.$touch()
      return
    }

    const res = await this.$store.dispatch('module/logInPusher', this.login)
    
    if (res) {
      this.$store.commit('module/setUser', { username: this.login})
      this.$router.push({ path: '/chat' })
    } else {
      this.responseError = true
    }
  }
}
</script>