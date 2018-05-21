<template>
  <q-layout view="hHr Lpr lFf">
    <q-layout-header>
      <q-toolbar color="black">
        <q-toolbar-title glossy="true" align="center">
            BDE
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <div class="flex justify-center full-height items-center" >
      <q-card class="card inline shadow-6" >
        <q-card-title class="card-title purple">
          <q-card-media class="header-card">
            <img src="~assets/004.svg" height="200" width="400" style="position: absolute;z-index: 9;">
          </q-card-media>

        </q-card-title>

        <q-card-separator />

        <div v-if="isLogin">
          <q-card-main class="card-content bg-white ">
            <q-field :error="loginError" error-label="Credenciais inválidas. Insira as informações corretas, ou entre em contato com a gestão.">
              <q-input clearable color="dark" float-label="Email" required class="full-width" type="email" v-model="email" /> <br />
              <q-input color="dark" float-label="Senha" required class="full-width" type="password" v-model="password" />
            </q-field>
          </q-card-main>
        </div>

        <div v-if="isRegister">
          <q-card-main class="card-content bg-white ">
            <q-field :error="registerError" error-label="">
              <q-field :error="nameError" :error-label="nameErrorMsg">
                <q-input @input="checkUnique" color="dark" float-label="Vulgo de MC" required class="full-width" v-model="newUser.name" />
              </q-field> <br />
              <q-input @blur="$v.newUser.email.$touch" :error="$v.newUser.email.$error" clearable color="dark" float-label="Email" required class="full-width" type="email" v-model="newUser.email" /> <br />
              <q-input @blur="$v.newUser.password.$touch" :error="$v.newUser.password.$error" color="dark" float-label="Senha" required class="full-width" type="password" v-model="newUser.password" /><br />

              <q-radio v-model="newUser.gender" color="purple" val="mina" label="Mina" /> &nbsp&nbsp
              <q-radio v-model="newUser.gender" color="dark" val="mano" label="Mano" />
            </q-field>
          </q-card-main>
        </div>
        <q-card-separator />

        <q-card-actions v-if="isLogin" class="items-center">
          <q-btn class="fit push" icon="person" :loading="loading" label="Login" @click="login()"/>
          <q-btn class="fit push" @click="isRegister = 1; isLogin = 0;">Registrar</q-btn>
        </q-card-actions>
        <q-card-actions v-if="isRegister" class="items-center">
          <q-btn class="fit push" @click="register()" :loading="loading">Registrar</q-btn>
          <q-btn class="fit push" label="Voltar" @click="isLogin = 1; isRegister = 0"/>
        </q-card-actions>
      </q-card>
    </div>
  </q-layout>
</template>


<script>
import { required, email, minLength } from 'vuelidate/lib/validators'
import api from '../api'

export default {

  data () {
    return {
      users: null,

      email: null,
      password: null,
      loading: false,

      newUser: {
        name: null,
        email: null,
        password: null,
        gender: null
      },

      loginError: false,
      registerError: false,
      nameError: false,
      nameErrorMsg: '',

      isLogin: true,
      isRegister: false
    }
  },

  validations: {
    email: { required, email  },
    password: {required},
    newUser: {
      name: {
        required,
        minLength: minLength(3)
      },
      email: { required, email },
      password: { required },
      gender: { required }
    }
  },


  methods: {

    async login () {
      this.loading = true

      const payload = {
        email: this.email,
        password: this.password
      }

      try {
        const data = await this.$store.dispatch('login', payload)
        console.log(this.$store.getters.session)
      } catch (error) {
        this.loginError = true
        console.log(error)
      }

      if (this.loginError) {
        setTimeout( () => {
          this.loginError = false
          this.loading    = false
        }, 3000)
      } else {
        this.loading = false
        this.$router.replace('/profile')
      }
    },

    async register () {
      this.$v.newUser.$touch()

      if (this.$v.newUser.$error || this.nameError) {
        this.$q.notify({
          message: 'Insira os dados corretamente',
          color: 'black',
          textColor: 'white',
          timeout: 2000
        })
      } else {
        this.loading = true

        try {
          await this.$store.dispatch('register', this.newUser)
          this.loading = false
          this.$router.push('/profile')
        } catch (error) {
          this.$q.notify({
            message: 'Um usuário com esse email já existe !',
            color: 'black',
            textColor: 'white',
            timeout: 2000
          })
          this.loading = false
          throw error
        }

      }
    },

    async checkUnique (value) {
      const resp = await api.isUniqueName(value)
      if(resp.data == 'false') {
        this.nameError    = true
        this.nameErrorMsg = 'Já existe um MC com esse vulgo !'
      } else {
        this.nameError    = false
        this.nameErrorMsg = ''
      }
      return resp.data
    }
  }
}
</script>


<style scoped>
.card {
    margin-bottom: 0px;
    margin-top: 100px;
    width: 80%;
}
.card-content {
  min-height: 160px;
}
button {
  margin-bottom: 4%;
}
h4 {
  font-weight: 300;
}

.header-card {
  position: relative;
  z-index: 1;
  -webkit-overflow-scrolling: touch;
  height: 10em;
  background:
    radial-gradient(black 3px, transparent 4px),
    radial-gradient(black 3px, transparent 4px),
    linear-gradient(#fff 4px, transparent 0),
    linear-gradient(45deg, transparent 74px, transparent 75px, #a4a4a4 75px, #a4a4a4 76px, transparent 77px, transparent 109px),
    linear-gradient(-45deg, transparent 75px, transparent 76px, #a4a4a4 76px, #a4a4a4 77px, transparent 78px, transparent 109px),
  #fff;
  background-size: 109px 109px, 109px 109px,100% 6px, 109px 109px, 109px 109px;
  background-position: 54px 55px, 0px 0px, 0px 0px, 0px 0px, 0px 0px;
}

</style>
