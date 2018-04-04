<template>
  <q-layout view="hHr Lpr lFf" >
    <q-layout-header>
      <q-toolbar color="black">
        <q-btn flat @click="leftDrawerOpen = !leftDrawerOpen" color="pink-7">
          <q-icon name="menu" />
        </q-btn>
        <q-toolbar-title glossy="true" align="center" style="padding-right: 50px">
            BDE
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      content-class="bg-grey-2"
    >
      <div style="background: no-repeat top/100% url(https://images8.alphacoders.com/362/362827.jpg); background-size: 100%">
        <div style="padding-top: 13em">
          <q-list no-border link inset-separator>
            <q-list-header>#BDE - Gestão</q-list-header>

            <!-- Home Screen -->
            <q-item item to="/battle-management">
              <q-item-side icon="home" />
              <q-item-main label="Batalhas" />
            </q-item>

            <q-item item to="/user-management">
              <q-item-side icon="trending up" />
              <q-item-main label="Usuários"/>
            </q-item>


            <q-btn @click="logout" style="margin-top: 100px">
              <q-icon name="fa-sign-out" />
              <label>Sair</label>
            </q-btn>

          </q-list>
        </div>
      </div>

    </q-layout-drawer>


    <q-page-container style="margin: 20px">
      <router-view />
    </q-page-container>


    <q-layout-footer>
    <!-- Navigation for iOS theme -->
      <q-tabs align="justify" position="top" color="black" width="4%" >
        <q-route-tab @select="changeFocus(1)" :color="selectedTab == 1 ? 'pink-7' : 'pink-3'" slot="title" icon="home" to="/home" replace  />
        <q-route-tab @select="changeFocus(2)" :color="selectedTab == 2 ? 'pink-7' : 'pink-3'" slot="title" icon="mic" to="/battle" replace  />
        <q-route-tab @select="changeFocus(3)" :color="selectedTab == 3 ? 'pink-7' : 'pink-3'" slot="title" icon="linked_camera" to="/" replace  />
        <q-route-tab @select="changeFocus(4)" :color="selectedTab == 4 ? 'pink-7' : 'pink-3'" slot="title" icon="person" to="/profile" replace  />
      </q-tabs>
    </q-layout-footer>
  </q-layout>
</template>

<script>
import { openURL } from 'quasar'

export default {

  data () {
    return {
      leftDrawerOpen: false,
      selectedTab: 1
    }
  },
  methods: {
    openURL,

    changeFocus(tab) {
      this.selectedTab = tab
    },

    logout () {
      this.$store.dispatch('SET_SESSION', null)
      this.$router.go('/startup')
    }
  }
}
</script>

<style>
</style>
