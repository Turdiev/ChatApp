<template>
  <v-card
    :max-width="sideSize"
    tile
  >
    <v-card-title class="blue-grey darken-1">
      <span class="text-h6 white--text">{{ sidebarTypeTitle }}</span>
    </v-card-title>
    <v-list>
      <v-list-item-group
        v-model="selectedItem"
        color="primary"
      >
        <v-list-item>
          <v-list-item-title>
            Channels
          </v-list-item-title>
        </v-list-item>
        <v-list-item>
          <v-list-item-title>
            Channels-chat
          </v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'vue-property-decorator'

const name = 'SideBar'
@Component
export default class SideBar extends Vue {
  name: string = name
  selectedItem: string | number = ''
  
  @Prop(String)
  readonly sidebarTypeTitle: string | undefined

  @Prop(Array)
  readonly listOfItems: Array<string> | undefined

  @Prop(String)
  readonly sideSize: string | undefined
}
</script>

<style>
</style>