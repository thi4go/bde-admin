<template>
<q-page>

</q-page>
</template>


<script>
export default {
  mounted () {
    this.$store.dispatch('SET_BACK_BUTTON', true)
    const fetch = this.$store.getters.findBattle(this.$route.params.id)
    this.battle = fetch[0]
    console.log(this.battle)
  },

  beforeDestroy () {
    this.$store.dispatch('SET_BACK_BUTTON', false)
  }
}
</script>


<style>

</style>
