<template>
  <q-layout view="hHr Lpr lFf" >
    <q-layout-header>
      <q-toolbar color="black">
        <q-btn v-if="$store.getters.session.user.userLevel == 4" flat @click="leftDrawerOpen = !leftDrawerOpen" color="pink-7">
          <q-icon name="menu" />
        </q-btn>

        <q-btn flat v-if="$store.getters.backButton" @click="$router.go(-1)" color="pink-7">
          <q-icon name="fa-arrow-left" />
        </q-btn>

        <q-toolbar-title glossy="true" align="center" :style="$store.getters.backButton ? 'padding-left: 1px' : 'padding-left:50px'" >
            BDE
        </q-toolbar-title>

        <q-btn-dropdown icon="fa-ellipsis-v">
          <q-list link>
            <q-item>
              <q-item-main>
                <q-btn size="md" flat icon="fa-lock" label="Senha" style="font-size: 11px"> </q-btn>
              </q-item-main>
            </q-item>
            <q-item-separator />
            <q-item>
              <q-item-main>
                <q-btn size="md" flat icon="fa-reply" label="Sair" ></q-btn>
              </q-item-main>
            </q-item>

          </q-list>
        </q-btn-dropdown>

      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      content-class="bg-grey-2"
    >
      <div>
        <div style="padding-top: 2em">
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


          </q-list>
        </div>
      </div>

    </q-layout-drawer>


    <q-page-container style="margin: 20px">
      <transition
        appear
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
      >
        <router-view />
      </transition>
    </q-page-container>


    <q-layout-footer>
    <!-- Navigation for iOS theme -->
      <q-tabs align="justify" position="top" color="black" width="4%" >
        <q-route-tab @select="changeFocus(1)" :color="selectedTab == 1 ? 'pink-7' : 'pink-3'" slot="title" icon="home" to="/home" replace  />
        <q-route-tab @select="changeFocus(2)" :color="selectedTab == 2 ? 'pink-7' : 'pink-3'" slot="title" icon="mic" to="/ranking" replace  />
        <q-route-tab @select="changeFocus(3)" :color="selectedTab == 3 ? 'pink-7' : 'pink-3'" slot="title" icon="linked_camera" to="/media" replace  />
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

    async logout () {
      await this.$store.dispatch('SET_SESSION', null)
      this.$router.go('/startup')
    }
  }
}
</script>

<style>
</style>
