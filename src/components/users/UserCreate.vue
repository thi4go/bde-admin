<template>
  <div>
    <q-btn
      color="dark"
      @click="opened = true"
    >
      <q-icon name="add" />
    </q-btn>

    <q-modal content-classes="create-modal" minimized v-model="opened">
        <!-- Notice "dark" property -->
        <p class="text-bold">Criar usuário</p>
        <div class="container">
          <q-input float-label="Nome artístico" v-model="name" />
          <q-input v-model="email" float-label="Email" />
          <q-input v-model="password" float-label="Senha" type="password" />
          <br />
          <div class="row lg-gutter no-wrap">
            <q-field>
              <q-radio v-model="gender" val="mano" label="Mano" />
              <q-radio v-model="gender" val="mina" label="Mina" />
            </q-field>
          </div>
          <br />
          <div class="row lg-gutter no-wrap">
            <q-field>
              <q-checkbox v-model="virgin" label="Primeira vez?" />
            </q-field>
          </div>
          <br />
        </div>
        <div class="text-center no-wrap">
          <q-btn color="primary" :loading="loading" @click="create" label="Criar" />
          <q-btn color="dark" @click="opened = false" label="Fechar" />
        </div>
      </q-modal>
  </div>
</template>

<script>
import api from '../../api'

export default {
  name: 'UserCreate',

  data () {
    return {
      name: null,
      email: null,
      password: null,
      gender: null,
      virgin: false,

      opened: false,
      loading: false

    }
  },

  methods: {
    async create () {
      this.loading = true

      const data = {
        name: this.name,
        email: this.email,
        password: this.password,
        gender: this.gender,
        virgin: this.virgin
      }

      try {
        let r = await api.createUser(data)

        console.log(r)
        this.$store.commit('ADD_USER_OBJ', r.data)

        this.$q.notify({
          message: 'MC criado com sucesso',
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
.create-modal {
  width: 600px;
  padding: 20px;
  margin: 20px;
}

</style>
