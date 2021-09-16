<template>
  <v-app>
    <v-main>
      <div class="login">
        <div class="login__image">
          <v-img
            class="login__image_size"
            src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
          />
        </div>
        <div class="login__form-wrapper">
          <div class="login__form">
            <LoginForm/>
          </div>
        </div>
      </div>
    </v-main>
  </v-app>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import LoginForm from '@/components/FormComponent/LoginForm.vue'

  const name = 'Login'
  @Component({
    components: {
      LoginForm
    }
  })
  export default class Login extends Vue {
    name: string =  name
  }
</script>

<style lang="sass" scoped>
.login
  display: flex
  height: 100vh
  &__image
    width: $half-width
    &_size
      width: $full-width
      height: $full-height
  &__form-wrapper
    width: $half-width
  &__form
    margin: $half-height auto
    padding: 0px 40px

@media screen and (max-width: 767px)
  .login
    flex-direction: column
    &__image
      height: $half-height
      width: $full-width
    &__form-wrapper
      height: $half-height
      width: $full-width
    &__form
      margin: 10% auto
      padding: 35px 20%

@media screen and (min-width: 768px) and (max-width: 1365px)

@media screen and (min-width: 1366px)
  .login__form
    margin: 35% auto
    padding: 0px 40px
  
</style>