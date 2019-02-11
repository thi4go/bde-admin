<template>
  <div class="column">
    <div class="row justify-around">
      <q-icon name="fab fa-instagram" size="2em"></q-icon>
      <q-input type="text" stack-label="instagram" v-model="instagram" color="dark"></q-input>
    </div> <br />
    <div class="row justify-around">
      <q-icon name="fab fa-facebook" size="2em"></q-icon>
      <q-input type="text" stack-label="facebook" v-model="facebook" color="dark"></q-input>
    </div> <br />
    <div class="row justify-around">
      <q-icon name="fab fa-youtube" size="2em"></q-icon>
      <q-input type="text" stack-label="youtube" v-model="youtube" color="dark"></q-input>
    </div> <br /> <br />

    <div class="row justify-around">
      <q-btn :loading="loading" label="Salvar" @click="update"></q-btn>
    </div>
  </div>
</template>



<script>
import api from '../../api'

export default {

  data () {
    return {
      loading: false,

      instagram: null,
      facebook: null,
      youtube: null
    }
  },


  beforeMount () {
    this.instagram = this.$store.getters.session.user.instagram
    this.facebook  = this.$store.getters.session.user.facebook
    this.youtube   = this.$store.getters.session.user.youtube

  },

  methods: {

    async update () {
      this.loading = true
      const payload = {
        instagram: this.instagram,
        facebook: this.facebook,
        youtube: this.youtube
      }

      const id = this.$store.getters.session.user._id

      try {
        const resp = await api.updateUser(id, payload)

        this.$store.dispatch('SET_USER', resp.data)

        this.$q.notify({
          message: 'Mídias atualizadas com sucesso',
          color: 'black',
          textColor: 'white',
          timeout: 2000
        })
      } catch (err) {
        console.log(err)

        this.$q.notify({
          message: 'Error no servidor. Contacte o suporte',
          color: 'black',
          textColor: 'white',
          timeout: 2000
        })
      }
      this.loading = false
    }
  }

}
</script>



<style>

</style>
