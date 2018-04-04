<template>
<q-page>



</q-page>
</template>


<script>

export default {
  name: 'BattleDetail',

  data () {
    battle: null
  },

  mounted () {
    this.battle = this.$store.getters.findBattle(this.$router.params.id)

    console.log(this.battle)
  },


}

</script>


<style>

</style>
