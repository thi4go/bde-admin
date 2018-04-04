<template>
  <q-page>
  <div class="no-scroll" no-scroll>

    <div v-if="loading">
      <q-inner-loading :visible="loading">
        <q-spinner-gears size="50px" color="black"></q-spinner-gears>
      </q-inner-loading>
    </div>

    <div v-else-if="this.$store.getters.activeBattle != null">
      <battle-record />
    </div>

    <div v-else>
      <!-- <battle-creator /> -->
      <p>
        ranking.;
      </p>
    </div>



  </div>
  </q-page>
</template>

<script>
import BattleRecord from 'pages/admin/BattleRecord'
import BattleCreator from 'components/battle/BattleCreator'

export default {
  name: 'Battle',

  components: { BattleRecord, BattleCreator },

  data () {
    return {
      loading: false
    }
  },

  async beforeMount () {

    if (this.$store.getters.activeBattle == null) {
      this.loading = true
      await this.$store.dispatch('SET_BSTATE')
    }
    if (this.$store.getters.users.length == 0) {
      await this.$store.dispatch('SET_USTATE')
    }

    console.log(this.$store.getters.battles)
    console.log(this.$store.getters.activeBattle)

    this.loading = false
  },

  mounted () {
    // console.log(this.battle)
  }

}

</script>
