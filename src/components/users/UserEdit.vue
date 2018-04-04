<template>
  <div>
    <q-btn size="md" flat icon="fa-edit" @click="opened = true"/>

    <q-modal content-classes="edit-modal" minimized v-model="opened">
      <!-- Notice "dark" property -->
      <p>Editar usuário</p>
      <div class="overflow-hidden">
        <div class="gutter-sm">
          <q-input v-model="user.name" color="black" float-label="Nome"  />
          <q-input v-model="user.email" color="black" float-label="Email" />
          <div class="row lg-gutter no-wrap">
            <q-radio v-model="user.gender" color="black" val="mano" label="Mano" /> &nbsp&nbsp&nbsp
            <q-radio v-model="user.gender" color="black" val="mina" label="Mina" />
          </div>
          <q-select v-model="user.user_level" float-label="Nível" separator :options="userLevelOptions" />

          <div class="text-center no-wrap">
            <q-btn color="primary" :loading="loading" @click="update" label="Editar" />
            <q-btn color="dark" @click="opened = false" label="Fechar" />
          </div>
        </div>
      </div>

    </q-modal>

  </div>
</template>

<script>
import api from '../../api'

export default {
  name: 'UserEdit',

  props: ['user'],

  data () {
    return {
      userLevelOptions: [
        {
          label: 'Normal',
          value: 1
        },
        {
          label: 'Gestão',
          value: 2
        },
        {
          label: 'Administrador',
          value: 3
        }
      ],
      opened: false,
      loading: false
    }
  },

  methods: {
    async update () {
      this.loading = true

      try {
        await api.updateUser(this.user._id, this.user)

        this.$q.notify({
          message: 'MC editado com sucesso',
          color: 'black',
          textColor: 'white',
          timeout: 2000
        })

      } catch (err) {
        console.log(err)
        this.$q.notify({
          message: 'Error no servidor, contacte o suporte',
          color: 'black',
          textColor: 'white',
          timeout: 2000
        })
      }

      this.opened  = false
      this.loading = false

    }
  }
}

</script>

<style>
.edit-modal {
  padding: 20px;
  margin: 20px;
}

</style>
