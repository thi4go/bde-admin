<template>

<div class="register text-center">
  <div class="shadow-6 justify-center responsive">
    <form style="margin-left: 20px; margin-right: 20px;">
      <p>Cadastro</p> 
      <q-field error-label="We need a valid email">
        <q-input v-model="payload.name" placeholder="nome artístico" color="black"/>
      </q-field>

      <q-field error-label="We need a valid email">
        <q-input v-model="payload.email" placeholder="email" color="black"/>
      </q-field>

      <q-field error-label="We need a valid email">
        <q-input v-model="payload.password" placeholder="senha" type="password" color="black" />
      </q-field>

      <q-field>
        <q-radio v-model="payload.gender" val="mina" label="Mina" />
        <q-radio v-model="payload.gender" val="mano" label="Mano" />
      </q-field>

      <q-field>
        <q-btn @click="register" loader push color="grey-10" icon="fa-location-arrow" />
      </q-field>
      <br>
    </form>
  </div>
</div>

</template>

<script>
export default {
  data() {
    return {
      payload: {
        name: null,
        email: null,
        password: null,
        gender: null
      }
    }
  },

  methods: {
    async register() {
      try {
        await this.$store.dispatch('register', this.payload)
        this.$router.push('/profile')
      } catch (error) {
        throw error
      }
    }
  }
};
</script>

<style scoped>
.register {
  margin-top: 40px;
  height: 20em;
  top: 0;
}
</style>
