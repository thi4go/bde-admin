<template>
    <q-layout ref="layout" view="lhh Lpr lFf" :right-breakpoint="1100">

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
    </q-layout>
</template>


<script>

export default {

}

</script>
