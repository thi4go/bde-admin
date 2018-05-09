<template>
  <div class="column">
    <div class="row justify-around">
      <q-icon name="fab fa-instagram" size="2em"></q-icon>
      <q-input type="text" stack-label="instagram" v-model="insta" color="dark"></q-input>
    </div> <br />
    <div class="row justify-around">
      <q-icon name="fab fa-facebook" size="2em"></q-icon>
      <q-input type="text" stack-label="facebook" v-model="face" color="dark"></q-input>
    </div> <br />
    <div class="row justify-around">
      <q-icon name="fab fa-youtube" size="2em"></q-icon>
      <q-input type="text" stack-label="youtube" v-model="youtube" color="dark"></q-input>
    </div> <br /> <br />

    <div class="row justify-around">
      <q-btn :loading="loading" label="Salvar"></q-btn>
    </div>
  </div>
</template>



<script>
export default {

  data () {
    return {
      loading: false,

      insta: null,
      face: null,
      youtube: null
    }
  },


  beforeMount () {
    console.log(this.$store.getters.user)
  }

}
</script>



<style>

</style>
