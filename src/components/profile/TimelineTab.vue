<template>
  <div class="column">

    <q-timeline color="dark">
      <q-timeline-entry heading class="items-center">
        linha do tempo
      </q-timeline-entry>

      <q-timeline-entry
        title="Chegou às finais da batalha ! "
        subtitle="Maio 23, 2018"
        side="left"
      >
        <div>
          ..
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Participação na primeira batalha "
        subtitle="Março 12, 2018"
        side="left"
      >
        <div>
          Lorem ipsum dolor sit amet.
        </div>
      </q-timeline-entry>

      <q-timeline-entry
        title="Cadastrado no sistema"
        subtitle="Janeiro 22, 2017"
        side="left"
      >
        <div>
          Lorem ipsum dolor sit amet.
        </div>
      </q-timeline-entry>
    </q-timeline>

  </div>
</template>



<script>
export default {

  data () {
    return {
      desc: null,
      user: null
    }
  },

  beforeMount () {
    this.user = this.$store.getters.session.user
    console.log(this.user)
  }

}
</script>



<style>

</style>
