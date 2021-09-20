<template>
  <v-card
    :max-width="sideSize"
    height="100%"
    tile
  >
    <v-card-title class="blue-grey darken-1">
      <span class="text-h6 white--text">{{ sidebarTypeTitle }}</span>
    </v-card-title>
    <v-list>
      <v-list-item-group
        v-for="(member, index) in options"
        :key="index"
        v-model="selectedItem"
        color="primary"
      >
        <v-list-item
          v-for="user in selectedList"
          :key="`${user.id}-${index}`"
        >
          <v-list-item-title class="d-flex align-items-center">
            <div class="online-user mr-2"></div>
            {{ member[user.id].username}}
          </v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <v-card-text class="fixed-bottom index">
      <div class="w-50 text-h6 primary--text my-4 ml-2">
        {{ "Online: " + onlineUser }}
      </div>
    </v-card-text>
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

  @Prop(Number)
  readonly onlineUser: number | undefined

  @Prop(Array)
  readonly options: Array<string> | undefined

  @Prop(Array)
  readonly selectedList: Array<string> | undefined

  // usersMapping() {
  //   return this.options?.map(member => {
  //     return this.selectedList?.find(user => {

  //     })
  //   })
  // }
}
</script>

<style lang="sass" scoped>
.index
  z-index: 0
.online-user
  width: 10px
  height: 10px
  border-radius: 50%
  background: #00C853

</style>