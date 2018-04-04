<template>

<div class="login text-center">
  <div class="shadow-6 justify-center responsive">
    <form style="margin-left: 20px; margin-right: 20px;">
      <p>Login</p>
      <q-field error-label="We need a valid email">
        <q-input v-model="email" placeholder="email@gmail.com" color="black"/>
      </q-field>

      <q-field error-label="We need a valid email">
        <q-input v-model="pwd" placeholder="senha" type="password" color="black" />
      </q-field>
      <q-btn @click="login" loader push color="grey-10" icon="fa-location-arrow" />
      <br><br>
    </form>
  </div>
</div>

</template>

<script>

import { mapActions } from 'vuex'

export default {

  data () {
    return {
      email: null,
      pwd: null
    }
  },

  methods: {

    async login () {
      const payload = {
        email: this.email,
        password: this.pwd
      }

      try {
        await this.$store.dispatch('login', payload)
        this.$router.push('/profile')
      } catch (error) {
        throw error
      }
    }
  }

}

</script>

<style scoped>

.login {
  margin-top: 40px;
  height: 18em;
  top: 0;
}


</style>
