<template>
  <div class="column">
    <q-input
      v-model="desc"
      type="textarea"
      stack-label="sobre"
      clearable
      :max-height="100"
      placeholder="breve descrição da sua trajetória como MC, músico, poeta, artista"
      color="dark"
      rows="5"
    /><br /><br />

    <div class="row justify-around">
      <q-btn :loading="loading" label="Salvar"></q-btn>
    </div>
  </div>
</template>



<script>
export default {

  data () {
    return {
      desc: null,
      loading: false
    }
  },

  beforeMount () {

  }

}
</script>



<style>

</style>
