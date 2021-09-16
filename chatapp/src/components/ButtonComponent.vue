<template>
  <v-btn
    :type="type"
    :loading="loading"
    :color="color"
    :text-color="color ? '' : 'black'"
    :disabled="disabled"
    @click="$emit('click')"
  >
    {{ label }}
  </v-btn>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

const name = 'ButtonComponent'

@Component
export default class ButtonComponent extends Vue {
  name: string = name

  @Prop(String)
  readonly type:string | undefined

  @Prop(String)
  readonly label: string | undefined

  @Prop(Boolean)
  readonly loading: boolean | undefined

  @Prop(String)
  readonly color: string | undefined

  @Prop(Boolean)
  readonly disabled: boolean | undefined
}
</script>