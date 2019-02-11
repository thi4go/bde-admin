<template>
  <q-page>
  <div class="container items-center">


    <q-card class="inline">
      <q-card-title>
        <div class="row justify-between">
          <div>
            <b>MC</b> &nbsp&nbsp{{ user.name }}
          </div>

          <div slot="right" >
            <sub>perfil público</sub>
          </div>
        </div>
      </q-card-title>
    </q-card>

    <div class="col col-8 bot">
      <q-tabs color="white" position="top" inverted >
        <!-- Tabs - notice slot="title" -->
        <q-tab default slot="title" name="tab-1" icon="account_box" color="black" />
        <q-tab slot="title" name="tab-2" icon="mic" color="black" />
        <q-tab slot="title" name="tab-3" icon="fingerprint" color="black" />
        <!-- Targets -->
        <q-tab-pane name="tab-1">
          <br />
          <q-input
            type="textarea"
            stack-label="sobre"
            v-model="user.biography"
            clearable
            :max-height="100"
            placeholder="MC contando um pouco da trajetória de artista dele"
            color="dark"
            rows="5"
          />
          <br /><br />

        </q-tab-pane>

        <q-tab-pane name="tab-2">
        </q-tab-pane>

        <q-tab-pane name="tab-3">
          <br />
          <div class="column">
            <div class="row justify-around">
              <q-icon name="fab fa-instagram" size="2em"></q-icon>
              <q-input type="text" stack-label="instagram" v-model="user.instagram" color="dark"></q-input>
            </div> <br />
            <div class="row justify-around">
              <q-icon name="fab fa-facebook" size="2em"></q-icon>
              <q-input type="text" stack-label="facebook" v-model="user.facebook" color="dark"></q-input>
            </div> <br />
            <div class="row justify-around">
              <q-icon name="fab fa-youtube" size="2em"></q-icon>
              <q-input type="text" stack-label="youtube" v-model="user.youtube" color="dark"></q-input>
            </div> <br />

          </div>
        </q-tab-pane>
      </q-tabs>
    </div>
  </div>
  </q-page>

</template>


<script>
import api from '../api'
export default {

  data () {
    return {
      user: null
    }
  },

  async beforeMount () {

    const id = this.$route.params.id

    const user = await api.getUser(id)
    console.log(user.data)
    this.user = user.data
    // const fetch = this.$store.getters.findBattle(this.$route.params.id)
  },

  mounted() {
    this.$store.dispatch('SET_BACK_BUTTON', true)

  }
}
</script>


<style>

</style>
