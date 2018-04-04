<template>
  <div>
    <q-btn size="md" flat outline icon="fa-trash-alt" @click="opened = true"/>

    <q-modal content-classes="delete-modal" minimized v-model="opened">
      <!-- Notice "dark" property -->
      <big>Deseja deletar esse usuário?</big><br /><br />
      <p>todos os seus registros vão ser eliminados do banco de dados</p>
      <br />
      <div class="text-center no-wrap">
        <q-btn color="negative" :loading="loading" @click="del" label="Deletar" />
        <q-btn color="dark" @click="opened = false" label="Fechar" />
      </div>
    </q-modal>
  </div>
</template>


<script>
import api from '../../api'

export default {
  name: 'UserDelete',

  props: ['user'],

  data () {
    return {
      opened: false,
      loading: false
    }
  },


  methods: {
    async del () {
      this.loading = true

      try {
        await api.deleteUser(this.user._id)

        await this.$store.dispatch('FETCH_USERS', this.user)

        this.$q.notify({
          message: 'MC deletado com sucesso',
          color: 'black',
          textColor: 'white',
          timeout: 2000
        })

      } catch (err) {
        console.log(err)

        this.$q.notify({
          message: 'Error no servidor, contacte o suporte.',
          color: 'black',
          textColor: 'white',
          timeout: 2000
        })
      }

      this.loading = false
      this.opened  = false
    }
  }


}
</script>


<style>
.delete-modal {
  padding: 20px;
  margin: 20px;
}
</style>
