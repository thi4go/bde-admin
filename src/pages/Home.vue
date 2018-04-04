<template>
  <q-page>
  <div background-color="black" >
      <q-card inline >

        <q-card-title color="black">
          Estatísticas BDE
          <span slot="subtitle">degrau a degrau, mil grau.</span>
        </q-card-title>
        <q-card-separator />

        <q-card-media style="width: 50%" >
          <img align="center" src="~assets/003.svg">
        </q-card-media>


        <q-card-separator />
<!--
        <q-card-actions align="around">
          <q-btn @click="favorited = !favorited" flat round small :color="favorited? 'grey' : 'red'"><q-icon name="favorite" /></q-btn>
          <q-btn flat round small color="faded"><q-icon name="bookmark" /></q-btn>
          <q-btn flat round small color="primary"><q-icon name="share" /></q-btn>
        </q-card-actions> -->

      </q-card>
  </div>
  </q-page>

</template>

<script>

import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Home',

  computed: {
    ...mapGetters([
      'battles',
      'users',
      'session'
    ])
  },

  mounted() {
    console.log("OEKTEOK")
    console.log(this.battles)

  },

  methods: {

  }
}
</script>
