<template>
  <div>
    <q-btn
      color="dark"
      @click="opened = true"
      icon="fa-plus"
      outline
      size="sm"
    />


    <q-modal content-classes="list-modal" minimized v-model="opened">
      <!-- Notice "dark" property -->

      <q-btn
        :loading="loading"
        label="Salvar Link"
        icon="fa-exchange-alt"
        color="dark"
        @click="editRound (user)"
      />

    </q-modal>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import api from '../../api'

export default {
  name: 'AddLinkModal',

  data () {
    return {
      opened: false,
      loading: false,
      search: ''
    }
  },


  methods: {

    async editRound (user) {
      this.loading = true

      var payload = null

      if (this.position == 1) {
        payload = {
          first: user._id
        }
      } else if (this.position == 2) {
        payload = {
          second: user._id
        }
      } else if (this.position == 3) {
        payload = {
          third: user._id
        }
      }

      const resp = await api.updateRound(this.round._id, payload)

      this.$emit('update', resp.data)

      this.loading = false
      this.opened  = false
    }
  }
}

</script>

<style>
.list-modal {
  width: 600px;
  padding: 20px;
  margin: 20px;
}

</style>
