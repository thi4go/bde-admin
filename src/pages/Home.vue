<template>
  <q-page>

    <div v-for="battle in $store.getters.battles">
      <br />
      <q-card inline style="width: 100%">
        <q-card-title color="black">
          {{battle.name}}
          <span slot="subtitle">degrau a degrau, mil grau.</span><br />

          <div slot="right" class="row items-center">
            <span v-if="!battle.active">{{DateFormat.parse(battle.created)}}</span>
            <span v-else><b>Em andamento !</b></span>
          </div>
        </q-card-title>
        <q-card-separator />

        <q-card-main>
          <div class="row wrap">
            <div class="col-6">
              <q-card-media style="width: 90%;">
                <img align="center" src="~assets/003.svg" width="50%" height="50%">
              </q-card-media>
            </div>

            <div class="col-6">
              <table class="q-table" slot="right">
                <thead>
                  <tr>
                    <th class="text-left">estatísticas</th>
                    <th class="text-right">#</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td class="text-left">mcs</td>
                    <td class="text-right">x</td>
                  </tr>
                  <tr>
                    <td class="text-left">rounds</td>
                    <td class="text-right">y</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </q-card-main>


        <q-card-separator />

        <q-card-actions align="around">
          <q-btn @click="$router.push('/battle/detail/'+battle._id)" flat round small icon="fa-eye" color="dark" />
        </q-card-actions>

      </q-card>
    </div>
    <q-inner-loading :visible="loading">
      <q-spinner-gears size="50px" color="black"></q-spinner-gears>
    </q-inner-loading>
  </q-page>

</template>

<script>
import DateFormat from '../utils/DateFormat'

export default {
  name: 'Home',

  components: { DateFormat },

  data () {
    return {
      DateFormat: null
    }
  },

  async beforeMount() {
    if (this.$store.getters.battles.length == 0) {
      this.loading = true
      await this.$store.dispatch('SET_BSTATE')
    }

    this.loading = false
    this.DateFormat = DateFormat
  },

  methods: {

  }
}
</script>
