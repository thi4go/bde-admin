<template>
  <q-layout view="hHr Lpr lFf" >
    <q-layout-header>
      <q-toolbar slot="header" color="black">
      <q-btn flat @click="$refs.layout.toggleLeft()" color="pink-7">
        <q-icon name="menu" />
      </q-btn>
      <q-toolbar-title glossy="true" align="center">
          BDE
          <q-icon name="ion-connection-bars" />
      </q-toolbar-title>
      <!-- <q-btn flat @click="$refs.layout.toggleRight()">
        <q-icon name="menu" />
      </q-btn> -->
    </q-toolbar>
      <q-tabs slot="navigation">
        <q-route-tab slot="title" icon="view_quilt" to="/test-layout/about" replace hide="icon" label="About" />
        <q-route-tab slot="title" icon="view_day" to="/test-layout/toolbar" replace hide="icon" label="Toolbar" />
        <q-route-tab slot="title" icon="view_day" to="/test-layout/tabs" replace label="Tabs" />
        <q-route-tab slot="title" icon="input" to="/test-layout/drawer" replace label="Drawer" />
      </q-tabs>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      content-class="bg-grey-2"
    >
      <q-list
        no-border
        link
        inset-delimiter
      >
        <q-list-header>Essential Links</q-list-header>
        <q-item @click.native="openURL('http://quasar-framework.org')">
          <q-item-side icon="school" />
          <q-item-main label="Docs" sublabel="quasar-framework.org" />
        </q-item>
        <q-item @click.native="openURL('https://github.com/quasarframework/')">
          <q-item-side icon="code" />
          <q-item-main label="GitHub" sublabel="github.com/quasarframework" />
        </q-item>
        <q-item @click.native="openURL('http://forum.quasar-framework.org')">
          <q-item-side icon="record_voice_over" />
          <q-item-main label="Forum" sublabel="forum.quasar-framework.org" />
        </q-item>
        <q-item @click.native="openURL('https://gitter.im/quasarframework/Lobby')">
          <q-item-side icon="chat" />
          <q-item-main label="Gitter Channel" sublabel="Quasar Lobby" />
        </q-item>
        <q-item @click.native="openURL('https://twitter.com/quasarframework')">
          <q-item-side icon="rss feed" />
          <q-item-main label="Twitter" sublabel="@quasarframework" />
        </q-item>
      </q-list>
    </q-layout-drawer>



    <q-page-container>
      <router-view />
    </q-page-container>
    <q-layout-footer>
    <!-- Navigation for iOS theme -->
      <q-tabs align="justify" slot="footer" position="top" color="black" width="4%" >
        <q-route-tab @select="changeFocus(1)" :color="selectedTab == 1 ? 'pink-7' : 'pink-3'" slot="title" icon="home" to="/" replace  />
        <q-route-tab @select="changeFocus(2)" :color="selectedTab == 2 ? 'pink-7' : 'pink-3'" slot="title" icon="fa-microphone" to="/" replace  />
        <q-route-tab @select="changeFocus(3)" :color="selectedTab == 3 ? 'pink-7' : 'pink-3'" slot="title" icon="linked_camera" to="/" replace  />
        <q-route-tab @select="changeFocus(4)" :color="selectedTab == 4 ? 'pink-7' : 'pink-3'" slot="title" icon="person" to="/" replace  />
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
    openURL
  }
}
</script>

<style>
</style>
