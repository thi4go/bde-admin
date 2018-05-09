<template>
  <div class="column">
    <q-timeline color="dark">
      <q-timeline-entry heading class="items-center">
        linha do tempo
      </q-timeline-entry>

      <q-timeline-entry
        title="Event Title"
        subtitle="February 22, 1986"
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
