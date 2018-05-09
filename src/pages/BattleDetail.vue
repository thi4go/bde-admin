<template>
<q-page>



</q-page>
</template>


<script>

export default {
  name: 'BattleDetail',

  data () {
    return {
      battle: null
    }
  },

  mounted () {
    const fetch = this.$store.getters.findBattle(this.$route.params.id)
    this.battle = fetch[0]
    console.log(this.battle)
  },


}

</script>


<style>

</style>
