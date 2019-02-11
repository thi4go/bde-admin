<template>
  <div class="column">

    <q-input
      v-model="desc"
      type="textarea"
      stack-label="sobre"
      clearable
      :max-height="100"
      placeholder="breve descrição da sua trajetória como músico, poeta, artista, cidadão"
      color="dark"
      rows="5"
    /><br /><br />

    <!-- <q-btn color="primary" label="Get Audio" @click="captureMedia" /> -->

    <div class="row justify-around">
      <q-btn :loading="loading" label="Salvar" @click="save"></q-btn>
    </div>
  </div>
</template>



<script>
import api from '../../api'

export default {

  data () {
    return {
      desc: null,
      media: null,
      loading: false
    }
  },

  beforeMount () {
    this.desc = this.$store.getters.session.user.biography
  },


  methods: {

    captureMedia () {

    },

    async save () {
      this.loading = true

      const id = this.$store.getters.session.user._id

      const payload = {
        biography: this.desc
      }

      try {
        const resp = await api.updateUser(id, payload)
        this.$store.dispatch('SET_USER', resp.data)

        this.$q.notify({
          message: 'Biografia atualizada com sucesso',
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
