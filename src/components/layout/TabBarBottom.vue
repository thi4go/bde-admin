<template>
  <q-layout ref="layout" view="lhh Lpr lFf" :right-breakpoint="1100">

    <!-- <q-toolbar slot="footer" color="black"> -->
    <!-- <q-toolbar-title>
    #BDE
  </q-toolbar-title> -->
  <q-tabs align="justify" slot="footer" position="top" color="black" width="4%" >
    <q-route-tab @select="changeFocus(1)" :color="selectedTab == 1 ? 'pink-7' : 'pink-3'" slot="title" icon="home" to="/" replace  />
    <q-route-tab @select="changeFocus(2)" :color="selectedTab == 2 ? 'pink-7' : 'pink-3'" slot="title" icon="fa-microphone" to="/ranking" replace  />
    <q-route-tab @select="changeFocus(4)" :color="selectedTab == 4 ? 'pink-7' : 'pink-3'" slot="title" icon="person" to="/profile" replace  />
  </q-tabs>
  <!-- </q-toolbar> -->
</q-layout>

</template>


<script>

export default {

  data() {
    return {
      selectedTab: 1
    }
  },

  methods: {
    changeFocus(tab) {
      this.selectedTab = tab
    }
  }
}

</script>
